export type Wine = {
  name: string;
  producer?: string;
  description?: string;
  price: string;
};

export type WineCategory = {
  id: string;
  title: string;
  wines: Wine[];
};

export const wineCategories: WineCategory[] = [
  {
    id: "rouges-italie",
    title: "Rouges — Vins d'Italie",
    wines: [
      {
        name: "Piluna Primitivo 2023",
        producer: "Castello Monaci",
        description: "Fruité et corsé",
        price: "30,00 €",
      },
      {
        name: "Chianti Superiore San Lorenzo 2023",
        producer: "Poderi Melini",
        description: "Structuré, tanins souples et fruits rouges",
        price: "27,00 €",
      },
      {
        name: "Coribante Salendo 2022",
        producer: "Castello Monaci",
        description: "Structuré, nez frais et élégant de fruits rouges",
        price: "30,00 €",
      },
      {
        name: "Montepulciano d'Abruzzo 2022",
        producer: "Cantina Zaccagnini",
        description: "Épicé, note de fruits rouges vanillés",
        price: "30,00 €",
      },
      {
        name: "Barolo 2019",
        producer: "Andrea Oberto",
        description:
          "Vin complexe, tanins fins, corps équilibré, finale longue et persistante",
        price: "74,00 €",
      },
      {
        name: "Tignanello 2020",
        producer: "Antinori",
        description:
          "Souple, enveloppant, tanins fins et exquis, belle fraîcheur",
        price: "240,00 €",
      },
      {
        name: "Tignanello 2018",
        producer: "Antinori",
        description: "Arômes boisés et épicés, goût doux, ample et élégant",
        price: "250,00 €",
      },
    ],
  },
  {
    id: "rouges-bordeaux",
    title: "Rouges — Bordeaux",
    wines: [
      {
        name: "Castillon Côtes de Bordeaux L'Aurage 2021",
        producer: "Caroline & Loulou Mitjavile",
        description: "Note de mûre, cerise et cassis, riche et chaleureux",
        price: "69,00 €",
      },
      {
        name: "Sainte Foy Côtes de Bordeaux Château Martet 2020",
        producer: "Nina Mitjavile",
        description: "Équilibré, charpenté et savoureux, prédominance fruit",
        price: "69,00 €",
      },
      {
        name: "Côtes de Bordeaux Domaine de Cambes 2016",
        producer: "François et Emilie Mitjavile",
        description: "Puissant, arômes d'herbes et épices",
        price: "97,00 €",
      },
      {
        name: "Côtes de Bourg Roc de Cambes 2020",
        producer: "Famille Mitjavile",
        description: "Équilibre entre finesse et complexité, puissance et gourmandise",
        price: "149,00 €",
      },
      {
        name: "Saint-Émilion Grand Cru \"Tertre Roteboeuf\" 2017",
        producer: "François et Emilie Mitjavile",
        description: "Puissant, arômes de fruits noirs, tabac et bois de chêne",
        price: "340,00 €",
      },
      {
        name: "Château Lagrange 2002",
        description: "3ᵉ Grand Cru Classé de l'appellation Saint-Julien",
        price: "100,00 €",
      },
      {
        name: "Château des Tourelles 2018",
        producer: "Lalande-de-Pomerol, François Janoueix",
        description: "Tanins souples, arômes complexes de fruits mûrs et sous-bois",
        price: "72,00 €",
      },
      {
        name: "Château Haut-Marbuzet 2004",
        description: "Cru Bourgeois, Saint-Estèphe, belle maturité, arômes complexes",
        price: "79,00 €",
      },
      {
        name: "Château Guillot 2005",
        description: "Pomerol, arômes de prunelle, framboise et mûre",
        price: "70,00 €",
      },
      {
        name: "Château Labégorce Zédé 2002",
        producer: "Margaux, Luc Thienpont",
        description: "Robe grenat profond, nez de fruits noirs et sous-bois",
        price: "59,00 €",
      },
      {
        name: "Château Duthil 2001",
        description: "Haut-Médoc, Cru Bourgeois, Château Giscours",
        price: "59,00 €",
      },
      {
        name: "Lynch-Bages 2001",
        description: "Pauillac, 5ᵉ Grand Cru Classé, fruits noirs, cèdre",
        price: "220,00 €",
      },
      {
        name: "Malartic-Lagravière 2009",
        description: "Pessac-Léognan, Grand Cru Classé, fruits mûrs, tabac et cuir",
        price: "150,00 €",
      },
    ],
  },
  {
    id: "rouges-bourgogne",
    title: "Rouges — Bourgogne",
    wines: [
      {
        name: "Bourgogne Pinot Noir 2017",
        producer: "Domaine Jean Grivot",
        description: "Fruité et doux, notes de violette",
        price: "45,00 €",
      },
      {
        name: "Bourgogne \"Charmes de Daix\" 2022",
        producer: "Domaine Thierry Mortet",
        description: "Cerise noire, fumé délicat, tanins soyeux",
        price: "49,00 €",
      },
      {
        name: "Bourgogne Côte Chalonnaise \"La Fortune\" 2022",
        producer: "Domaine de Villaine",
        description: "Fruits rouges, doux et généreux",
        price: "53,00 €",
      },
      {
        name: "Hautes-Côtes de Beaune \"La Couleuvaire\" 2020",
        producer: "Pierre Boisson",
        description: "Fruits rouges, gourmand et complexe",
        price: "50,00 €",
      },
      {
        name: "Hautes-Côtes de Beaune Vieilles Vignes 2023",
        producer: "Domaine Sébastien Magnien",
        description: "Robe rubis, fruits rouges, framboise, bouche vive",
        price: "45,00 €",
      },
      {
        name: "Pommard \"Les Perrières\" 2022",
        producer: "Domaine Sébastien Magnien",
        description: "Tanique et long en bouche, cerise et épices",
        price: "79,00 €",
      },
      {
        name: "Monthélie 2020",
        producer: "Jean-Claude Ramonet",
        description: "Cerise, framboise, pivoine et légères notes boisées",
        price: "155,00 €",
      },
      {
        name: "Gevrey-Chambertin Vieilles Vignes 2019",
        producer: "Domaine Humbert Frères",
        description: "Fruits noirs, notes boisées",
        price: "90,00 €",
      },
      {
        name: "Gevrey-Chambertin Vieilles Vignes 2022",
        producer: "Domaine Thierry Mortet",
        description: "Fruits rouges (framboise, fraise) et noirs",
        price: "90,00 €",
      },
      {
        name: "Chambolle-Musigny 2017",
        producer: "Domaine Jean Grivot",
        description: "Fruits rouges et herbes sauvages, tanins fins",
        price: "119,00 €",
      },
      {
        name: "Chambolle-Musigny 2017",
        producer: "Domaine G. Roumier",
        description: "Délicat, belle longueur, arômes floraux et sous-bois",
        price: "350,00 €",
      },
      {
        name: "Nuits-Saint-Georges 1er Cru \"Les Bousselots\" 2018",
        producer: "Henri et Gilles Remoriquet",
        description: "Puissant et tanique, bouquet complexe",
        price: "120,00 €",
      },
      {
        name: "Nuits-Saint-Georges 1er Cru \"Aux Boudots\" 2017",
        producer: "Domaine Jean Grivot",
        description: "Robe grenat profond, fruits rouges et noirs, épices douces",
        price: "290,00 €",
      },
      {
        name: "Nuits-Saint-Georges 1er Cru \"Roncière\" 2017",
        producer: "Domaine Jean Grivot",
        description: "Robe grenat profonde, fruits noirs, épices et réglisse",
        price: "220,00 €",
      },
      {
        name: "Vosne-Romanée 2017",
        producer: "Domaine Jean Grivot",
        description: "Fruits rouges, fine acidité, touche terreuse",
        price: "99,00 €",
      },
      {
        name: "Vosne-Romanée 1er Cru \"Les Rouges\" 2017",
        producer: "Domaine Jean Grivot",
        description: "Robe grenat brillante, fruits rouges mûrs, épices et sous-bois",
        price: "250,00 €",
      },
      {
        name: "Clos Vougeot Grand Cru 2017",
        producer: "Domaine Jean Grivot",
        description: "Robe grenat intense, fruits noirs, épices douces",
        price: "390,00 €",
      },
    ],
  },
  {
    id: "rouges-rhone",
    title: "Rouges — Vallée du Rhône",
    wines: [
      {
        name: "Côtes du Rhône \"Cuvée Sommelongue\" 2024",
        producer: "Domaine André Brunel",
        description: "Gourmand et soyeux, fruits rouges, épices",
        price: "27,00 €",
      },
      {
        name: "Lirac 2023",
        producer: "Clos du Mont-Olivet",
        description: "Puissant, généreux, fruits noirs et réglisse",
        price: "34,00 €",
      },
      {
        name: "Saint-Joseph 2023",
        producer: "Jean-Michel Gerin",
        description: "Gourmand, frais et équilibré, épices et poivre",
        price: "49,00 €",
      },
      {
        name: "Crozes-Hermitage 2023",
        producer: "Domaine Laurent Combier",
        description: "Fruits noirs, rond et délicat",
        price: "36,00 €",
      },
      {
        name: "Crozes-Hermitage \"Clos des Grives\" 2022",
        producer: "Laurent Combier",
        description: "Riche et floral, cerises noires, finale longue",
        price: "74,00 €",
      },
      {
        name: "Crozes-Hermitage \"Cuvée 1920\" 2021",
        producer: "Domaine Gilles Robin",
        description: "Fruits rouges et noirs mêlés, élégant et fin",
        price: "80,00 €",
      },
      {
        name: "Côte-Rôtie \"Champin Le Seigneur\" 2022",
        producer: "Jean-Michel Gerin",
        description: "Complexe, puissant, fruits noirs mûrs et épices",
        price: "87,00 €",
      },
      {
        name: "Châteauneuf-du-Pape 2022",
        producer: "Le Clos du Caillou",
        description: "Ample et équilibré, fruits noirs et réglisse",
        price: "69,00 €",
      },
      {
        name: "Châteauneuf-du-Pape Vieilles Vignes 2020",
        producer: "Domaine Saint-Patrice",
        description: "Puissant, fruits noirs et épices",
        price: "74,00 €",
      },
      {
        name: "Châteauneuf-du-Pape 2022",
        producer: "Clos du Mont-Olivet",
        description: "Structuré, cerises noires, notes de rose",
        price: "79,00 €",
      },
      {
        name: "Châteauneuf-du-Pape \"La Cuvée du Papet\" 2023",
        producer: "Clos du Mont-Olivet",
        price: "120,00 €",
      },
    ],
  },
  {
    id: "rouges-beaujolais",
    title: "Rouges — Beaujolais",
    wines: [
      {
        name: "Morgon \"Château Gaillard\" 2018",
        producer: "Dominique Morel",
        description: "Charnu, structuré, tanins ronds et fins",
        price: "28,00 €",
      },
    ],
  },
  {
    id: "rouges-vdf",
    title: "Rouges — Vin de France",
    wines: [
      {
        name: "Fusion Rouge 2022",
        producer: "Divineo",
        description: "Vin à quatre mains, vinifié en Languedoc, élevé en Bourgogne",
        price: "42,00 €",
      },
      {
        name: "Syrah de Robiac 2021",
        producer: "Divineo",
        description: "Vin à quatre mains, vinifié en Languedoc, élevé en Bourgogne",
        price: "59,00 €",
      },
    ],
  },
  {
    id: "blancs-bourgogne",
    title: "Blancs — Bourgogne",
    wines: [
      {
        name: "Bouzeron 2022",
        producer: "Domaine de Villaine",
        description: "Sec mais tendre, vivacité désaltérante",
        price: "44,00 €",
      },
      {
        name: "Mâcon-Vinzelles \"Clos du Grand Père\" 2022",
        producer: "La Soufrandière, mis en bouteille par Bret Brothers",
        description: "Notes de fleurs blanches, fin et rond",
        price: "45,00 €",
      },
      {
        name: "Rully Blanc 1er Cru \"Clos St Jacques\" 2022",
        producer: "Domaine de la Folie",
        description: "Notes de fleurs blanches et d'agrumes",
        price: "56,00 €",
      },
      {
        name: "Bourgogne 2020",
        producer: "Domaine Pierre Boisson",
        description: "Agrumes et fleurs blanches, arôme de torréfaction",
        price: "53,00 €",
      },
      {
        name: "Hautes-Côtes de Beaune 2023",
        producer: "Domaine Sébastien Magnien",
        description: "Sec, agrumes et légères notes boisées",
        price: "45,00 €",
      },
      {
        name: "Murgey de Limozin 2020",
        producer: "Domaine Pierre Boisson",
        description: "Agrumes et torréfaction, onctueux",
        price: "84,00 €",
      },
      {
        name: "Chassagne-Montrachet 1er Cru \"Morgeot\" 2022",
        producer: "Domaine Thomas Morey",
        description: "Fleurs et pêche blanche, équilibré",
        price: "94,00 €",
      },
      {
        name: "Meursault 2020",
        producer: "Domaine Anne Boisson",
        description: "Fruits jaunes et agrumes, équilibré",
        price: "120,00 €",
      },
      {
        name: "Meursault \"Les Perchots\" 2020",
        producer: "Domaine Pierre Boisson",
        description: "Miel et tilleul, moelleux",
        price: "130,00 €",
      },
      {
        name: "Pernand-Vergelesses \"Les Belles Filles\" 2020",
        producer: "Jean-Claude Ramonet",
        description: "Robe d'or et reflets verts, notes florales",
        price: "210,00 €",
      },
    ],
  },
  {
    id: "blancs-moelleux",
    title: "Blancs — Moelleux",
    wines: [
      {
        name: "Moscato d'Asti 2023",
        producer: "Ca' Bianca — Vins d'Italie",
        description: "Léger, pétillant, gourmand et frais",
        price: "29,00 €",
      },
    ],
  },
  {
    id: "roses",
    title: "Rosés",
    wines: [
      {
        name: "Côtes de Provence 2024",
        producer: "Ultimate Provence",
        description: "Épicé, arômes de citron et fruits rouges",
        price: "29,00 €",
      },
      {
        name: "Lirac \"Farel\" 2024",
        producer: "Clos du Mont-Olivet",
        price: "34,00 €",
      },
      {
        name: "Villa Mura Bardolino",
        description: "Raffiné et subtil",
        price: "24,00 €",
      },
      {
        name: "Domaine de la Forêt",
        description: "Méditerranée",
        price: "24,00 €",
      },
      {
        name: "L'Instant Rosé",
        producer: "Domaine André Brunel",
        description: "Frais et élégant, fraise, framboise et fruits exotiques",
        price: "25,00 €",
      },
    ],
  },
  {
    id: "effervescents",
    title: "Effervescents",
    wines: [
      {
        name: "Prosecco Brut",
        producer: "Sartori — Vins d'Italie",
        price: "26,00 €",
      },
      {
        name: "Lambrusco Rosso Amabile",
        producer: "Cavicchioli — Vins d'Italie",
        price: "26,00 €",
      },
    ],
  },
  {
    id: "champagnes",
    title: "Champagnes",
    wines: [
      { name: "Champagne Alain Navarre \"Prestige\"", price: "57,00 €" },
      {
        name: "Champagne Brut \"Carte d'Or\"",
        producer: "Drappier",
        price: "72,00 €",
      },
      {
        name: "Champagne Brut \"Cuis 1er Cru\" — Blanc de Blancs",
        producer: "Pierre Gimonet & Fils",
        price: "72,00 €",
      },
      {
        name: "Jacquesson 747",
        description: "Dégorgement juin 2024, dosage 1,5 g/l",
        price: "117,00 €",
      },
    ],
  },
];
