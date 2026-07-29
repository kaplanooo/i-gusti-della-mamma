export const restaurant = {
  name: "I Gusti Della Mamma",
  tagline: "Cuisine italienne authentique, aux portes de Blaye",
  shortDescription:
    "Restaurant italien familial à Saint-Martin-Lacaussade, près de Blaye : pâtes, pizzas et desserts faits maison.",
  description:
    "I Gusti Della Mamma est né suite à un projet familial lancé par des professionnels de santé passionnés par la cuisine méditerranéenne. Nous misons sur la qualité des produits et proposons une cuisine authentique et respectueuse des produits travaillés, entièrement faite maison. Découvrez nos antipasti, pâtes, pizzas, viandes cuites au charbon de bois et desserts. Profitez de notre sélection minutieuse de vins, d'alcools et spiritueux pour accompagner votre repas. Idéal pour un dîner romantique, en famille ou entre amis, notre restaurant veut vous faire vivre une expérience culinaire authentique et mémorable.",
  address: {
    street: "Chemin de Boulaire",
    postalCode: "33390",
    city: "Saint-Martin-Lacaussade",
    region: "Nouvelle-Aquitaine",
    country: "FR",
    full: "Chemin de Boulaire, 33390 Saint-Martin-Lacaussade",
  },
  phone: "+33557947094",
  phoneDisplay: "05 57 94 70 94",
  priceRange: "€€",
  cuisine: "Restaurant italien",
  services: ["Réservation conseillée", "Terrasse", "Cocktails maison"],
  hours: [
    { day: "Lundi", ranges: [] },
    { day: "Mardi", ranges: ["12h00–13h30", "19h00–21h30"] },
    { day: "Mercredi", ranges: ["12h00–13h30", "19h00–21h30"] },
    { day: "Jeudi", ranges: ["12h00–13h30", "19h00–21h30"] },
    { day: "Vendredi", ranges: ["12h00–13h30", "19h00–21h45"] },
    { day: "Samedi", ranges: ["12h00–13h30", "19h00–21h45"] },
    { day: "Dimanche", ranges: [] },
  ],
  social: {
    facebook: "https://www.facebook.com/igustidellamammaofficiel/",
    instagram: "https://www.instagram.com/igustidellamammaofficiel/",
    tripadvisor:
      "https://www.tripadvisor.fr/Restaurant_Review-g1939329-d14939960-Reviews-I_Gusti_Della_Mamma-Saint_Martin_Lacaussade_Gironde_Nouvelle_Aquitaine.html",
  },
  mapEmbedSrc:
    "https://www.google.com/maps?q=Chemin+de+Boulaire,+33390+Saint-Martin-Lacaussade&output=embed",
  mapLinkHref:
    "https://www.google.com/maps/search/?api=1&query=I+Gusti+Della+Mamma+Chemin+de+Boulaire+33390+Saint-Martin-Lacaussade",
} as const;

export const siteConfig = {
  url: "https://igustidellamamma.fr",
  ogImage: "/images/og-cover.jpg",
  gaId: "G-ZNV9HWCJMJ",
} as const;
