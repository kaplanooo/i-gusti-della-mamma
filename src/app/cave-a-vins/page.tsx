import type { Metadata } from "next";
import Image from "next/image";
import { wineCategories } from "@/data/wines";
import { restaurant, siteConfig } from "@/data/restaurant";
import { breadcrumbJsonLd, parsePrice } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { RelatedPages } from "@/components/RelatedPages";

const year = new Date().getFullYear();

export const metadata: Metadata = {
  title: `Cave à Vins ${year}`,
  description:
    "Bourgogne, Bordeaux, vallée du Rhône, vins d'Italie... Découvrez notre cave à vins à prix justes et trouvez l'accord parfait pour votre repas.",
  alternates: {
    canonical: `${siteConfig.url}/cave-a-vins`,
  },
};

const winesJsonLd = {
  "@context": "https://schema.org",
  "@type": "Menu",
  name: `Cave à vins — ${restaurant.name}`,
  hasMenuSection: wineCategories.map((category) => ({
    "@type": "MenuSection",
    name: category.title,
    hasMenuItem: category.wines.map((wine) => ({
      "@type": "MenuItem",
      name: wine.name,
      description: [wine.producer, wine.description]
        .filter(Boolean)
        .join(" — "),
      offers: {
        "@type": "Offer",
        price: parsePrice(wine.price),
        priceCurrency: "EUR",
      },
    })),
  })),
};

const breadcrumb = breadcrumbJsonLd([
  { name: "Accueil", path: "/" },
  { name: "Cave à vins", path: "/cave-a-vins" },
]);

export default function WinesPage() {
  return (
    <>
      <JsonLd data={[breadcrumb, winesJsonLd]} />
      <section className="relative">
        <div className="relative h-72 w-full">
          <Image
            src="/images/vins-hero.jpg"
            alt="Sélection de grands vins de Bourgogne chez I Gusti Della Mamma"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center bg-charcoal/45">
          <div className="text-center px-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cream/80">
              Notre cave
            </p>
            <h1 className="mt-3 font-display text-4xl font-semibold text-cream">
              La cave à vins
            </h1>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6">
        <p className="text-lg leading-relaxed text-charcoal/80">
          Au fil des années, nous avons constitué une cave à vins qui sort de
          l&apos;ordinaire pour un restaurant italien : de belles appellations
          de Bourgogne, de Bordeaux et de la vallée du Rhône, aux côtés de
          vins d&apos;Italie soigneusement choisis. Notre conviction : ces
          flacons méritent des prix justes, pour être partagés à table plutôt
          que réservés aux grandes occasions.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-10 sm:px-6">
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="relative h-56 overflow-hidden rounded-2xl">
            <Image
              src="/images/vins-bordeaux.jpg"
              alt="Sélection de grands crus de Bordeaux"
              fill
              className="object-cover"
              sizes="(min-width: 640px) 33vw, 100vw"
            />
          </div>
          <div className="relative h-56 overflow-hidden rounded-2xl">
            <Image
              src="/images/vins-bourgogne.jpg"
              alt="Bouteilles de Bourgogne, Chambolle-Musigny et Clos Vougeot"
              fill
              className="object-cover"
              sizes="(min-width: 640px) 33vw, 100vw"
            />
          </div>
          <div className="relative h-56 overflow-hidden rounded-2xl">
            <Image
              src="/images/vins-verre.jpg"
              alt="Verre de vin rouge dans la cave"
              fill
              className="object-cover"
              sizes="(min-width: 640px) 33vw, 100vw"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <nav
          aria-label="Catégories de vins"
          className="mb-14 flex flex-wrap gap-2"
        >
          {wineCategories.map((c) => (
            <a
              key={c.id}
              href={`#${c.id}`}
              className="rounded-full border border-forest/20 px-4 py-2 text-sm font-medium text-forest transition-colors hover:bg-forest hover:text-cream"
            >
              {c.title}
            </a>
          ))}
        </nav>

        <div className="space-y-16">
          {wineCategories.map((category) => (
            <div key={category.id} id={category.id} className="scroll-mt-24">
              <h3 className="font-display text-2xl font-semibold text-forest">
                {category.title}
              </h3>
              <div className="mt-6 h-px w-16 bg-terracotta" />
              <ul className="mt-8 grid gap-x-10 gap-y-7 sm:grid-cols-2">
                {category.wines.map((wine) => (
                  <li
                    key={`${wine.name}-${wine.producer ?? ""}`}
                    className="flex flex-col"
                  >
                    <div className="flex items-baseline justify-between gap-3">
                      <span className="font-display text-lg font-medium text-charcoal">
                        {wine.name}
                      </span>
                      <span className="whitespace-nowrap font-display text-lg font-medium text-terracotta">
                        {wine.price}
                      </span>
                    </div>
                    {wine.producer ? (
                      <p className="mt-1 text-sm font-medium text-charcoal/50">
                        {wine.producer}
                      </p>
                    ) : null}
                    {wine.description ? (
                      <p className="mt-1 text-sm leading-relaxed text-charcoal/60">
                        {wine.description}
                      </p>
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-16 text-center text-xs text-charcoal/40">
          L&apos;abus d&apos;alcool est dangereux pour la santé, à consommer
          avec modération. Millésimes et disponibilités susceptibles
          d&apos;évoluer selon nos arrivages.
        </p>
      </section>

      <RelatedPages
        links={[
          {
            href: "/menu",
            label: "Notre carte de plats",
            description:
              "Pâtes fraîches, pizzas au feu de bois et viandes grillées à accorder avec nos vins.",
          },
          {
            href: "/a-propos",
            label: "Notre histoire",
            description:
              "La passion d'une famille pour la cuisine méditerranéenne et les belles appellations.",
          },
          {
            href: "/contact",
            label: "Réserver une table",
            description:
              "Adresse, horaires et téléphone pour venir déguster notre sélection à Saint-Martin-Lacaussade.",
          },
        ]}
      />
    </>
  );
}
