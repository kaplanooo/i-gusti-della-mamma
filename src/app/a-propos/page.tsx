import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { RelatedPages } from "@/components/RelatedPages";
import { JsonLd } from "@/components/JsonLd";
import { restaurant, siteConfig } from "@/data/restaurant";
import { breadcrumbJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Restaurant Italien – Notre Histoire",
  description:
    "Une histoire de famille, une passion pour la cuisine méditerranéenne : découvrez qui se cache derrière I Gusti Della Mamma, près de Blaye.",
  alternates: {
    canonical: `${siteConfig.url}/a-propos`,
  },
};

const breadcrumb = breadcrumbJsonLd([
  { name: "Accueil", path: "/" },
  { name: "À propos", path: "/a-propos" },
]);

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "À propos — " + restaurant.name,
  url: `${siteConfig.url}/a-propos`,
  about: {
    "@type": "Restaurant",
    name: restaurant.name,
  },
};

const values = [
  {
    title: "Produits de qualité",
    text: "Des ingrédients italiens sélectionnés avec soin : San Marzano, burrata, jambons DOP, huile d'olive de Sicile.",
  },
  {
    title: "Tout fait maison",
    text: "Pâtes, sauces, desserts et pizzas préparés sur place, dans le respect des recettes traditionnelles.",
  },
  {
    title: "Esprit de famille",
    text: "Un projet lancé par une famille passionnée de cuisine méditerranéenne, pour une expérience conviviale et chaleureuse.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={[breadcrumb, aboutJsonLd]} />
      <section className="relative">
        <div className="relative h-64 w-full">
          <Image
            src="/images/interior-salle.jpg"
            alt="La salle du restaurant I Gusti Della Mamma"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center bg-charcoal/40">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cream/80">
              Notre histoire
            </p>
            <h1 className="mt-3 font-display text-4xl font-semibold text-cream">
              À propos de nous
            </h1>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6">
        <p className="text-lg leading-relaxed text-charcoal/80">
          {restaurant.description}
        </p>
      </section>

      <section className="bg-cream-dark py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Nos engagements"
            title="Ce qui nous anime au quotidien"
          />
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl bg-cream p-7 shadow-sm"
              >
                <h3 className="font-display text-xl font-semibold text-forest">
                  {v.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/70">
                  {v.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="relative h-72 overflow-hidden rounded-2xl">
            <Image
              src="/images/about-filet.jpg"
              alt="Filet de bœuf grillé dressé avec purée maison"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
          <div>
            <h2 className="font-display text-3xl font-semibold text-forest">
              Une expérience à vivre, à toute heure
            </h2>
            <p className="mt-5 leading-relaxed text-charcoal/70">
              Que ce soit pour un déjeuner rapide en terrasse, un dîner
              romantique ou un repas en famille, notre équipe vous accueille
              du mardi au samedi dans une ambiance chaleureuse et
              authentique. Retrouvez toutes nos spécialités sur{" "}
              <Link
                href="/menu"
                className="font-semibold text-terracotta hover:underline"
              >
                notre carte
              </Link>{" "}
              et nos plus belles bouteilles dans{" "}
              <Link
                href="/cave-a-vins"
                className="font-semibold text-terracotta hover:underline"
              >
                notre cave à vins
              </Link>
              .
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {restaurant.services.map((s) => (
                <span
                  key={s}
                  className="rounded-full bg-forest/10 px-4 py-2 text-sm font-medium text-forest"
                >
                  {s}
                </span>
              ))}
            </div>
            <Link
              href="/contact"
              className="mt-8 inline-block rounded-full bg-terracotta px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-terracotta-dark"
            >
              Nous trouver &amp; réserver
            </Link>
          </div>
        </div>
      </section>

      <RelatedPages
        links={[
          {
            href: "/menu",
            label: "Notre carte de plats",
            description:
              "Antipasti, pâtes fraîches, pizzas au feu de bois et desserts faits maison.",
          },
          {
            href: "/cave-a-vins",
            label: "Notre cave à vins",
            description:
              "Bourgogne, Bordeaux, vallée du Rhône : une sélection à prix justes.",
          },
          {
            href: "/contact",
            label: "Nous trouver",
            description:
              "Adresse, horaires et téléphone pour venir nous rendre visite.",
          },
        ]}
      />
    </>
  );
}
