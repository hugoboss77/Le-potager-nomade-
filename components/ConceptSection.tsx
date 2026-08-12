export default function ConceptSection() {
  return (
    <section
      id="concept"
      className="bg-[#f4f0e6] px-6 py-24 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-[1400px]">

        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">

          {/* INTRO */}
          <div className="lg:sticky lg:top-24">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-[#d96b38]">
              Notre concept
            </p>

            <h2 className="max-w-xl text-4xl font-semibold leading-tight tracking-[-0.03em] text-[#18392b] sm:text-5xl lg:text-6xl">
              Bien manger,
              <br />
              simplement.
            </h2>

            <p className="mt-7 max-w-lg text-lg leading-8 text-[#18392b]/65">
              Le Potager Nomade est né d’une idée simple : proposer une cuisine
              maison, généreuse et de saison, dans un format mobile qui vient
              directement à votre rencontre.
            </p>
          </div>

          {/* PILIERS */}
          <div className="space-y-5">

            <div className="rounded-[2rem] bg-[#18392b] p-8 text-white lg:p-10">
              <span className="text-sm font-bold tracking-[0.2em] text-[#e87943]">
                01
              </span>

              <h3 className="mt-8 text-3xl font-semibold tracking-tight">
                Une cuisine au rythme des saisons.
              </h3>

              <p className="mt-5 max-w-2xl leading-7 text-white/65">
                Notre carte évolue au fil de l’année pour suivre les produits
                disponibles et proposer des recettes adaptées à chaque saison.
              </p>
            </div>

            <div className="rounded-[2rem] border border-[#18392b]/10 p-8 lg:p-10">
              <span className="text-sm font-bold tracking-[0.2em] text-[#d96b38]">
                02
              </span>

              <h3 className="mt-8 text-3xl font-semibold tracking-tight text-[#18392b]">
                Du fait maison, sans complication.
              </h3>

              <p className="mt-5 max-w-2xl leading-7 text-[#18392b]/60">
                Des recettes accessibles, gourmandes et préparées avec soin,
                sans chercher à compliquer ce qui peut être simplement bon.
              </p>
            </div>

            <div className="rounded-[2rem] bg-[#d96b38] p-8 text-white lg:p-10">
              <span className="text-sm font-bold tracking-[0.2em] text-white/60">
                03
              </span>

              <h3 className="mt-8 text-3xl font-semibold tracking-tight">
                Deux régions, une seule identité.
              </h3>

              <p className="mt-5 max-w-2xl leading-7 text-white/75">
                Le Potager Nomade est présent en Seine-et-Marne et en Isère,
                avec la même philosophie, le même univers et la même envie de
                créer une cuisine conviviale et nomade.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}