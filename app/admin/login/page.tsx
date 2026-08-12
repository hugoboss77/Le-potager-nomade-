import { login } from "./actions";

type LoginPageProps = {
  searchParams: Promise<{
    error?: string;
  }>;
};

export default async function LoginPage({
  searchParams,
}: LoginPageProps) {
  const params = await searchParams;

  let errorMessage = "";

  if (params.error === "invalid") {
    errorMessage = "Adresse e-mail ou mot de passe incorrect.";
  }

  if (params.error === "missing") {
    errorMessage = "Veuillez remplir tous les champs.";
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#18392b] px-6 py-12">

      <div className="w-full max-w-[460px]">

        <a
          href="/"
          className="mb-8 inline-flex text-sm font-semibold text-white/50 transition-colors hover:text-white"
        >
          ← Retour au site
        </a>

        <div className="rounded-[2rem] bg-[#f4f0e6] p-8 text-[#18392b] shadow-2xl sm:p-10">

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#d96b38]">
              Le Potager Nomade
            </p>

            <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em]">
              Administration
            </h1>

            <p className="mt-4 leading-7 text-[#18392b]/55">
              Connectez-vous pour gérer les événements et emplacements de votre région.
            </p>
          </div>

          <form action={login} className="mt-10 space-y-6">

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold"
              >
                Adresse e-mail
              </label>

              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="votre@email.fr"
                className="w-full rounded-2xl border border-[#18392b]/10 bg-white px-5 py-4 outline-none transition focus:border-[#18392b]/40"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-semibold"
              >
                Mot de passe
              </label>

              <input
                id="password"
                name="password"
                type="password"
                required
                autoComplete="current-password"
                placeholder="••••••••"
                className="w-full rounded-2xl border border-[#18392b]/10 bg-white px-5 py-4 outline-none transition focus:border-[#18392b]/40"
              />
            </div>

            {errorMessage && (
              <div className="rounded-2xl bg-[#d96b38]/10 px-5 py-4 text-sm font-semibold text-[#a84c25]">
                {errorMessage}
              </div>
            )}

            <button
              type="submit"
              className="w-full rounded-full bg-[#18392b] px-6 py-4 font-semibold text-white transition-all hover:-translate-y-1 hover:bg-[#315b46]"
            >
              Se connecter
            </button>

          </form>

          <p className="mt-8 text-center text-xs leading-5 text-[#18392b]/40">
            Espace réservé à l’équipe du Potager Nomade.
          </p>

        </div>

      </div>

    </main>
  );
}