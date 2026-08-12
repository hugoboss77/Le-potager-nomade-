export default function EventsSection() {
  return (
    <section
      id="evenements"
      className="bg-[#f4f0e6] px-6 py-24 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-[1400px]">

        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">

          {/* TEXTE PRINCIPAL */}
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-[#d96b38]">
              Événements & privatisation
            </p>

            <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.03em] text-[#18392b] sm:text-5xl lg:text-6xl">
              Le Potager Nomade
              <br />
              vient jusqu’à vous.
            </h2>

            <p className="mt-7 max-w-xl text-lg leading-8 text-[#18392b]/65">
              Entreprises, associations, événements privés ou manifestations :
              nous adaptons notre présence et notre cuisine à votre projet.
            </p>
          </div>

          {/* CARTE DROITE */}
          <div className="rounded-[2rem] bg-[#18392b] p-8 text-white lg:p-10">

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#e87943]">
              Vous organisez un événement ?
            </p>

            <h3 className="mt-5 text-3xl font-semibold leading-tight">
              Parlons de votre projet.
            </h3>

            <p className="mt-5 max-w-xl leading-7 text-white/65">
              Dites-nous où, quand et pour combien de personnes. Nous vous
              recontactons pour voir ce qu’il est possible de mettre en place.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <a
                href="#contact"
                className="rounded-full bg-[#f4f0e6] px-6 py-3 font-semibold text-[#18392b] transition-transform hover:-translate-y-1"
              >
                Nous contacter
              </a>

              <a
                href="#emplacements"
                className="rounded-full border border-white/25 px-6 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-[#18392b]"
              >
                Voir nos zones
              </a>

            </div>

          </div>

        </div>

        {/* TYPES D'ÉVÉNEMENTS */}
        <div className="mt-16 grid gap-5 md:grid-cols-3">

          <div className="rounded-[2rem] border border-[#18392b]/10 p-8">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#d96b38]">
              Entreprises
            </p>

            <h3 className="mt-4 text-2xl font-semibold text-[#18392b]">
              Repas & événements professionnels
            </h3>

            <p className="mt-3 leading-7 text-[#18392b]/60">
              Déjeuners, journées d’entreprise, inaugurations ou événements internes.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[#18392b]/10 p-8">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#d96b38]">
              Événements
            </p>

            <h3 className="mt-4 text-2xl font-semibold text-[#18392b]">
              Festivals, salons & manifestations
            </h3>

            <p className="mt-3 leading-7 text-[#18392b]/60">
              Une offre mobile et adaptable pour accueillir du public dans de bonnes conditions.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[#18392b]/10 p-8">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#d96b38]">
              Privé
            </p>

            <h3 className="mt-4 text-2xl font-semibold text-[#18392b]">
              Moments privés & réceptions
            </h3>

            <p className="mt-3 leading-7 text-[#18392b]/60">
              Une présence originale pour vos événements privés selon nos disponibilités.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}