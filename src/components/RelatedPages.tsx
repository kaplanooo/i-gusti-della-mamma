import Link from "next/link";
import { ArrowRight } from "lucide-react";

type RelatedLink = {
  href: string;
  label: string;
  description: string;
};

export function RelatedPages({
  title = "À découvrir aussi",
  links,
}: {
  title?: string;
  links: RelatedLink[];
}) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h2 className="font-display text-2xl font-semibold text-forest">
        {title}
      </h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="group flex flex-col justify-between rounded-2xl border border-forest/10 p-6 transition-colors hover:border-terracotta/40 hover:bg-cream-dark"
          >
            <div>
              <p className="font-display text-lg font-semibold text-forest">
                {link.label}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-charcoal/70">
                {link.description}
              </p>
            </div>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-terracotta">
              Découvrir
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
