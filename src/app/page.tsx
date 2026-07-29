import Link from "next/link";
import { Clock, MapPin, Phone, Star } from "lucide-react";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { SectionHeading } from "@/components/SectionHeading";
import { HoursTable } from "@/components/HoursTable";
import { restaurant } from "@/data/restaurant";
import { menu } from "@/data/menu";

const highlightIds = ["pizzas", "pates", "desserts"];
const highlights = highlightIds
  .map((id) => menu.find((c) => c.id === id))
  .filter(Boolean)
  .map((c) => ({ category: c!.title, item: c!.items[0] }));

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <PlaceholderImage className="h-[70vh] min-h-[480px] w-full" />
        <div className="absolute inset-0 flex items-center bg-charcoal/30">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cream/80">
              {restaurant.cuisine} · {restaurant.address.city}
            </p>
            <h1 className="mt-4 max-w-xl font-display text-4xl font-semibold text-cream sm:text-5xl">
              {restaurant.tagline}
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-cream/90">
              {restaurant.shortDescription}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/menu"
                className="rounded-full bg-terracotta px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-terracotta-dark"
              >
                Découvrir la carte
              </Link>
              <a
                href={`tel:${restaurant.phone}`}
                className="rounded-full border border-cream/60 px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-cream hover:text-forest"
              >
                Réserver · {restaurant.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <PlaceholderImage label="Photo à venir" className="h-80 rounded-2xl" />
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-terracotta">
              Notre histoire
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold text-forest sm:text-4xl">
              Une cuisine familiale, pensée comme à la maison
            </h2>
            <p className="mt-5 leading-relaxed text-charcoal/70">
              {restaurant.description}
            </p>
            <Link
              href="/a-propos"
              className="mt-6 inline-block text-sm font-semibold text-terracotta hover:underline"
            >
              En savoir plus sur nous →
            </Link>
          </div>
        </div>
      </section>

      {/* Menu highlights */}
      <section className="bg-forest py-20 text-cream">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="La carte"
            title="Un avant-goût de nos spécialités"
            description="Pâtes fraîches, pizzas au feu, desserts maison — toute la carte est disponible en ligne."
          />
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {highlights.map(({ category, item }) => (
              <div
                key={item.name}
                className="rounded-2xl border border-cream/15 bg-cream/5 p-6"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
                  {category}
                </p>
                <p className="mt-3 font-display text-xl font-semibold">
                  {item.name}
                </p>
                {item.description ? (
                  <p className="mt-2 text-sm leading-relaxed text-cream/70">
                    {item.description}
                  </p>
                ) : null}
                {item.price ? (
                  <p className="mt-4 font-display text-lg text-terracotta">
                    {item.price}
                  </p>
                ) : null}
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/menu"
              className="rounded-full bg-terracotta px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-terracotta-dark"
            >
              Voir la carte complète
            </Link>
          </div>
        </div>
      </section>

      {/* Info strip */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Clock className="text-terracotta" size={24} />
            <h3 className="mt-4 font-display text-xl font-semibold text-forest">
              Horaires
            </h3>
            <HoursTable className="mt-4" />
          </div>
          <div>
            <MapPin className="text-terracotta" size={24} />
            <h3 className="mt-4 font-display text-xl font-semibold text-forest">
              Adresse
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-charcoal/70">
              {restaurant.address.full}
            </p>
            <Link
              href="/contact"
              className="mt-3 inline-block text-sm font-semibold text-terracotta hover:underline"
            >
              Voir l&apos;itinéraire →
            </Link>
          </div>
          <div>
            <Phone className="text-terracotta" size={24} />
            <h3 className="mt-4 font-display text-xl font-semibold text-forest">
              Réservation
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-charcoal/70">
              Réservation conseillée, en particulier le week-end.
            </p>
            <a
              href={`tel:${restaurant.phone}`}
              className="mt-3 inline-block text-sm font-semibold text-terracotta hover:underline"
            >
              {restaurant.phoneDisplay} →
            </a>
          </div>
        </div>
      </section>

      {/* Reviews teaser */}
      <section className="bg-cream-dark py-16">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <Star className="mx-auto text-terracotta" size={28} />
          <p className="mt-4 max-w-xl mx-auto text-lg leading-relaxed text-charcoal/80">
            Merci à tous nos clients pour leurs avis sur Google et Tripadvisor
            — ils nous aident à faire vivre I Gusti Della Mamma.
          </p>
          <div className="mt-6 flex justify-center gap-6 text-sm font-semibold text-terracotta">
            <a
              href={restaurant.social.tripadvisor}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Voir sur Tripadvisor
            </a>
            <a
              href={restaurant.mapLinkHref}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Voir sur Google Maps
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
