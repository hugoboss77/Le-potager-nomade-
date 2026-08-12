export default function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-[#18392b] px-6 py-24 text-white lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-[1400px]">

        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">

          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-[#e87943]">
              Contact
            </p>

            <h2 className="text-4xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl lg:text-6xl">
              Une question,
              <br />
              un événement,
              <br />
              une envie ?
            </h2>

            <p className="mt-7 max-w-xl text-lg leading-8 text-white/65">
              Écrivez-nous et précisez simplement votre région,
              votre besoin et la date souhaitée.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">

              <span className="rounded-full border border-white/20 px-5 py-3 text-sm">
                Seine-et-Marne • 77
              </span>

              <span className="rounded-full border border-white/20 px-5 py-3 text-sm">
                Isère • 38
              </span>

            </div>
          </div>

          <div className="rounded-[2rem] bg-[#f4f0e6] p-8 text-[#18392b] lg:p-10">

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#d96b38]">
              Nous contacter
            </p>

            <h3 className="mt-5 text-3xl font-semibold">
              Parlez-nous de votre demande.
            </h3>

            <p className="mt-4 max-w-xl leading-7 text-[#18392b]/60">
              
            </p>

            <div className="mt-9 flex flex-wrap gap-4">

              <a
               href="https://mail.google.com/mail/?view=cm&fs=1&to=lepotagernomade.contact@gmail.com"
target="_blank"
rel="noopener noreferrer"
                className="rounded-full bg-[#18392b] px-6 py-4 font-semibold text-white transition-all hover:-translate-y-1 hover:bg-[#315b46]"
              >
                Envoyer un e-mail
              </a>

              <a
                href="#emplacements"
                className="rounded-full border border-[#18392b]/15 px-6 py-4 font-semibold transition-colors hover:border-[#18392b]"
              >
                Choisir ma région
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}