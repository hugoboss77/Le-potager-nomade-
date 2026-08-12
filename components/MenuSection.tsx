import Image from "next/image";

export default function MenuSection() {
  return (
    <section
      id="carte"
      className="bg-[#f4f0e6] px-6 py-24 lg:px-12 lg:py-32"
    >
      <div className="mx-auto grid max-w-[1400px] items-center gap-14 lg:grid-cols-2">

        {/* IMAGE */}
        <div className="relative overflow-hidden rounded-[2rem]">
          <div className="relative aspect-[4/5] lg:aspect-[5/6]">
            <Image
              src="/images/soupe-tartine.png"
              alt="Soupe et tartine du Potager Nomade"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="absolute bottom-6 left-6 rounded-full bg-white/90 px-5 py-3 text-sm font-semibold text-[#18392b] backdrop-blur-md">
            🌿 Au rythme des saisons
          </div>
        </div>

        {/* TEXTE */}
        <div className="lg:pl-8">

          <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-[#d96b38]">
            La carte
          </p>

          <h2 className="max-w-2xl text-4xl font-semibold leading-tight tracking-[-0.03em] text-[#18392b] sm:text-5xl lg:text-6xl">
            Une carte qui change
            <br />
            avec les saisons.
          </h2>

          <p className="mt-7 max-w-xl text-lg leading-8 text-[#18392b]/65">
            Des recettes simples, généreuses et faites maison,
            préparées avec des produits choisis au fil des saisons.
          </p>

          <div className="mt-10 space-y-6">

            <div className="border-b border-[#18392b]/10 pb-6">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#d96b38]">
                À savourer
              </p>

              <h3 className="mt-2 text-2xl font-semibold text-[#18392b]">
                Soupes, tartines & plats de saison
              </h3>

              <p className="mt-2 text-[#18392b]/60">
                Des recettes qui évoluent selon les produits du moment.
              </p>
            </div>

            <div className="border-b border-[#18392b]/10 pb-6">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#d96b38]">
                Fait maison
              </p>

              <h3 className="mt-2 text-2xl font-semibold text-[#18392b]">
                Du salé jusqu'au dessert
              </h3>

              <p className="mt-2 text-[#18392b]/60">
                Une cuisine préparée avec soin, du plat au dessert.
              </p>
            </div>

          </div>

          <div className="mt-10">
            <a
              href="#emplacements"
              className="inline-flex rounded-full bg-[#18392b] px-7 py-4 font-semibold text-white transition-all hover:-translate-y-1 hover:bg-[#315b46]"
            >
              Voir où nous trouver
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}