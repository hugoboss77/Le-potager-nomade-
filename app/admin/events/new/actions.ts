"use server";

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export async function createEvent(formData: FormData) {
  const supabase = await createClient();

  // Vérifie que l'utilisateur est connecté
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/admin/login");
  }

  // Récupère sa région automatiquement
  const { data: profile, error: profileError } = await supabase
    .from("admin_profiles")
    .select("region")
    .eq("id", user.id)
    .single();

  if (profileError || !profile) {
    redirect("/admin?error=profile");
  }

  const title = formData.get("title")?.toString().trim();
  const location = formData.get("location")?.toString().trim();
  const address = formData.get("address")?.toString().trim() || null;
  const eventDate = formData.get("event_date")?.toString();
  const startTime = formData.get("start_time")?.toString() || null;
  const endTime = formData.get("end_time")?.toString() || null;
  const mapsUrl = formData.get("maps_url")?.toString().trim() || null;
  const description =
    formData.get("description")?.toString().trim() || null;

  const published = formData.get("published") === "on";

  if (!title || !location || !eventDate) {
    redirect("/admin/events/new?error=missing");
  }

  const { error } = await supabase.from("events").insert({
    region: profile.region,
    title,
    location,
    address,
    event_date: eventDate,
    start_time: startTime,
    end_time: endTime,
    maps_url: mapsUrl,
    description,
    published,
  });

  if (error) {
    console.error("Erreur création événement :", error);
    redirect(
      `/admin/events/new?error=${encodeURIComponent(error.message)}`
    );
  }

  redirect("/admin");
}