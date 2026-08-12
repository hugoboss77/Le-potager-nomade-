export default function Zones() {
  return (
    <section
      id="emplacements"
      className="bg-[#18392b] px-6 py-24 text-white lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-[1400px]">

        {/* TITRE */}
        <div className="mb-16 max-w-3xl">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-[#e87943]">
            Où nous trouver
          </p>

          <h2 className="text-4xl font-semibold tracking-[-0.03em] sm:text-5xl lg:text-6xl">
            Deux régions.
            <br />
            Une même cuisine.
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-white/65">
            Le Potager Nomade vient à votre rencontre en
            Seine-et-Marne et en Isère. Choisissez votre région
            pour découvrir nos emplacements.
          </p>
        </div>

        {/* CARTES */}
        <div className="grid gap-5 lg:grid-cols-2">

          {/* 77 */}
          <a
            href="/77"
            className="group relative min-h-[330px] overflow-hidden rounded-[2rem] bg-[#f4f0e6] p-8 text-[#18392b] transition-transform duration-300 hover:-translate-y-2 lg:p-10"
          >
            <div className="flex h-full flex-col justify-between">

              <div className="flex items-start justify-between">
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#18392b]/50">
                  Région
                </span>

                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#18392b]/15 text-xl transition-all group-hover:bg-[#18392b] group-hover:text-white">
                  ↗
                </span>
              </div>

              <div className="mt-20">
                <p className="text-7xl font-semibold tracking-[-0.06em] lg:text-8xl">
                  77
                </p>

                <div className="mt-5 flex items-end justify-between gap-5">
                  <div>
                    <h3 className="text-2xl font-semibold">
                      Seine-et-Marne
                    </h3>

                    <p className="mt-2 text-[#18392b]/60">
                      Voir les emplacements et horaires
                    </p>
                  </div>

                  <span className="hidden text-sm font-semibold sm:block">
                    DÉCOUVRIR
                  </span>
                </div>
              </div>

            </div>
          </a>

          {/* 38 */}
          <a
            href="/38"
            className="group relative min-h-[330px] overflow-hidden rounded-[2rem] bg-[#d96b38] p-8 text-white transition-transform duration-300 hover:-translate-y-2 lg:p-10"
          >
            <div className="flex h-full flex-col justify-between">

              <div className="flex items-start justify-between">
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
                  Région
                </span>

                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/25 text-xl transition-all group-hover:bg-white group-hover:text-[#d96b38]">
                  ↗
                </span>
              </div>

              <div className="mt-20">
                <p className="text-7xl font-semibold tracking-[-0.06em] lg:text-8xl">
                  38
                </p>

                <div className="mt-5 flex items-end justify-between gap-5">
                  <div>
                    <h3 className="text-2xl font-semibold">
                      Isère
                    </h3>

                    <p className="mt-2 text-white/70">
                      Voir les emplacements et horaires
                    </p>
                  </div>

                  <span className="hidden text-sm font-semibold sm:block">
                    DÉCOUVRIR
                  </span>
                </div>
              </div>

            </div>
          </a>

        </div>

      </div>
    </section>
  );
}