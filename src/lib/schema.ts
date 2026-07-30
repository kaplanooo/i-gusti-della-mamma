import { siteConfig } from "@/data/restaurant";

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`,
    })),
  };
}

/** Converts a French price string like "13,00 €" into a plain decimal string like "13.00". */
export function parsePrice(price: string): string {
  const match = price.replace(/\s/g, "").match(/([\d,]+)/);
  if (!match) return "0";
  return match[1].replace(",", ".");
}
