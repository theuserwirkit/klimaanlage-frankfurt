"use client";

import { useState } from "react";

const navItems = [
  { label: "Lösung", href: "#loesung" },
  { label: "Geräte", href: "#geraete" },
  { label: "Arbeitsschutz", href: "#arbeitsschutz" },
  { label: "Einsatz", href: "#einsatz" },
  { label: "Ablauf", href: "#ablauf" },
  { label: "Technik", href: "#technik" },
  { label: "FAQ", href: "#faq" },
  { label: "Preise", href: "#preise" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-cyan-500/10 bg-midnight/80 backdrop-blur-xl">
      <div className="container-max flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#" className="text-lg font-bold tracking-tight text-white">
          Klimaanlage <span className="text-gradient-ice">Frankfurt</span>
        </a>

        <nav className="hidden items-center gap-5 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-400 transition hover:text-cyan-300"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#anfrage"
            className="btn-glow rounded-xl bg-gradient-to-r from-cyan-500 to-sky-500 px-4 py-2 text-sm font-semibold text-white transition hover:from-cyan-400 hover:to-sky-400"
          >
            Anfrage stellen
          </a>
        </nav>

        <button
          type="button"
          className="rounded-lg p-2 text-slate-400 lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Menü öffnen"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-cyan-500/10 bg-midnight/95 px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-300"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#anfrage"
              className="btn-glow rounded-xl bg-gradient-to-r from-cyan-500 to-sky-500 px-4 py-2 text-center text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              Anfrage stellen
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
