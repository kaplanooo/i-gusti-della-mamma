import { AlertCircle } from "lucide-react";
import type { MenuCategory } from "@/data/menu";

export function MenuList({ categories }: { categories: MenuCategory[] }) {
  return (
    <div className="space-y-16">
      {categories.map((category) => (
        <div key={category.id} id={category.id} className="scroll-mt-24">
          <h3 className="font-display text-2xl font-semibold text-forest">
            {category.title}
          </h3>
          <div className="mt-6 h-px w-16 bg-terracotta" />
          <ul className="mt-8 grid gap-x-10 gap-y-7 sm:grid-cols-2">
            {category.items.map((item) => (
              <li key={item.name} className="flex flex-col">
                <div className="flex items-baseline justify-between gap-3">
                  <span className="font-display text-lg font-medium text-charcoal">
                    {item.name}
                  </span>
                  {item.price ? (
                    <span className="whitespace-nowrap font-display text-lg font-medium text-terracotta">
                      {item.price}
                    </span>
                  ) : null}
                </div>
                {item.description ? (
                  <p className="mt-1 text-sm leading-relaxed text-charcoal/60">
                    {item.description}
                  </p>
                ) : null}
                {item.variants ? (
                  <ul className="mt-2 space-y-1">
                    {item.variants.map((v) => (
                      <li
                        key={v.label}
                        className="flex justify-between text-sm text-charcoal/70"
                      >
                        <span>{v.label}</span>
                        <span className="font-medium text-terracotta">
                          {v.price}
                        </span>
                      </li>
                    ))}
                  </ul>
                ) : null}
                {item.allergens ? (
                  <span className="mt-2 inline-flex items-center gap-1 text-xs text-charcoal/40">
                    <AlertCircle size={12} />
                    Présence d&apos;allergènes
                  </span>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
