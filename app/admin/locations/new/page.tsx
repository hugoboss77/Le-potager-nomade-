import { createLocation } from "./actions";

export default function NewLocationPage() {
  return (
    <main className="min-h-screen bg-[#f4f0e6] px-6 py-10 text-[#18392b] lg:px-12">

      <div className="mx-auto max-w-[850px]">

        <a
          href="/admin"
          className="text-sm font-semibold text-[#18392b]/60"
        >
          ← Retour à l'administration
        </a>

        <div className="mt-10">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#d96b38]">
            Administration
          </p>

          <h1 className="mt-4 text-4xl font-semibold">
            Nouvel emplacement fixe
          </h1>
        </div>

        <form
          action={createLocation}
          className="mt-12 rounded-[2rem] bg-white p-6 sm:p-10"
        >

          <div className="grid gap-7">

            <div>
              <label className="mb-2 block text-sm font-semibold">
                Ville / lieu *
              </label>

              <input
                name="city"
                required
                placeholder="Ex : Coulommiers"
                className="w-full rounded-2xl border border-[#18392b]/10 bg-[#f4f0e6]/50 px-5 py-4"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold">
                Jour *
              </label>

              <input
                name="day"
                required
                placeholder="Ex : Tous les mercredis"
                className="w-full rounded-2xl border border-[#18392b]/10 bg-[#f4f0e6]/50 px-5 py-4"
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Heure de début
                </label>

                <input
                  type="time"
                  name="start_time"
                  className="w-full rounded-2xl border border-[#18392b]/10 bg-[#f4f0e6]/50 px-5 py-4"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Heure de fin
                </label>

                <input
                  type="time"
                  name="end_time"
                  className="w-full rounded-2xl border border-[#18392b]/10 bg-[#f4f0e6]/50 px-5 py-4"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold">
                Adresse
              </label>

              <input
                name="address"
                placeholder="Adresse complète"
                className="w-full rounded-2xl border border-[#18392b]/10 bg-[#f4f0e6]/50 px-5 py-4"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold">
                Lien Google Maps
              </label>

              <input
                type="url"
                name="maps_url"
                placeholder="https://..."
                className="w-full rounded-2xl border border-[#18392b]/10 bg-[#f4f0e6]/50 px-5 py-4"
              />
            </div>

            <label className="flex items-center justify-between rounded-2xl bg-[#f4f0e6] p-5">

              <div>
                <p className="font-semibold">
                  Publier sur le site
                </p>

                <p className="mt-1 text-sm text-[#18392b]/50">
                  Visible immédiatement par les visiteurs.
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

          <div className="mt-10 flex justify-end">
            <button
              type="submit"
              className="rounded-full bg-[#18392b] px-7 py-4 font-semibold text-white"
            >
              Ajouter l'emplacement
            </button>
          </div>

        </form>

      </div>

    </main>
  );
}