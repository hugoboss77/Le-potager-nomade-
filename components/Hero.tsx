import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f4f0e6]">

      <div className="mx-auto grid min-h-screen max-w-[1600px] grid-cols-1 lg:grid-cols-2">

        {/* TEXTE */}
        <div className="relative z-10 flex items-center px-6 pb-16 pt-32 lg:px-16 xl:px-24">

          <div className="max-w-2xl">

            <div className="mb-7 flex items-center gap-3">
              <span className="h-[1px] w-10 bg-[#d96b38]" />

              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#315b46]">
                Frais • Local • Fait maison
              </p>
            </div>

            <h1 className="text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-[#18392b] sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
              Le goût des
              <br />
              saisons,
              <br />
              <span className="italic text-[#d96b38]">
                en mouvement.
              </span>
            </h1>

            <p className="mt-8 max-w-lg text-lg leading-8 text-[#18392b]/70">
              Une cuisine généreuse et faite maison, imaginée au rythme
              des saisons et servie près de chez vous.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <a
                href="#emplacements"
                className="rounded-full bg-[#18392b] px-7 py-4 font-semibold text-white transition-all hover:-translate-y-1 hover:bg-[#315b46]"
              >
                Nous trouver
              </a>

              <a
                href="#carte"
                className="rounded-full border border-[#18392b]/20 px-7 py-4 font-semibold text-[#18392b] transition-all hover:border-[#18392b]"
              >
                Découvrir la carte
              </a>

            </div>

            <div className="mt-14 flex items-center gap-6 border-t border-[#18392b]/10 pt-6">

              <div>
                <p className="text-2xl font-semibold text-[#18392b]">
                  77
                </p>
                <p className="text-sm text-[#18392b]/60">
                  Seine-et-Marne
                </p>
              </div>

              <div className="h-10 w-[1px] bg-[#18392b]/15" />

              <div>
                <p className="text-2xl font-semibold text-[#18392b]">
                  38
                </p>
                <p className="text-sm text-[#18392b]/60">
                  Isère
                </p>
              </div>

              <div className="hidden h-10 w-[1px] bg-[#18392b]/15 sm:block" />

              <p className="hidden max-w-[180px] text-xs leading-5 text-[#18392b]/50 sm:block">
                Deux régions.
                <br />
                Une même cuisine.
              </p>

            </div>

          </div>
        </div>

        {/* PHOTO */}
        <div className="relative min-h-[600px] lg:min-h-screen">

          <Image
  src="/images/foodtruck-hero.png"
  alt="Le food truck Le Potager Nomade"
  fill
  priority
  sizes="(max-width: 1024px) 100vw, 50vw"
  className="object-cover"
/>

          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

          <div className="absolute bottom-8 left-8 rounded-full bg-white/90 px-5 py-3 text-sm font-medium text-[#18392b] backdrop-blur-md">
            🌱 Cuisine au fil des saisons
          </div>

        </div>

      </div>

    </section>
  );
}