export type MenuItem = {
  name: string;
  description?: string;
  price?: string;
  variants?: { label: string; price: string }[];
  allergens?: boolean;
};

export type MenuCategory = {
  id: string;
  title: string;
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    id: "antipasti",
    title: "Antipasti",
    items: [
      {
        name: "Focaccia avec Lardo di Pata Negra",
        description: "Focaccia, lard de Pata Negra",
        price: "13,00 €",
        allergens: true,
      },
      {
        name: "Melon Parme",
        description: "Melon du Quercy, jambon de Parme 26 mois DOP",
        price: "13,00 €",
      },
      {
        name: "Salumi",
        description: "Sélection de charcuteries italiennes",
        price: "15,00 €",
        allergens: true,
      },
      {
        name: "Formaggi",
        description: "Sélection de fromages italiens",
        price: "15,00 €",
        allergens: true,
      },
    ],
  },
  {
    id: "salades",
    title: "Salades",
    items: [
      {
        name: "Salade façon César",
        description:
          "Salade verte, roquette, poulet pané, tomates cerises, parmesan et sauce du chef",
        price: "16,00 €",
        allergens: true,
      },
      {
        name: "Mela blu",
        description:
          "Salade verte, tomate cerise, bleu, noix, pomme, sauce gorgonzola et parmesan",
        price: "16,00 €",
        allergens: true,
      },
      {
        name: "Salade à la Thaï",
        description:
          "Mélange de salade verte, carottes, chou rouge, poivrons, germes de soja, cacahuètes...",
        price: "19,00 €",
        allergens: true,
      },
      {
        name: "Salade à la Thaï végétarienne",
        description:
          "Mélange de salade verte, carottes, chou rouge, poivrons, germes de soja, cacahuètes, gyoza...",
        price: "19,00 €",
      },
    ],
  },
  {
    id: "suggestion",
    title: "Suggestion",
    items: [
      {
        name: "Club sandwich della mamma",
        description:
          "Poulet mariné, bacon fumé au sirop d'érable, salade, tomate, sauce della mamma et ses frites maison",
        price: "18,00 €",
        allergens: true,
      },
    ],
  },
  {
    id: "viandes",
    title: "Nos viandes",
    items: [
      {
        name: "Tartare de bœuf (origine France) ~180g",
        description:
          "Tartare de bœuf au couteau, préparé, accompagné de ses frites maison",
        price: "21,00 €",
        allergens: true,
      },
      {
        name: "Scaloppina milanaise (origine UE)",
        description:
          "Escalope de veau panée, accompagnée de ses frites maison (ou frites à l'huile de truffe et parmesan)",
        price: "21,00 €",
        allergens: true,
      },
      {
        name: "Faux filet (~300g, origine France)",
        description:
          "Sauce au poivre frais, accompagné de ses frites maison et salade",
        price: "26,00 €",
      },
    ],
  },
  {
    id: "poissons",
    title: "Nos poissons",
    items: [
      {
        name: "Duo poulpe et saumon",
        description:
          "Carpaccio de poulpe et tartare de saumon maison, accompagné de frites",
        price: "26,00 €",
      },
      {
        name: "Tartare de saumon gravlax",
        description:
          "Avocat, crème de fromage, accompagné de ses frites maison",
        price: "21,00 €",
        allergens: true,
      },
    ],
  },
  {
    id: "burgers",
    title: "Burgers",
    items: [
      {
        name: "Big Gri'Beach",
        description:
          "Bun brioché, sauce burger maison, pickles de concombre, steak haché de bœuf, cheddar, bacon, muesli d'oignons...",
        price: "23,00 €",
        allergens: true,
      },
      {
        name: "Cheek chicken",
        description:
          "Bun brioché, sauce béarnaise maison, poulet pané, tomme de brebis, bacon, oignons rouges, salade",
        price: "23,00 €",
        allergens: true,
      },
      {
        name: "Blue'N'Bacon",
        description:
          "Bun brioché, sauce bacon fumé, oignons confits, steak haché de bœuf, bleu, bacon, muesli d'oignons...",
        price: "23,00 €",
        allergens: true,
      },
    ],
  },
  {
    id: "experience",
    title: "L'expérience culinaire de la Mamma",
    items: [
      {
        name: "Brochette filet de bœuf ~160g",
        description:
          "Flambage spectaculaire et cuisson innovante d'une brochette de filet de bœuf (cuisson bleu ou...)",
        price: "24,00 €",
        allergens: true,
      },
      {
        name: "Brochette de magret de canard ~160g",
        description:
          "Flambage spectaculaire et cuisson innovante d'une brochette de magret de canard, avec frites",
        price: "25,00 €",
        allergens: true,
      },
    ],
  },
  {
    id: "pates",
    title: "Nos pâtes",
    items: [
      {
        name: "Raviolis crustacés",
        description:
          "Raviolis à l'encre de seiche aux crustacés, bisque de crevettes maison, crevettes entières...",
        price: "25,00 €",
        allergens: true,
      },
      {
        name: "Linguine al amatriciana",
        description: "Linguine, guanciale, tomate, pecorino",
        price: "17,00 €",
        allergens: true,
      },
      {
        name: "Panzerotti truffe",
        description: "Raviolis champignons, burrata et sa sauce à la truffe",
        price: "20,00 €",
        allergens: true,
      },
      {
        name: "Agnolotti",
        description:
          "Ravioli aubergine et tomates séchées, tomates cerises, câpres, burrata et pesto",
        price: "19,00 €",
        allergens: true,
      },
      {
        name: "Sorrisi al pesto",
        description:
          "Ravioli ricotta basilic, pesto, burrata et tomates cerises",
        price: "20,00 €",
        allergens: true,
      },
      {
        name: "Linguine alla carbonara",
        description: "Linguine, guanciale, pecorino DOP, sauce au jaune d'œuf",
        price: "17,00 €",
        allergens: true,
      },
      {
        name: "Maccheroni tomate burrata",
        description:
          "Maccheroni, sauce tomate San Marzano, olives Kalamata, câpres, burrata",
        price: "16,00 €",
        allergens: true,
      },
      {
        name: "Maccheroni saumon gravlax",
        description:
          "Sauce à base de fumé de poisson maison, herbes fraîches, crème fraîche, saumon gravlax...",
        price: "20,00 €",
        allergens: true,
      },
      {
        name: "Gnocchi pesto burrata",
        description: "Gnocchis de betterave, pesto basilic maison, burrata",
        price: "20,00 €",
        allergens: true,
      },
      {
        name: "Gnocchi tomate burrata",
        description:
          "Gnocchis de betterave, sauce tomate San Marzano, olives Kalamata, câpres, burrata",
        price: "16,00 €",
      },
      {
        name: "Gnocchi saumon gravlax",
        description:
          "Gnocchis de betterave, crème blanche aux herbes fraîches, zeste d'agrumes, saumon gravlax maison",
        price: "20,00 €",
      },
    ],
  },
  {
    id: "pizzas",
    title: "Pizzas",
    items: [
      {
        name: "Panozzo Black Angus",
        description:
          "Forme portefeuille avec Black Angus, burrata, roquette et tomates cerises",
        price: "25,00 €",
        allergens: true,
      },
      {
        name: "Primavera",
        description:
          "Tomate San Marzano, mozzarella de bufflonne, jambon de Parme DOP, roquette, pêche, balsamique...",
        price: "24,00 €",
        allergens: true,
      },
      {
        name: "Fagottino Primavera",
        description: "Pesto, burrata, jambon cru 24 mois, roquette",
        price: "22,00 €",
        allergens: true,
      },
      {
        name: "Novarese",
        description:
          "Tomate San Marzano, mozzarella fior di latte, salame diavolo, gorgonzola, roquette",
        price: "21,00 €",
        allergens: true,
      },
      {
        name: "Margherita bufala",
        description:
          "Tomate San Marzano, mozzarella au lait de bufflonne, basilic, origan, huile d'olive de Sicile",
        price: "16,00 €",
      },
      {
        name: "Margherita",
        description:
          "Tomate San Marzano, mozzarella fior di latte, origan, basilic",
        price: "13,00 €",
        allergens: true,
      },
      {
        name: "Regina",
        description:
          "Tomate San Marzano, mozzarella fior di latte, jambon cuit, champignons, olives",
        price: "16,00 €",
        allergens: true,
      },
      {
        name: "Capricciosa",
        description:
          "Tomate San Marzano, mozzarella fior di latte, jambon cuit, salame diavolo, œuf, artichaut...",
        price: "21,00 €",
        allergens: true,
      },
      {
        name: "Calzone ouverte alla Parmigiana",
        description:
          "Tomate San Marzano, aubergine alla parmigiana, jambon cuit, burrata",
        price: "23,00 €",
        allergens: true,
      },
      {
        name: "Calzone con burrata",
        description:
          "Tomate San Marzano, mozzarella fior di latte, jambon cuit, burrata",
        price: "20,00 €",
        allergens: true,
      },
      {
        name: "Diavola",
        description:
          "Tomate San Marzano, mozzarella fior di latte, salame diavolo, poivrons grillés",
        price: "17,00 €",
        allergens: true,
      },
      {
        name: "New Calzone",
        description:
          "Mozzarella fior di latte, jambon cuit, robiola de chèvre, œuf, tomate San Marzano",
        price: "23,00 €",
        allergens: true,
      },
      {
        name: "Quattro formaggi",
        description:
          "Tomate San Marzano, mozzarella fior di latte, taleggio DOP, gorgonzola DOP, puzzone del Trentino...",
        price: "18,00 €",
        allergens: true,
      },
      {
        name: "New 4 fromages",
        description:
          "Tomate San Marzano, mozzarella fior di latte, robiola de chèvre Perenzin, gorgonzola Tosi...",
        price: "24,00 €",
        allergens: true,
      },
      {
        name: "Bismark",
        description:
          "Tomate San Marzano, mozzarella fior di latte, jambon cuit, œuf, burrata",
        price: "19,00 €",
        allergens: true,
      },
      {
        name: "Prosciutto Crudo",
        description:
          "Tomate San Marzano, mozzarella fior di latte, jambon de Parme DOP 24 mois, parmesan DOP, roquette",
        price: "19,00 €",
        allergens: true,
      },
      {
        name: "Capra",
        description:
          "Mozzarella fior di latte, robiola de chèvre, jambon cuit, miel",
        price: "21,00 €",
        allergens: true,
      },
      {
        name: "Casareccia fumé",
        description:
          "Tomate San Marzano, sprats fumés Maison Petrossian, gouda de chèvre, tomates séchées",
        price: "20,00 €",
        allergens: true,
      },
      {
        name: "Stracciatella e Salmone Gravlax",
        description:
          "Tomate San Marzano, cœur de burrata, saumon gravlax, zeste de citron, poivre noir de Tibet",
        price: "25,00 €",
        allergens: true,
      },
      {
        name: "Tartufo Della Mamma",
        description:
          "Crème de truffe, mozzarella fior di latte, burrata, jambon à la truffe, huile à la truffe",
        price: "26,00 €",
      },
      {
        name: "Tartufo",
        description:
          "Crème de truffe, mozzarella fior di latte, jambon à la truffe, huile à la truffe",
        price: "20,00 €",
        allergens: true,
      },
      {
        name: "Fagottino del Vastese",
        description: "Pesto à la génovese, burrata, salame diavolo",
        price: "22,00 €",
        allergens: true,
      },
    ],
  },
  {
    id: "accompagnements",
    title: "Accompagnements",
    items: [
      { name: "Frites classiques", price: "3,50 €" },
      {
        name: "Frites, huile de truffe et parmesan",
        price: "4,50 €",
        allergens: true,
      },
      { name: "Salade composée", price: "7,00 €" },
    ],
  },
  {
    id: "menu-enfant",
    title: "Menu enfant",
    items: [
      {
        name: "Bambino (jusqu'à 10 ans)",
        description:
          "Boisson au choix (coca cola, limonade, jus de pomme, jus d'orange ou sirop) + plat",
        price: "12,50 €",
        allergens: true,
      },
    ],
  },
  {
    id: "desserts",
    title: "Nos desserts",
    items: [
      {
        name: "Pistacchio",
        description:
          "Mousse à la pistache, mousse chocolat noir, crémeux chocolat noir, crémeux pistache, biscuit...",
        price: "10,00 €",
      },
      {
        name: "Mango",
        description:
          "Mousse à la mangue, crémeux à la mangue citronné, compoté de mangue, biscuit moelleux aux amandes...",
        price: "11,00 €",
        allergens: true,
      },
      {
        name: "Limone",
        description:
          "Mousse au citron, crémeux au citron, compoté au citron, biscuit moelleux aux amandes...",
        price: "11,00 €",
        allergens: true,
      },
      {
        name: "Affogato coco",
        description: "Demi noix de coco glacée, amaretto, café",
        price: "10,00 €",
        allergens: true,
      },
      {
        name: "Tiramisu della mamma",
        description: "Tiramisu au café",
        price: "8,00 €",
        allergens: true,
      },
      {
        name: "Panna cotta",
        description:
          "Panna cotta vanille et son coulis au choix : abricot, fruits rouges ou caramel",
        price: "7,00 €",
        allergens: true,
      },
      {
        name: "Affogato",
        description: "Glace vanille, liqueur d'amaretto, café",
        price: "8,00 €",
        allergens: true,
      },
      {
        name: "Pizza Nutella",
        description:
          "À commander en début de repas — coulée de Nutella et nuage de chantilly",
        price: "10,00 €",
        allergens: true,
      },
      {
        name: "Glace GROM 120 ml",
        description:
          "Glace italienne à base d'ingrédients naturels, sans colorants ni arômes artificiels",
        price: "7,00 €",
      },
      {
        name: "Gelato artigianale",
        description:
          "Vanille de Madagascar, chocolat, café, caramel beurre salé, vanille bonbon chocolat...",
        variants: [
          { label: "1 boule", price: "3,00 €" },
          { label: "2 boules", price: "6,00 €" },
          { label: "3 boules", price: "9,00 €" },
        ],
      },
      {
        name: "Café gourmand",
        description: "Café accompagné de ses mignardises du moment",
        variants: [
          { label: "Café", price: "9,00 €" },
          { label: "Décaféiné", price: "9,50 €" },
          { label: "Thé", price: "11,00 €" },
          { label: "Allongé", price: "9,10 €" },
          { label: "Double expresso", price: "11,00 €" },
        ],
        allergens: true,
      },
    ],
  },
  {
    id: "shooters",
    title: "Planche de shooters",
    items: [
      {
        name: "B-52",
        description: "Kahlua, Bailey's, Cointreau",
        variants: [
          { label: "1 shot", price: "3,50 €" },
          { label: "6 shooters", price: "18,00 €" },
        ],
      },
      {
        name: "Le Pink Black",
        description: "Vodka, purée de framboise, vodka black",
        variants: [
          { label: "1 shot", price: "3,50 €" },
          { label: "6 shooters", price: "18,00 €" },
        ],
      },
      {
        name: "Madeleine",
        description: "Cointreau, amaretto, ananas",
        variants: [
          { label: "1 shot", price: "3,50 €" },
          { label: "6 shooters", price: "18,00 €" },
        ],
      },
      {
        name: "Orgasme",
        description: "Get 27, tequila, Bailey's",
        variants: [
          { label: "1 shot", price: "3,50 €" },
          { label: "6 shooters", price: "18,00 €" },
        ],
      },
    ],
  },
];

export const drinksCategories = [
  "Cocktails della mamma",
  "Apéritifs",
  "Verre de vin",
  "Bières",
  "Softs",
  "Eaux",
  "Vins rouges",
  "Vins blancs",
  "Vins rosés",
  "Vins effervescents",
  "Champagnes",
  "Boissons chaudes",
  "Digestifs et spiritueux",
];
