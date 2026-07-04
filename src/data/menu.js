export const categories = [
  {
    id: 'coffee',
    label: 'Coffee',
    intro: 'Specialty Coffee, sorgfältig gebrüht. Auch mit Hafermilch.',
    items: [
      { name: 'Espresso / Doppelt', desc: 'Kurz, kräftig, ehrlich — solo oder doppelt.' },
      { name: 'Americano', desc: 'Espresso, verlängert mit heißem Wasser.' },
      { name: 'Cappuccino', desc: 'Der Klassiker mit samtigem Milchschaum.' },
      { name: 'Oat Macc', desc: 'Macchiato auf Haferbasis — klein, aber oho.' },
      { name: 'Flat White', desc: 'Doppelter Espresso, seidige Mikroschaum-Milch.' },
      { name: 'Iced Latte', desc: 'Espresso auf Eis, kalte Milch, easy vibes.' },
      { name: 'Iced Coco', desc: 'Espresso trifft Kokos — unser Sommer-Liebling auf Eis.' },
    ],
  },
  {
    id: 'drinks',
    label: 'Drinks',
    intro: 'Matcha-Rituale & mehr — heiß oder iced, immer mit Liebe angerührt.',
    items: [
      { name: 'Matcha Latte', desc: 'Ceremonial Matcha, cremig aufgeschäumt — heiß oder iced.', veg: true },
      { name: 'Strawberry Matcha', desc: 'Matcha auf Eis mit Erdbeerpüree — pretty & lecker.', veg: true },
      { name: 'Chai Latte', desc: 'Würzig, warm, wie eine Umarmung in der Tasse.', veg: true },
      { name: 'Heiße Schokolade', desc: 'Dunkle Schokolade, langsam geschmolzen.', veg: true },
      { name: 'Hausgemachte Limo', desc: 'Saisonal & spritzig — frag nach der aktuellen Sorte.', veg: true },
      { name: 'Frischer Saft', desc: 'Frisch gepresst, je nach Saison.', veg: true },
    ],
  },
  {
    id: 'food',
    label: 'Food',
    intro: 'Sauerteig, saisonales Obst & gute Zutaten — unser kleines Deli.',
    items: [
      {
        name: 'Salat KOOA',
        price: '13.9',
        desc: 'Salatmischung, Walnüsse, Birnen, Cranberrys, Feta, Orangenbutter, Haselnüsse.',
        veg: true,
      },
      {
        name: 'Brot Heimelc',
        price: '13.9',
        desc: 'Sauerteigbrot, Butter, Salatmischung, Wedatomat, Burrata, Tomate, Avocado.',
        veg: true,
      },
      {
        name: 'Grilled Cheese',
        price: '12.9',
        desc: 'Sauerteigbrot, Käse, Butter, Salat, Tomate.',
        veg: true,
      },
      {
        name: 'Choco Banana',
        price: '7.9',
        desc: 'Sauerteigbrot, Butter, Nutella, Banane, Zimt, Walnüsse.',
        veg: true,
      },
      {
        name: 'Waffel KOOA',
        price: '9.9',
        desc: 'Kokosmilch-Waffel, versch. Früchte, Erdbeerpüree, Sahne, Puderzucker, Walnüsse.',
        veg: true,
      },
      {
        name: 'Joe',
        price: '10.9',
        desc: 'Joghurt (alternativ Kokosjoghurt), Walnüsse, Granola, Honig, saisonales Obst.',
        veg: true,
      },
      {
        name: 'Fonde',
        price: '10.9',
        desc: 'Cashews, Granola, Beeren, rote Paprika, dazu Joghurt.',
        veg: true,
      },
    ],
  },
  {
    id: 'specials',
    label: 'Specials',
    intro: 'Immer was Neues auf der Tafel.',
    items: [],
  },
]
