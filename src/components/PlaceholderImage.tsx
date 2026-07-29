import { UtensilsCrossed } from "lucide-react";

export function PlaceholderImage({
  label,
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-forest to-forest-dark ${className}`}
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #faf6ef 0, #faf6ef 2px, transparent 2px, transparent 14px)",
        }}
      />
      <div className="relative flex flex-col items-center gap-2 text-cream/70">
        <UtensilsCrossed size={28} strokeWidth={1.5} />
        {label ? (
          <span className="font-display text-sm tracking-wide">{label}</span>
        ) : null}
      </div>
    </div>
  );
}
