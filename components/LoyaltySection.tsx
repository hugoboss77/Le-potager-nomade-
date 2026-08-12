export default function LoyaltySection() {
  return (
    <section className="bg-[#18392b] px-6 py-24 text-white lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1400px]">

        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">

          {/* TEXTE */}
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-[#e87943]">
              Programme fidélité
            </p>

            <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl lg:text-6xl">
              Plus vous revenez,
              <br />
              plus on vous régale.
            </h2>

            <p className="mt-7 max-w-xl text-lg leading-8 text-white/65">
              Retrouvez votre carte de fidélité directement en ligne et
              profitez de vos avantages à chaque passage au Potager Nomade.
            </p>

            <div className="mt-10">
              <a
                href="https://potager-fidelite.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-[#f4f0e6] px-7 py-4 font-semibold text-[#18392b] transition-all hover:-translate-y-1"
              >
                Accéder à ma fidélité
                <span>↗</span>
              </a>
            </div>
          </div>

          {/* CARTE VISUELLE */}
          <div className="relative">
            <div className="rotate-[-2deg] rounded-[2rem] bg-[#f4f0e6] p-8 text-[#18392b] shadow-2xl lg:p-10">

              <div className="flex items-center justify-between">
                <p className="text-sm font-bold uppercase tracking-[0.2em]">
                  Le Potager Nomade
                </p>

                <span className="rounded-full bg-[#d96b38] px-4 py-2 text-xs font-bold text-white">
                  FIDÉLITÉ
                </span>
              </div>

              <div className="mt-14">
                <p className="text-sm uppercase tracking-[0.18em] text-[#18392b]/50">
                  Votre carte
                </p>

                <p className="mt-3 text-4xl font-semibold tracking-tight">
                  Vos passages
                  <br />
                  vous récompensent.
                </p>
              </div>

              <div className="mt-12 grid grid-cols-5 gap-3">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                  <div
                    key={item}
                    className="flex aspect-square items-center justify-center rounded-full border border-[#18392b]/15 text-sm font-semibold"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <p className="mt-8 text-sm leading-6 text-[#18392b]/50">
                Votre carte est accessible depuis votre téléphone,
                sans carte physique à garder sur vous.
              </p>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}