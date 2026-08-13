import { createClient } from "@/utils/supabase/server";
import { notFound, redirect } from "next/navigation";
import { updateEvent, deleteEvent } from "./actions";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
  searchParams: Promise<{
    error?: string;
  }>;
};

export default async function EditEventPage({
  params,
  searchParams,
}: PageProps) {
  const { id } = await params;
  const query = await searchParams;

  const eventId = Number(id);

  if (!Number.isFinite(eventId)) {
    notFound();
  }

  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/admin/login");
  }

  const { data: profile } = await supabase
    .from("admin_profiles")
    .select("region")
    .eq("id", user.id)
    .single();

  if (!profile) {
    redirect("/admin");
  }

  const { data: event } = await supabase
    .from("events")
    .select("*")
    .eq("id", eventId)
    .eq("region", profile.region)
    .single();

  if (!event) {
    notFound();
  }

  const updateAction = updateEvent.bind(null, eventId);
  const deleteAction = deleteEvent.bind(null, eventId);

  return (
    <main className="min-h-screen bg-[#f4f0e6] px-6 py-10 text-[#18392b] lg:px-12">
      <div className="mx-auto max-w-[850px]">

        <a
          href="/admin"
          className="text-sm font-semibold text-[#18392b]/60"
        >
          ← Retour à l’administration
        </a>

        <div className="mt-10">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#d96b38]">
            Administration
          </p>

          <h1 className="mt-4 text-4xl font-semibold">
            Modifier l’événement
          </h1>
        </div>

        <form
          action={updateAction}
          className="mt-12 rounded-[2rem] bg-white p-6 sm:p-10"
        >
          {query.error && (
            <div className="mb-8 rounded-2xl bg-[#d96b38]/10 px-5 py-4 text-sm font-semibold text-[#a84c25]">
              {query.error === "missing"
                ? "Merci de remplir les champs obligatoires."
                : decodeURIComponent(query.error)}
            </div>
          )}

          <div className="grid gap-7">

            <div>
              <label className="mb-2 block text-sm font-semibold">
                Nom de l’événement *
              </label>

              <input
                name="title"
                required
                defaultValue={event.title}
                className="w-full rounded-2xl border border-[#18392b]/10 bg-[#f4f0e6]/50 px-5 py-4"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold">
                Ville / lieu *
              </label>

              <input
                name="location"
                required
                defaultValue={event.location}
                className="w-full rounded-2xl border border-[#18392b]/10 bg-[#f4f0e6]/50 px-5 py-4"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold">
                Adresse
              </label>

              <input
                name="address"
                defaultValue={event.address ?? ""}
                className="w-full rounded-2xl border border-[#18392b]/10 bg-[#f4f0e6]/50 px-5 py-4"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold">
                Date *
              </label>

              <input
                type="date"
                name="event_date"
                required
                defaultValue={event.event_date}
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
                  defaultValue={event.start_time?.slice(0, 5) ?? ""}
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
                  defaultValue={event.end_time?.slice(0, 5) ?? ""}
                  className="w-full rounded-2xl border border-[#18392b]/10 bg-[#f4f0e6]/50 px-5 py-4"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold">
                Lien Google Maps
              </label>

              <input
                type="url"
                name="maps_url"
                defaultValue={event.maps_url ?? ""}
                className="w-full rounded-2xl border border-[#18392b]/10 bg-[#f4f0e6]/50 px-5 py-4"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold">
                Description
              </label>

              <textarea
                name="description"
                rows={5}
                defaultValue={event.description ?? ""}
                className="w-full resize-none rounded-2xl border border-[#18392b]/10 bg-[#f4f0e6]/50 px-5 py-4"
              />
            </div>

            <label className="flex items-center justify-between rounded-2xl bg-[#f4f0e6] p-5">
              <div>
                <p className="font-semibold">
                  Publier sur le site
                </p>

                <p className="mt-1 text-sm text-[#18392b]/50">
                  L’événement est visible par les visiteurs.
                </p>
              </div>

              <input
                type="checkbox"
                name="published"
                defaultChecked={event.published}
                className="h-5 w-5 accent-[#18392b]"
              />
            </label>
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-between">

            <button
              formAction={deleteAction}
              type="submit"
              className="rounded-full border border-red-300 px-6 py-4 font-semibold text-red-600"
            >
              Supprimer l’événement
            </button>

            <div className="flex gap-3">
              <a
                href="/admin"
                className="rounded-full border border-[#18392b]/15 px-6 py-4 font-semibold"
              >
                Annuler
              </a>

              <button
                type="submit"
                className="rounded-full bg-[#18392b] px-7 py-4 font-semibold text-white"
              >
                Enregistrer
              </button>
            </div>

          </div>
        </form>

      </div>
    </main>
  );
}