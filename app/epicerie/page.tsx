import Link from "next/link";

export const metadata = {
 title: "Épicerie fine | Le Potager Nomade",
 description: "Réservez nos soupes, confitures et spécialités artisanales. Choisissez votre région pour découvrir notre épicerie fine."
};

export default function EpiceriePage() {
 return <main className="min-h-screen bg-[#f4f0e6] px-6 py-12 text-[#18392b] lg:px-12">
  <div className="mx-auto max-w-5xl">
   <Link href="/" className="text-sm font-semibold hover:underline">← Retour à l'accueil</Link>
   <div className="mx-auto max-w-2xl pb-12 pt-20 text-center">
    <p className="text-xs font-bold uppercase tracking-[.25em] text-[#d96b38]">Le Potager Nomade</p>
    <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">Notre épicerie fine</h1>
    <p className="mt-5 text-lg leading-8 text-[#18392b]/70">Soupes, confitures et gourmandises à réserver en ligne et à récupérer près de chez vous.</p>
    <p className="mt-5 font-semibold">Où souhaitez-vous retirer votre commande ?</p>
   </div>
   <div className="grid gap-5 md:grid-cols-2">
    <Link href="/77/epicerie" className="group rounded-[2rem] bg-[#18392b] p-8 text-white transition-transform hover:-translate-y-1 sm:p-12">
     <span className="text-xs font-bold uppercase tracking-[.2em] text-white/60">Choisir ma région</span>
     <p className="mt-12 text-7xl font-semibold tracking-tight">77</p>
     <h2 className="mt-3 text-2xl font-semibold">Seine-et-Marne</h2>
     <p className="mt-4 text-white/75">Découvrir les produits disponibles et les points de retrait.</p>
     <p className="mt-10 font-semibold">Accéder à la boutique →</p>
    </Link>
    <Link href="/38/epicerie" className="group rounded-[2rem] bg-[#d96b38] p-8 text-white transition-transform hover:-translate-y-1 sm:p-12">
     <span className="text-xs font-bold uppercase tracking-[.2em] text-white/75">Choisir ma région</span>
     <p className="mt-12 text-7xl font-semibold tracking-tight">38</p>
     <h2 className="mt-3 text-2xl font-semibold">Isère</h2>
     <p className="mt-4 text-white/85">Découvrir les produits disponibles et les points de retrait.</p>
     <p className="mt-10 font-semibold">Accéder à la boutique →</p>
    </Link>
   </div>
  </div>
 </main>;
}
