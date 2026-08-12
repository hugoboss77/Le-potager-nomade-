"use client";

import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="absolute left-0 top-0 z-50 w-full">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 lg:px-12">

          <a href="#" className="flex items-center gap-3">
            <Image
              src="/images/logo-potager.png"
              alt="Le Potager Nomade"
              width={110}
              height={110}
              className="h-24 w-24 object-contain"
            />
          </a>

          <nav className="hidden items-center gap-7 text-sm font-semibold text-[#18392b] lg:flex">
            <a href="#carte" className="transition-opacity hover:opacity-50">
              La carte
            </a>

            <a href="#emplacements" className="transition-opacity hover:opacity-50">
              Nous trouver
            </a>

            <a href="#concept" className="transition-opacity hover:opacity-50">
              Notre concept
            </a>

            <a href="#evenements" className="transition-opacity hover:opacity-50">
              Événements
            </a>

            <a href="#contact" className="transition-opacity hover:opacity-50">
              Contact
            </a>

            <a
              href="https://potager-fidelite.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#18392b] px-5 py-3 text-white transition-all hover:-translate-y-0.5 hover:bg-[#315b46]"
            >
              Ma fidélité
            </a>
          </nav>

          <button
            onClick={() => setMenuOpen(true)}
            className="text-3xl text-[#18392b] lg:hidden"
            aria-label="Ouvrir le menu"
          >
            ☰
          </button>

        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-[100] bg-[#18392b] text-white lg:hidden">

          <div className="flex items-center justify-between px-6 py-5">
            <Image
              src="/images/logo-potager.png"
              alt="Le Potager Nomade"
              width={100}
              height={100}
              className="h-20 w-20 object-contain"
            />

            <button
              onClick={() => setMenuOpen(false)}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-2xl"
              aria-label="Fermer le menu"
            >
              ×
            </button>
          </div>

          <div className="flex h-[calc(100vh-110px)] flex-col justify-between overflow-y-auto px-6 pb-8 pt-4">

            <nav className="flex flex-col">

  <a
    href="#carte"
    onClick={() => setMenuOpen(false)}
    className="group border-b border-white/10 py-5"
  >
    <div className="flex items-end justify-between gap-4">

      <div className="flex gap-4">
        <span className="pt-1 text-xs font-semibold tracking-[0.2em] text-[#e87943]">
          01
        </span>

        <div>
          <p className="text-[2.2rem] font-semibold leading-none tracking-[-0.04em]">
            La carte
          </p>

          <p className="mt-2 text-sm text-white/45">
            Découvrez notre cuisine de saison
          </p>
        </div>
      </div>

      <span className="pb-1 text-xl text-white/40 transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>

    </div>
  </a>

  <a
    href="#emplacements"
    onClick={() => setMenuOpen(false)}
    className="group border-b border-white/10 py-5"
  >
    <div className="flex items-end justify-between gap-4">

      <div className="flex gap-4">
        <span className="pt-1 text-xs font-semibold tracking-[0.2em] text-[#e87943]">
          02
        </span>

        <div>
          <p className="text-[2.2rem] font-semibold leading-none tracking-[-0.04em]">
            Nous trouver
          </p>

          <p className="mt-2 text-sm text-white/45">
            Seine-et-Marne & Isère
          </p>
        </div>
      </div>

      <span className="pb-1 text-xl text-white/40 transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>

    </div>
  </a>

  <a
    href="#concept"
    onClick={() => setMenuOpen(false)}
    className="group border-b border-white/10 py-5"
  >
    <div className="flex items-end justify-between gap-4">

      <div className="flex gap-4">
        <span className="pt-1 text-xs font-semibold tracking-[0.2em] text-[#e87943]">
          03
        </span>

        <div>
          <p className="text-[2.2rem] font-semibold leading-none tracking-[-0.04em]">
            Notre concept
          </p>

          <p className="mt-2 text-sm text-white/45">
            Une cuisine fraîche et nomade
          </p>
        </div>
      </div>

      <span className="pb-1 text-xl text-white/40 transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>

    </div>
  </a>

  <a
    href="#evenements"
    onClick={() => setMenuOpen(false)}
    className="group border-b border-white/10 py-5"
  >
    <div className="flex items-end justify-between gap-4">

      <div className="flex gap-4">
        <span className="pt-1 text-xs font-semibold tracking-[0.2em] text-[#e87943]">
          04
        </span>

        <div>
          <p className="text-[2.2rem] font-semibold leading-none tracking-[-0.04em]">
            Événements
          </p>

          <p className="mt-2 text-sm text-white/45">
            Privatisation & prestations
          </p>
        </div>
      </div>

      <span className="pb-1 text-xl text-white/40 transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>

    </div>
  </a>

  <a
    href="#contact"
    onClick={() => setMenuOpen(false)}
    className="group py-5"
  >
    <div className="flex items-end justify-between gap-4">

      <div className="flex gap-4">
        <span className="pt-1 text-xs font-semibold tracking-[0.2em] text-[#e87943]">
          05
        </span>

        <div>
          <p className="text-[2.2rem] font-semibold leading-none tracking-[-0.04em]">
            Contact
          </p>

          <p className="mt-2 text-sm text-white/45">
            Une question ? Écrivez-nous
          </p>
        </div>
      </div>

      <span className="pb-1 text-xl text-white/40 transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>

    </div>
  </a>

</nav>

            <div>
              <a
                href="https://potager-fidelite.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-between rounded-[1.5rem] bg-[#f4f0e6] px-6 py-5 font-semibold text-[#18392b]"
              >
                <span>Ma fidélité</span>
                <span>↗</span>
              </a>

              <div className="mt-6 flex gap-3 text-sm text-white/50">
                <span>Seine-et-Marne • 77</span>
                <span>•</span>
                <span>Isère • 38</span>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
}