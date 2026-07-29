"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { restaurant } from "@/data/restaurant";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/menu", label: "La carte" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact & accès" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-forest/10 bg-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link
          href="/"
          className="font-display text-xl font-semibold text-forest"
          onClick={() => setOpen(false)}
        >
          {restaurant.name}
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-charcoal/80 transition-colors hover:text-terracotta"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <a
          href={`tel:${restaurant.phone}`}
          className="hidden items-center gap-2 rounded-full bg-terracotta px-5 py-2.5 text-sm font-semibold text-cream transition-colors hover:bg-terracotta-dark md:inline-flex"
        >
          <Phone size={16} />
          {restaurant.phoneDisplay}
        </a>

        <button
          type="button"
          aria-label="Ouvrir le menu"
          className="text-forest md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open ? (
        <nav className="flex flex-col gap-1 border-t border-forest/10 bg-cream px-4 pb-4 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-2 py-3 text-base font-medium text-charcoal hover:bg-forest/5"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={`tel:${restaurant.phone}`}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-terracotta px-5 py-3 text-sm font-semibold text-cream"
          >
            <Phone size={16} />
            Appeler · {restaurant.phoneDisplay}
          </a>
        </nav>
      ) : null}
    </header>
  );
}
