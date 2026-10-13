"use server";
import {createClient} from "@/utils/supabase/server";
import {redirect} from "next/navigation";
import {revalidatePath} from "next/cache";
async function regionClient(){const db=await createClient();const {data:{user}}=await db.auth.getUser();if(!user)redirect("/admin/login");const {data:profile}=await db.from("admin_profiles").select("region").eq("id",user.id).single();if(!profile||!["77","38"].includes(profile.region))throw Error("Accès refusé");return {db,region:profile.region as "77"|"38"};}
export async function saveProduct(form:FormData){
 const {db,region}=await regionClient();const title=String(form.get("title")??"").trim();const description=String(form.get("description")??"").trim();const photo=form.get("photo");const euros=String(form.get("price")??"").replace(",",".");const price=Number(euros);const id=String(form.get("id")??"");
 if(!title||title.length>150||!Number.isFinite(price)||price<0||price>10000||!/^\d+(?:[.,]\d{1,2})?$/.test(String(form.get("price")??"")))throw Error("Produit invalide");
 let image_url:string|null=null;
 if(id){
  const {data:existing,error:readError}=await db.from("shop_products").select("image_url").eq("id",id).eq("region",region).single();
  if(readError)throw Error("Produit introuvable");
  image_url=existing.image_url;
 }
 if(form.get("remove_photo")==="on")image_url=null;
 if(photo instanceof File && photo.size>0){
  const allowed=["image/jpeg","image/png","image/webp","image/gif"];
  if(!allowed.includes(photo.type)||photo.size>5*1024*1024)throw Error("Photo invalide : JPG, PNG, WebP ou GIF, 5 Mo maximum.");
  const ext:Record<string,string>={"image/jpeg":"jpg","image/png":"png","image/webp":"webp","image/gif":"gif"};
  const path=`${region}/${crypto.randomUUID()}.${ext[photo.type]}`;
  const {error:uploadError}=await db.storage.from("shop-product-images").upload(path,photo,{contentType:photo.type,upsert:false});
  if(uploadError)throw Error("Import photo : "+uploadError.message);
  image_url=db.storage.from("shop-product-images").getPublicUrl(path).data.publicUrl;
 }
 const data={region,title,description:description.slice(0,4000),image_url,price_cents:Math.round(price*100),published:form.get("published")==="on"};
 const query=id?db.from("shop_products").update(data).eq("id",id).eq("region",region):db.from("shop_products").insert(data);
 const {error}=await query;if(error)throw Error(error.message);
 revalidatePath("/admin/shop");revalidatePath(`/${region}/epicerie`);redirect("/admin/shop");
}
export async function savePickup(form:FormData){
 const {db,region}=await regionClient();const label=String(form.get("label")??"").trim();const details=String(form.get("details")??"").trim();const hours=String(form.get("hours")??"").trim();const id=String(form.get("id")??"");
 if(!label||label.length>150)throw Error("Lieu invalide");
 if(hours.length>200)throw Error("Horaires trop longs");
 const data={region,label,details:details.slice(0,1000),hours,appointment:form.get("appointment")==="on",published:form.get("published")==="on"};
 const query=id?db.from("shop_pickups").update(data).eq("id",id).eq("region",region):db.from("shop_pickups").insert(data);
 const {error}=await query;if(error)throw Error(error.message);
 revalidatePath("/admin/shop");revalidatePath(`/${region}/epicerie`);redirect("/admin/shop");
}
