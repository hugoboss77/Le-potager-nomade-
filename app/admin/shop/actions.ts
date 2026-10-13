"use server";
import {createClient} from "@/utils/supabase/server";
import {redirect} from "next/navigation";
import {revalidatePath} from "next/cache";
async function regionClient(){const db=await createClient();const {data:{user}}=await db.auth.getUser();if(!user)redirect("/admin/login");const {data:profile}=await db.from("admin_profiles").select("region").eq("id",user.id).single();if(!profile||!["77","38"].includes(profile.region))throw Error("Accès refusé");return {db,region:profile.region as "77"|"38"};}
export async function saveProduct(form:FormData){
 const {db,region}=await regionClient();const title=String(form.get("title")??"").trim();const description=String(form.get("description")??"").trim();const image_url=String(form.get("image_url")??"").trim();const euros=String(form.get("price")??"").replace(",",".");const price=Number(euros);const id=String(form.get("id")??"");
 if(!title||title.length>150||!Number.isFinite(price)||price<0||price>10000||!/^\d+(?:[.,]\d{1,2})?$/.test(String(form.get("price")??"")))throw Error("Produit invalide");
 if(image_url && (!/^https:\/\//.test(image_url)||image_url.length>2000))throw Error("Lien photo invalide");
 const data={region,title,description:description.slice(0,4000),image_url:image_url||null,price_cents:Math.round(price*100),published:form.get("published")==="on"};
 const query=id?db.from("shop_products").update(data).eq("id",id).eq("region",region):db.from("shop_products").insert(data);
 const {error}=await query;if(error)throw Error(error.message);
 revalidatePath("/admin/shop");revalidatePath(`/${region}/epicerie`);redirect("/admin/shop");
}
export async function savePickup(form:FormData){
 const {db,region}=await regionClient();const label=String(form.get("label")??"").trim();const details=String(form.get("details")??"").trim();const id=String(form.get("id")??"");
 if(!label||label.length>150)throw Error("Lieu invalide");
 const data={region,label,details:details.slice(0,1000),appointment:form.get("appointment")==="on",published:form.get("published")==="on"};
 const query=id?db.from("shop_pickups").update(data).eq("id",id).eq("region",region):db.from("shop_pickups").insert(data);
 const {error}=await query;if(error)throw Error(error.message);
 revalidatePath("/admin/shop");revalidatePath(`/${region}/epicerie`);redirect("/admin/shop");
}
