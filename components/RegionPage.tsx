import Link from "next/link";

type Location = {
  id: number;
  city: string;
  day: string;
  start_time: string | null;
  end_time: string | null;
  address: string | null;
  maps_url: string | null;
};

type Event = {
  id: number;
  title: string;
  location: string;
  address: string | null;
  event_date: string;
  start_time: string | null;
  end_time: string | null;
  maps_url: string | null;
  description: string | null;
};

type RegionPageProps = {
  code: string;
  name: string;
  title: string;
  description: string;
  locations: Location[];
  events: Event[];
};

export default function RegionPage({
  code,
  name,
  title,
  description,
  locations,
  events,
}: RegionPageProps) {
  return (
    <main className="min-h-screen bg-[#f4f0e6] text-[#18392b]">

      {/* HERO */}
      <section className="px-6 pb-20 pt-8 lg:px-12 lg:pb-28">
        <div className="mx-auto max-w-[1400px]">

          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="text-sm font-semibold transition-opacity hover:opacity-50"
            >
              ← Retour à l’accueil
            </Link>

            <a
              href="https://potager-fidelite.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#18392b] px-5 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5"
            >
              Ma fidélité
            </a>
          </div>

          <div className="mt-20 grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-end">

            <div>
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-[#d96b38]">
                Le Potager Nomade • {code}
              </p>

              <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                {title}
              </h1>
            </div>

            <div>
              <p className="max-w-xl text-lg leading-8 text-[#18392b]/65">
                {description}
              </p>

              <div className="mt-8 inline-flex rounded-full border border-[#18392b]/10 px-5 py-3 text-sm font-semibold">
                {code} • {name}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* EMPLACEMENTS */}
      <section className="bg-[#18392b] px-6 py-20 text-white lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1400px]">

          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#e87943]">
              Où nous trouver
            </p>

            <h2 className="text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
              Nos emplacements en {name}
            </h2>

            <p className="mt-5 max-w-xl text-lg leading-8 text-white/60">
              Retrouvez ici les jours, horaires et adresses de nos prochains
              emplacements.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">

            {locations.map((location, index) => (
              <article
                key={location.id}
                className="group rounded-[2rem] bg-[#f4f0e6] p-8 text-[#18392b] transition-transform duration-300 hover:-translate-y-1 lg:p-10"
              >

                <div className="flex items-start justify-between gap-6">

                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#d96b38]">
                      {location.day}
                    </p>

                    <h3 className="mt-4 text-3xl font-semibold tracking-tight">
                      {location.city}
                    </h3>
                  </div>

                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#18392b]/15 text-xl transition-all group-hover:bg-[#18392b] group-hover:text-white">
                    ↗
                  </span>

                </div>

                <div className="mt-8 border-t border-[#18392b]/10 pt-6">

                  {(location.start_time || location.end_time) && (
  <p className="text-xl font-semibold">
    {location.start_time?.slice(0, 5)}
    {location.end_time &&
      ` — ${location.end_time.slice(0, 5)}`}
  </p>
)}

{location.address && (
  <p className="mt-2 leading-7 text-[#18392b]/60">
    {location.address}
  </p>
)}

{location.maps_url && (
  <a
    href={location.maps_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-7 inline-flex rounded-full bg-[#18392b] px-5 py-3 font-semibold text-white transition-all hover:bg-[#315b46]"
                    >
                      Ouvrir l’itinéraire
                    </a>
                  )}

                </div>

              </article>
            ))}

          </div>

        </div>
      </section>

      {/* EVENEMENTS */}
      <section className="bg-[#f4f0e6] px-6 py-20 text-[#18392b] lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1400px]">

          <div className="mb-12">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#d96b38]">
              Prochains rendez-vous
            </p>

            <h2 className="text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
              Nos événements
            </h2>
          </div>

          {events.length > 0 ? (
            <div className="grid gap-5 lg:grid-cols-2">

              {events.map((event) => (
                <article
                  key={event.id}
                  className="rounded-[2rem] bg-white p-8 lg:p-10"
                >
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#d96b38]">
                    {new Date(event.event_date).toLocaleDateString("fr-FR", {
                      day: "2-digit",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>

                  <h3 className="mt-4 text-3xl font-semibold">
                    {event.title}
                  </h3>

                  <p className="mt-3 text-lg">
                    {event.location}
                  </p>

                  {event.address && (
                    <p className="mt-2 text-[#18392b]/60">
                      {event.address}
                    </p>
                  )}

                  {(event.start_time || event.end_time) && (
                    <p className="mt-4 font-semibold">
                      {event.start_time?.slice(0, 5)}
                      {event.end_time &&
                        ` — ${event.end_time.slice(0, 5)}`}
                    </p>
                  )}

                  {event.description && (
                    <p className="mt-4 leading-7 text-[#18392b]/60">
                      {event.description}
                    </p>
                  )}

                  {event.maps_url && (
                    <a
                      href={event.maps_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-7 inline-flex rounded-full bg-[#18392b] px-5 py-3 font-semibold text-white transition-all hover:bg-[#315b46]"
                    >
                      Ouvrir l’itinéraire
                    </a>
                  )}

                </article>
              ))}

            </div>
          ) : (
            <div className="rounded-[2rem] border border-dashed border-[#18392b]/20 p-10 text-center text-[#18392b]/50">
              Aucun événement publié pour le moment.
            </div>
          )}

        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1400px]">

          <div className="grid gap-5 lg:grid-cols-2">

            <div className="rounded-[2rem] bg-[#d96b38] p-8 text-white lg:p-10">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-white/60">
                Fidélité
              </p>

              <h3 className="mt-5 text-3xl font-semibold">
                Vos passages vous récompensent.
              </h3>

              <p className="mt-4 max-w-lg leading-7 text-white/75">
                Retrouvez votre carte de fidélité directement depuis votre téléphone.
              </p>

              <a
                href="https://potager-fidelite.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex rounded-full bg-white px-6 py-3 font-semibold text-[#18392b]"
              >
                Accéder à ma fidélité
              </a>
            </div>

            <div className="rounded-[2rem] border border-[#18392b]/10 p-8 lg:p-10">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#d96b38]">
                Contact
              </p>

              <h3 className="mt-5 text-3xl font-semibold">
                Une question sur un emplacement ?
              </h3>

              <p className="mt-4 max-w-lg leading-7 text-[#18392b]/60">
                Écrivez-nous directement pour toute question concernant les horaires,
                événements ou prestations.
              </p>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=lepotagernomade.contact@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex rounded-full bg-[#18392b] px-6 py-3 font-semibold text-white"
              >
                Nous contacter
              </a>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}