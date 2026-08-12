import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#10281e] px-6 py-10 text-white lg:px-12">

      <div className="mx-auto max-w-[1400px]">

        <div className="flex flex-col gap-10 border-b border-white/10 pb-10 lg:flex-row lg:items-center lg:justify-between">

          <a href="#" className="flex items-center gap-4">

            <Image
              src="/images/logo-potager.png"
              alt="Le Potager Nomade"
              width={90}
              height={90}
              className="h-20 w-20 object-contain"
            />

          </a>

          <div className="flex flex-wrap gap-x-7 gap-y-4 text-sm font-medium text-white/70">

            <a href="#carte" className="hover:text-white">
              La carte
            </a>

            <a href="#emplacements" className="hover:text-white">
              Nous trouver
            </a>

            <a href="#evenements" className="hover:text-white">
              Événements
            </a>

            <a
              href="https://potager-fidelite.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              Fidélité
            </a>

            <a href="#contact" className="hover:text-white">
              Contact
            </a>

          </div>

        </div>

        <div className="flex flex-col gap-4 pt-8 text-sm text-white/40 sm:flex-row sm:items-center sm:justify-between">

          <p>
            © {new Date().getFullYear()} Le Potager Nomade
          </p>

          <p>
            Seine-et-Marne • Isère
          </p>

        </div>

      </div>

    </footer>
  );
}