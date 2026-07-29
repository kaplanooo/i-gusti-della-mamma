import { restaurant } from "@/data/restaurant";

export function HoursTable({ className = "" }: { className?: string }) {
  return (
    <ul className={className}>
      {restaurant.hours.map((h) => (
        <li
          key={h.day}
          className="flex items-center justify-between gap-4 border-b border-forest/10 py-2.5 text-sm last:border-0"
        >
          <span className="font-medium text-charcoal">{h.day}</span>
          <span
            className={h.ranges.length ? "text-charcoal/70" : "text-charcoal/40"}
          >
            {h.ranges.length ? h.ranges.join(" · ") : "Fermé"}
          </span>
        </li>
      ))}
    </ul>
  );
}
