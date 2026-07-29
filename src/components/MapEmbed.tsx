import { restaurant } from "@/data/restaurant";

export function MapEmbed({ className = "" }: { className?: string }) {
  return (
    <iframe
      title={`Localisation de ${restaurant.name}`}
      src={restaurant.mapEmbedSrc}
      className={className}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
}
