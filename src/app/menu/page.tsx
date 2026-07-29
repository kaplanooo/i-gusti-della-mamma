import type { Metadata } from "next";
import Image from "next/image";
import { MenuList } from "@/components/MenuList";
import { menu, drinksCategories } from "@/data/menu";
import { restaurant } from "@/data/restaurant";

export const metadata: Metadata = {
  title: "La carte",
  description: `Découvrez la carte complète de ${restaurant.name} : antipasti, pâtes fraîches, pizzas au feu, viandes, poissons et desserts maison.`,
};

export default function MenuPage() {
  return (
    <>
      <section className="relative">
        <div className="relative h-64 w-full">
          <Image
            src="/images/menu-banner-risotto.jpg"
            alt="Plat maison servi avec des asperges blanches et un verre de vin"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center bg-charcoal/40">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cream/80">
              La carte
            </p>
            <h1 className="mt-3 font-display text-4xl font-semibold text-cream">
              Notre menu
            </h1>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <nav
          aria-label="Catégories du menu"
          className="mb-14 flex flex-wrap gap-2"
        >
          {menu.map((c) => (
            <a
              key={c.id}
              href={`#${c.id}`}
              className="rounded-full border border-forest/20 px-4 py-2 text-sm font-medium text-forest transition-colors hover:bg-forest hover:text-cream"
            >
              {c.title}
            </a>
          ))}
        </nav>

        <MenuList categories={menu} />

        <div
          id="boissons"
          className="mt-16 scroll-mt-24 rounded-2xl bg-forest px-6 py-10 text-cream sm:px-10"
        >
          <h3 className="font-display text-2xl font-semibold">
            Boissons &amp; vins
          </h3>
          <p className="mt-3 max-w-2xl text-cream/70">
            Une sélection de cocktails maison, vins italiens et français,
            bières, softs et digestifs vous est proposée sur place. La carte
            des vins évoluant régulièrement au gré de nos arrivages, elle est
            disponible en salle et sur simple demande.
          </p>
          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-cream/80">
            {drinksCategories.map((d) => (
              <li key={d} className="before:mr-2 before:content-['•']">
                {d}
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-8 text-center text-xs text-charcoal/40">
          L&apos;abus d&apos;alcool est dangereux pour la santé, à consommer
          avec modération. Prix nets, service compris. Liste des allergènes
          disponible sur demande.
        </p>
      </section>
    </>
  );
}
