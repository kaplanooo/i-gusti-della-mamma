import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MapPin, Phone, Star } from "lucide-react";
import { FacebookIcon, InstagramIcon } from "@/components/SocialIcons";
import { HoursTable } from "@/components/HoursTable";
import { MapEmbed } from "@/components/MapEmbed";
import { JsonLd } from "@/components/JsonLd";
import { RelatedPages } from "@/components/RelatedPages";
import { restaurant, siteConfig } from "@/data/restaurant";
import { breadcrumbJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Restaurant Italien Blaye – Contact",
  description:
    "Adresse, horaires et itinéraire pour rejoindre I Gusti Della Mamma près de Blaye. Réservation conseillée : appelez-nous dès maintenant.",
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
};

const breadcrumb = breadcrumbJsonLd([
  { name: "Accueil", path: "/" },
  { name: "Contact & accès", path: "/contact" },
]);

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact — " + restaurant.name,
  url: `${siteConfig.url}/contact`,
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={[breadcrumb, contactJsonLd]} />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-terracotta">
          Contact &amp; accès
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold text-forest">
          Venez nous rendre visite
        </h1>

        <div className="mt-12 grid gap-12 md:grid-cols-2">
          <div className="space-y-8">
            <div>
              <h2 className="flex items-center gap-2 font-display text-xl font-semibold text-forest">
                <MapPin size={20} className="text-terracotta" />
                Adresse
              </h2>
              <p className="mt-3 text-charcoal/70">{restaurant.address.full}</p>
              <a
                href={restaurant.mapLinkHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-sm font-semibold text-terracotta hover:underline"
              >
                Ouvrir dans Google Maps →
              </a>
            </div>

            <div>
              <h2 className="flex items-center gap-2 font-display text-xl font-semibold text-forest">
                <Phone size={20} className="text-terracotta" />
                Téléphone
              </h2>
              <a
                href={`tel:${restaurant.phone}`}
                className="mt-3 inline-block text-charcoal/70 hover:text-terracotta"
              >
                {restaurant.phoneDisplay}
              </a>
              <p className="mt-1 text-sm text-charcoal/50">
                Réservation conseillée — jetez un œil à{" "}
                <Link
                  href="/menu"
                  className="font-semibold text-terracotta hover:underline"
                >
                  notre carte
                </Link>{" "}
                avant de nous appeler.
              </p>
            </div>

            <div>
              <h2 className="flex items-center gap-2 font-display text-xl font-semibold text-forest">
                <Mail size={20} className="text-terracotta" />
                Réseaux sociaux
              </h2>
              <div className="mt-3 flex gap-4">
                <a
                  href={restaurant.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-charcoal/70 hover:text-terracotta"
                >
                  <FacebookIcon size={18} /> Facebook
                </a>
                <a
                  href={restaurant.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-charcoal/70 hover:text-terracotta"
                >
                  <InstagramIcon size={18} /> Instagram
                </a>
                <a
                  href={restaurant.social.tripadvisor}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-charcoal/70 hover:text-terracotta"
                >
                  <Star size={18} /> Tripadvisor
                </a>
              </div>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-forest">
                Horaires d&apos;ouverture
              </h2>
              <HoursTable className="mt-3 max-w-sm" />
            </div>
          </div>

          <MapEmbed className="h-full min-h-[420px] w-full rounded-2xl border border-forest/10" />
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
            href: "/a-propos",
            label: "Notre histoire",
            description:
              "Le projet familial derrière la cuisine faite maison d'I Gusti Della Mamma.",
          },
        ]}
      />
    </>
  );
}
