"use server";

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export async function login(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!email || !password) {
    redirect("/admin/login?error=missing");
  }

  const supabase = await createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    console.error("Supabase admin login error:", { message: error.message, status: error.status, code: error.code });
    redirect(`/admin/login?error=auth&code=${encodeURIComponent(error.code ?? "unknown")}&detail=${encodeURIComponent(error.message)}`);
  }

  redirect("/admin");
}