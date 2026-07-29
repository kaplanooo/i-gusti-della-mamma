import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { restaurant, siteConfig } from "@/data/restaurant";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${restaurant.name} — Restaurant italien à ${restaurant.address.city}, près de Blaye`,
    template: `%s — ${restaurant.name}`,
  },
  description: restaurant.shortDescription,
  keywords: [
    "restaurant italien",
    "Blaye",
    "Saint-Martin-Lacaussade",
    "pizza",
    "pâtes fraîches",
    "Gironde",
    restaurant.name,
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteConfig.url,
    siteName: restaurant.name,
    title: `${restaurant.name} — Restaurant italien près de Blaye`,
    description: restaurant.shortDescription,
    images: [{ url: siteConfig.ogImage }],
  },
  twitter: {
    card: "summary_large_image",
    title: restaurant.name,
    description: restaurant.shortDescription,
    images: [siteConfig.ogImage],
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: restaurant.name,
  description: restaurant.description,
  servesCuisine: "Italian",
  priceRange: restaurant.priceRange,
  telephone: restaurant.phone,
  url: siteConfig.url,
  address: {
    "@type": "PostalAddress",
    streetAddress: restaurant.address.street,
    addressLocality: restaurant.address.city,
    postalCode: restaurant.address.postalCode,
    addressRegion: restaurant.address.region,
    addressCountry: restaurant.address.country,
  },
  sameAs: [restaurant.social.facebook, restaurant.social.instagram, restaurant.social.tripadvisor],
  openingHoursSpecification: restaurant.hours
    .filter((h) => h.ranges.length)
    .flatMap((h) =>
      h.ranges.map((range) => {
        const [opens, closes] = range
          .split("–")
          .map((t) => t.trim().replace("h", ":").padEnd(5, "0"));
        return {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: `https://schema.org/${
            {
              Lundi: "Monday",
              Mardi: "Tuesday",
              Mercredi: "Wednesday",
              Jeudi: "Thursday",
              Vendredi: "Friday",
              Samedi: "Saturday",
              Dimanche: "Sunday",
            }[h.day]
          }`,
          opens,
          closes,
        };
      })
    ),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${playfair.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-cream text-charcoal">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
