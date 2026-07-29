import Link from "next/link";
import { MapPin, Phone, Star } from "lucide-react";
import { FacebookIcon, InstagramIcon } from "@/components/SocialIcons";
import { restaurant } from "@/data/restaurant";

export function Footer() {
  return (
    <footer className="border-t border-forest/10 bg-forest text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-display text-lg font-semibold">
            {restaurant.name}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-cream/70">
            {restaurant.shortDescription}
          </p>
          <div className="mt-4 flex gap-4">
            <a
              href={restaurant.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-cream/70 transition-colors hover:text-terracotta"
            >
              <FacebookIcon size={20} />
            </a>
            <a
              href={restaurant.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-cream/70 transition-colors hover:text-terracotta"
            >
              <InstagramIcon size={20} />
            </a>
            <a
              href={restaurant.social.tripadvisor}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Tripadvisor"
              className="text-cream/70 transition-colors hover:text-terracotta"
            >
              <Star size={20} />
            </a>
          </div>
        </div>

        <div>
          <p className="font-display text-base font-semibold">Horaires</p>
          <ul className="mt-3 space-y-1 text-sm text-cream/70">
            {restaurant.hours.map((h) => (
              <li key={h.day} className="flex justify-between gap-4">
                <span>{h.day}</span>
                <span className="text-right">
                  {h.ranges.length ? h.ranges.join(" · ") : "Fermé"}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-display text-base font-semibold">Contact</p>
          <div className="mt-3 space-y-2 text-sm text-cream/70">
            <a
              href={restaurant.mapLinkHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-2 hover:text-terracotta"
            >
              <MapPin size={16} className="mt-0.5 shrink-0" />
              {restaurant.address.full}
            </a>
            <a
              href={`tel:${restaurant.phone}`}
              className="flex items-center gap-2 hover:text-terracotta"
            >
              <Phone size={16} className="shrink-0" />
              {restaurant.phoneDisplay}
            </a>
          </div>
          <Link
            href="/contact"
            className="mt-4 inline-block text-sm font-semibold text-terracotta hover:underline"
          >
            Voir l&apos;itinéraire →
          </Link>
        </div>
      </div>

      <div className="border-t border-cream/10 px-4 py-4 text-center text-xs text-cream/50 sm:px-6">
        © {new Date().getFullYear()} {restaurant.name} — {restaurant.address.city}
      </div>
    </footer>
  );
}
