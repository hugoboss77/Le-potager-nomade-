"use client";
import {useMemo,useState} from "react";
type Product={id:string;title:string;description:string;image_url:string|null;price_cents:number};
type Pickup={id:string;label:string;details:string;hours?:string;appointment:boolean};
export default function ShopFront({region,products,pickups}:{region:"77"|"38";products:Product[];pickups:Pickup[]}){
 const [cart,setCart]=useState<Record<string,number>>({});
 const [pickup,setPickup]=useState(pickups[0]?.id??"");
 const [name,setName]=useState("");const [phone,setPhone]=useState("");
 const [sending,setSending]=useState(false);const [error,setError]=useState("");const [success,setSuccess]=useState("");
 const lines=useMemo(()=>products.filter(p=>cart[p.id]>0),[cart,products]);
 const total=lines.reduce((s,p)=>s+p.price_cents*cart[p.id],0);
 const euros=(c:number)=>(c/100).toLocaleString("fr-FR",{style:"currency",currency:"EUR"});
 const pickupLabel=pickups.find(p=>p.id===pickup)?.label??"";
 const summary=`COMMANDE ÉPICERIE ${region}\nNom : ${name}\nTéléphone : ${phone}\nRetrait : ${pickupLabel}\n\n${lines.map(p=>`${cart[p.id]} × ${p.title} — ${euros(cart[p.id]*p.price_cents)}`).join("\n")}\nTotal : ${euros(total)}\nSous réserve de confirmation.`;
 const valid=name.trim().length>=2 && /^(?:\+33|0)[1-9]\d{8}$/.test(phone.replace(/\s/g,"")) && pickup && lines.length>0;
 async function send(){
  if(!valid)return;
  setSending(true);setError("");
  try{
   const res=await fetch("/api/shop/orders",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({region,name,phone,pickupId:pickup,items:lines.map(p=>({id:p.id,quantity:cart[p.id]}))})});
   const result=await res.json();if(!res.ok)throw Error(result.error??"Erreur");
   setSuccess(result.id);setCart({});
  }catch(e){setError(e instanceof Error?e.message:"Erreur d'envoi");}
  finally{setSending(false);}
 }
 const input="w-full rounded-2xl border border-[#18392b]/15 bg-white px-4 py-3 outline-none focus:border-[#d96b38]";
 return <div className="mx-auto max-w-[1400px] px-6 py-14 lg:px-12">
  <div className="mb-12"><p className="text-xs font-bold uppercase tracking-[.25em] text-[#d96b38]">Le Potager Nomade • {region}</p><h1 className="mt-4 text-5xl font-semibold tracking-tight">Notre épicerie fine</h1><p className="mt-4 text-[#18392b]/65">Des produits gourmands à réserver et à récupérer près de chez vous.</p></div>
  <div className="grid gap-10 lg:grid-cols-[1fr_380px]">
   <div className="grid gap-5 sm:grid-cols-2">
    {products.map(p=><article key={p.id} className="overflow-hidden rounded-[2rem] bg-white">
      {p.image_url?<img src={p.image_url} alt={p.title} className="h-56 w-full object-cover"/>:<div className="flex h-56 items-center justify-center bg-[#e9e1d3] text-[#18392b]/45">Le Potager Nomade</div>}
      <div className="p-6"><h2 className="text-2xl font-semibold">{p.title}</h2><p className="mt-3 whitespace-pre-wrap text-[#18392b]/65">{p.description}</p><div className="mt-6 flex items-center justify-between gap-3"><strong className="text-xl">{euros(p.price_cents)}</strong><button className="rounded-full bg-[#18392b] px-5 py-3 text-sm font-semibold text-white" onClick={()=>setCart(c=>({...c,[p.id]:(c[p.id]??0)+1}))}>+ Ajouter</button></div></div>
    </article>)}
    {!products.length&&<p>Aucun produit disponible pour le moment.</p>}
   </div>
   <aside className="h-fit rounded-[2rem] bg-white p-6 lg:sticky lg:top-6">
    <h2 className="text-2xl font-semibold">Votre panier</h2>
    {!lines.length?<p className="mt-5 text-[#18392b]/60">Votre panier est vide.</p>:<div className="mt-5 space-y-4">{lines.map(p=><div key={p.id} className="flex items-center justify-between gap-3 border-b border-[#18392b]/10 pb-3"><div><p className="font-semibold">{p.title}</p><p className="text-sm">{euros(p.price_cents*cart[p.id])}</p></div><div className="flex items-center gap-2"><button aria-label="Retirer une unité" onClick={()=>setCart(c=>({...c,[p.id]:Math.max(0,c[p.id]-1)}))} className="rounded-full border px-3 py-1">−</button><span>{cart[p.id]}</span><button aria-label="Ajouter une unité" onClick={()=>setCart(c=>({...c,[p.id]:c[p.id]+1}))} className="rounded-full border px-3 py-1">+</button></div></div>)}</div>}
    <p className="mt-5 text-xl font-bold">Total : {euros(total)}</p>
    <div className="mt-6 space-y-4"><label className="block text-sm font-semibold">Nom et prénom *<input className={input+" mt-2"} value={name} onChange={e=>setName(e.target.value)} autoComplete="name" required/></label><label className="block text-sm font-semibold">Téléphone *<input className={input+" mt-2"} type="tel" value={phone} onChange={e=>setPhone(e.target.value)} autoComplete="tel" placeholder="06 12 34 56 78" required/></label><label className="block text-sm font-semibold">Lieu de retrait *<select className={input+" mt-2"} value={pickup} onChange={e=>setPickup(e.target.value)}><option value="">Choisir un retrait</option>{pickups.map(p=><option key={p.id} value={p.id}>{p.label}</option>)}</select></label>{pickups.find(p=>p.id===pickup)?.hours&&<p className="text-sm font-semibold text-[#18392b]">Horaires : {pickups.find(p=>p.id===pickup)?.hours}</p>}{pickups.find(p=>p.id===pickup)?.details&&<p className="text-sm text-[#18392b]/65">{pickups.find(p=>p.id===pickup)?.details}</p>}</div>
    <p className="mt-5 text-xs text-[#18392b]/60">Demande de réservation sans paiement. Nous vous recontactons pour confirmer la disponibilité et le retrait.</p>
    {error&&<p role="alert" className="mt-4 text-red-700">{error}</p>}
    {success&&<p role="status" className="mt-4 rounded-xl bg-[#e5f2e8] p-4 text-sm">Demande enregistrée (réf. {success}). Nous vous recontacterons. Aucun email automatique n'est encore configuré.</p>}
    <button disabled={!valid||sending} onClick={send} className="mt-5 w-full rounded-full bg-[#18392b] px-5 py-4 font-semibold text-white disabled:opacity-40">{sending?"Envoi...":"Envoyer ma demande"}</button>
    <a aria-disabled={!valid} onClick={e=>{if(!valid)e.preventDefault()}} href={valid?`https://wa.me/${region==="77"?"33617898012":"33634441428"}?text=${encodeURIComponent(summary)}`:"#"} target="_blank" rel="noopener noreferrer" className={`mt-3 block rounded-full border border-[#18392b] px-5 py-4 text-center font-semibold ${!valid?"pointer-events-none opacity-40":""}`}>Ou envoyer par WhatsApp</a>
   </aside>
  </div>
 </div>;
}
