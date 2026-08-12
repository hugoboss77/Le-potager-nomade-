import { createEvent } from "./actions";

type PageProps = {
  searchParams: Promise<{
    error?: string;
  }>;
};

export default async function NewEventPage({
  searchParams,
}: PageProps) {
  const params = await searchParams;

  return (
    <main className="min-h-screen bg-[#f4f0e6] px-6 py-10 text-[#18392b] lg:px-12">

      <div className="mx-auto max-w-[850px]">

        <a
          href="/admin"
          className="text-sm font-semibold text-[#18392b]/60 transition hover:text-[#18392b]"
        >
          ← Retour à l'administration
        </a>

        <div className="mt-10">

          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#d96b38]">
            Administration
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
            Nouvel événement
          </h1>

          <p className="mt-4 max-w-xl leading-7 text-[#18392b]/60">
            Ajoutez un rendez-vous du Potager Nomade. Il sera
            automatiquement associé à votre région.
          </p>

        </div>

        <form
          action={createEvent}
          className="mt-12 rounded-[2rem] bg-white p-6 sm:p-10"
        >

          {params.error && (
            <div className="mb-8 rounded-2xl bg-[#d96b38]/10 px-5 py-4 text-sm font-semibold text-[#a84c25]">
              {params.error === "missing"
                ? "Merci de remplir les champs obligatoires."
                : decodeURIComponent(params.error)}
            </div>
          )}

          <div className="grid gap-7">

            {/* NOM */}
            <div>
              <label
                htmlFor="title"
                className="mb-2 block text-sm font-semibold"
              >
                Nom de l'événement *
              </label>

              <input
                id="title"
                name="title"
                type="text"
                required
                placeholder="Ex : Forum des associations"
                className="w-full rounded-2xl border border-[#18392b]/10 bg-[#f4f0e6]/50 px-5 py-4 outline-none transition focus:border-[#18392b]/40"
              />
            </div>

            {/* VILLE */}
            <div>
              <label
                htmlFor="location"
                className="mb-2 block text-sm font-semibold"
              >
                Ville / lieu *
              </label>

              <input
                id="location"
                name="location"
                type="text"
                required
                placeholder="Ex : Villeneuve-Saint-Denis"
                className="w-full rounded-2xl border border-[#18392b]/10 bg-[#f4f0e6]/50 px-5 py-4 outline-none transition focus:border-[#18392b]/40"
              />
            </div>

            {/* ADRESSE */}
            <div>
              <label
                htmlFor="address"
                className="mb-2 block text-sm font-semibold"
              >
                Adresse
              </label>

              <input
                id="address"
                name="address"
                type="text"
                placeholder="Ex : École des Grands Prés..."
                className="w-full rounded-2xl border border-[#18392b]/10 bg-[#f4f0e6]/50 px-5 py-4 outline-none transition focus:border-[#18392b]/40"
              />
            </div>

            {/* DATE */}
            <div>
              <label
                htmlFor="event_date"
                className="mb-2 block text-sm font-semibold"
              >
                Date *
              </label>

              <input
                id="event_date"
                name="event_date"
                type="date"
                required
                className="w-full rounded-2xl border border-[#18392b]/10 bg-[#f4f0e6]/50 px-5 py-4 outline-none"
              />
            </div>

            {/* HORAIRES */}
            <div className="grid gap-5 sm:grid-cols-2">

              <div>
                <label
                  htmlFor="start_time"
                  className="mb-2 block text-sm font-semibold"
                >
                  Heure de début
                </label>

                <input
                  id="start_time"
                  name="start_time"
                  type="time"
                  className="w-full rounded-2xl border border-[#18392b]/10 bg-[#f4f0e6]/50 px-5 py-4 outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="end_time"
                  className="mb-2 block text-sm font-semibold"
                >
                  Heure de fin
                </label>

                <input
                  id="end_time"
                  name="end_time"
                  type="time"
                  className="w-full rounded-2xl border border-[#18392b]/10 bg-[#f4f0e6]/50 px-5 py-4 outline-none"
                />
              </div>

            </div>

            {/* GOOGLE MAPS */}
            <div>
              <label
                htmlFor="maps_url"
                className="mb-2 block text-sm font-semibold"
              >
                Lien Google Maps
              </label>

              <input
                id="maps_url"
                name="maps_url"
                type="url"
                placeholder="https://maps.google.com/..."
                className="w-full rounded-2xl border border-[#18392b]/10 bg-[#f4f0e6]/50 px-5 py-4 outline-none"
              />

              <p className="mt-2 text-xs text-[#18392b]/45">
                Facultatif. Il permettra aux visiteurs d'ouvrir directement l'itinéraire.
              </p>
            </div>

            {/* DESCRIPTION */}
            <div>
              <label
                htmlFor="description"
                className="mb-2 block text-sm font-semibold"
              >
                Description
              </label>

              <textarea
                id="description"
                name="description"
                rows={5}
                placeholder="Informations complémentaires..."
                className="w-full resize-none rounded-2xl border border-[#18392b]/10 bg-[#f4f0e6]/50 px-5 py-4 outline-none"
              />
            </div>

            {/* PUBLICATION */}
            <label className="flex cursor-pointer items-center justify-between gap-5 rounded-2xl bg-[#f4f0e6] p-5">

              <div>
                <p className="font-semibold">
                  Publier sur le site
                </p>

                <p className="mt-1 text-sm text-[#18392b]/50">
                  L'événement sera visible par les visiteurs.
                </p>
              </div>

              <input
                type="checkbox"
                name="published"
                defaultChecked
                className="h-5 w-5 accent-[#18392b]"
              />

            </label>

          </div>

          <div className="mt-10 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">

            <a
              href="/admin"
              className="rounded-full border border-[#18392b]/15 px-6 py-4 text-center font-semibold"
            >
              Annuler
            </a>

            <button
              type="submit"
              className="rounded-full bg-[#18392b] px-7 py-4 font-semibold text-white transition-all hover:-translate-y-1 hover:bg-[#315b46]"
            >
              Publier l'événement
            </button>

          </div>

        </form>

      </div>

    </main>
  );
}