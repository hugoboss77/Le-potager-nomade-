import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(request: Request) {
 try {
  const body = await request.json();
  const region = body.region;
  const name = String(body.name ?? "").trim().slice(0,120);
  const phone = String(body.phone ?? "").replace(/\s/g,"").trim();
  const pickupId = String(body.pickupId ?? "");
  const lines = body.items;
  if (!["77","38"].includes(region) || name.length < 2 || !/^(?:\+33|0)[1-9]\d{8}$/.test(phone) || !Array.isArray(lines) || lines.length < 1 || lines.length > 30 || !/^[0-9a-f-]{36}$/i.test(pickupId)) return NextResponse.json({error:"Informations invalides"},{status:400});
  const url=process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key=process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return NextResponse.json({error:"Service de commande non configuré"},{status:503});
  const db=createClient(url,key,{auth:{persistSession:false,autoRefreshToken:false}});
  const {data:pickup}=await db.from("shop_pickups").select("id,label").eq("id",pickupId).eq("region",region).eq("published",true).single();
  if(!pickup) return NextResponse.json({error:"Retrait indisponible"},{status:400});
  const qtyById=new Map<string,number>();
  for(const line of lines) {
   const id=String(line.id ?? "");
   const qty=Number(line.quantity);
   if(!/^[0-9a-f-]{36}$/i.test(id)||!Number.isInteger(qty)||qty<1||qty>30) return NextResponse.json({error:"Panier invalide"},{status:400});
   qtyById.set(id,(qtyById.get(id)??0)+qty);
  }
  if([...qtyById.values()].some(q=>q>30)) return NextResponse.json({error:"Quantité trop élevée"},{status:400});
  const {data:products,error:productError}=await db.from("shop_products").select("id,title,price_cents").eq("region",region).eq("published",true).in("id",[...qtyById.keys()]);
  if(productError || !products || products.length!==qtyById.size) return NextResponse.json({error:"Produit indisponible"},{status:400});
  const items=products.map(p=>({id:p.id,title:p.title,price_cents:p.price_cents,quantity:qtyById.get(p.id)!}));
  const total=items.reduce((sum,p)=>sum+p.price_cents*p.quantity,0);
  if(total>200000) return NextResponse.json({error:"Montant trop élevé"},{status:400});
  const {data:order,error}=await db.from("shop_orders").insert({region,customer_name:name,phone,pickup_id:pickup.id,pickup_label:pickup.label,items,total_cents:total}).select("id").single();
  if(error) throw error;
  // A notification failure must never erase a successfully saved order.
  let emailNotification = false;
  const resendKey = process.env.RESEND_API_KEY;
  const from = process.env.ORDER_NOTIFICATION_FROM;
  if (resendKey && from) {
   const euros = (cents: number) => (cents / 100).toLocaleString("fr-FR", {style:"currency",currency:"EUR"});
   const message = [
    "Nouvelle commande - Le Potager Nomade",
    "Référence : " + order.id,
    "Département : " + region,
    "Client : " + name,
    "Téléphone : " + phone,
    "Retrait : " + pickup.label,
    "",
    "Produits :",
    ...items.map(item => item.quantity + " x " + item.title + " - " + euros(item.quantity * item.price_cents)),
    "",
    "Total : " + euros(total),
    "",
    "Commande à confirmer auprès du client."
   ].join("\n");
   try {
    const mail = await fetch("https://api.resend.com/emails", {
     method:"POST",
     headers:{"Authorization":"Bearer " + resendKey,"Content-Type":"application/json"},
     body:JSON.stringify({
      from,
      to:["lepotagernomade.contact@gmail.com"],
      subject:"Nouvelle commande épicerie " + region + " - " + name,
      text:message
     }),
     signal:AbortSignal.timeout(8000)
    });
    emailNotification = mail.ok;
    if (!mail.ok) console.error("Notification de commande refusée :", mail.status, await mail.text());
   } catch (mailError) {
    console.error("Notification de commande impossible :", mailError);
   }
  } else {
   console.warn("Notification email non configurée : RESEND_API_KEY ou ORDER_NOTIFICATION_FROM manquant.");
  }
  return NextResponse.json({id:order.id,emailNotification});
 } catch {
  return NextResponse.json({error:"Impossible d'enregistrer la demande"},{status:500});
 }
}
