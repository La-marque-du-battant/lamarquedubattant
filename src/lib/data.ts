// Génération de données factices pour CollectionType
const collectionsData: CollectionType[] = [
  {
    id: "1",
    name: "Collection Hiver 2025",
    description:
      "Découvrez les tendances incontournables de l'hiver 2025, avec des pièces chaudes et stylées.",
    image: "fakeimg/collection.jpg",
    products: [],
  },
  {
    id: "2",
    name: "Collection Printemps 2025",
    description:
      "La collection Printemps 2025 allie légèreté et fraîcheur avec des couleurs vives et des tissus naturels.",
    image: "fakeimg/th10.jpg",
    products: [],
  },
  {
    id: "3",
    name: "Collection Été 2025",
    description:
      "L'été 2025 se prépare avec des vêtements légers, confortables et adaptés à la chaleur estivale.",
    image: "fakeimg/th5.jpg",
    products: [],
  },
  {
    id: "4",
    name: "Collection Automne 2025",
    description:
      "Explorez des tenues élégantes pour l'automne 2025, avec des couleurs chaudes et des textures douces.",
    image: "fakeimg/th2.jpg",
    products: [],
  },
];

// Génération de données factices pour CategoryType
const categoriesData: CategoryType[] = [
  {
    id: "1",
    name: "Homme",
    description:
      "Toutes les catégories de vêtements et accessoires pour hommes, allant des tenues décontractées aux vêtements formels.",
  },

  {
    id: "2",
    name: "Femme",
    description:
      "Les collections de mode pour femmes, allant des robes élégantes aux vêtements plus décontractés, pour chaque occasion.",
  },
  {
    id: "3",
    name: "Accessoires",
    description:
      "Une variété d'accessoires de mode, incluant tableaux de citations, mugs personnalisé et casquettes.",
  },
  {
    id: "4",
    name: "Tableaux",
    description:
      "Ajoutez une touche artistique à votre intérieur avec nos magnifiques tableaux.",
  },
  {
    id: "5",
    name: "Mugs",
    description: "Des mugs uniques pour accompagner vos moments café ou thé.",
  },
  {
    id: "6",
    name: "Casquettes",
    description:
      "Protégez-vous du soleil avec style grâce à nos casquettes personnalisées.",
  },
];

// Génération de données factices pour ProductType
const productsData: ProductType[] = [
  {
    id: "1",
    name: "T-shirt Homme Classique",
    description:
      "Un t-shirt simple et élégant, parfait pour un look décontracté.",
    main_image: "fakeimg/th1.jpg",
    additionnal_images: ["fakeimg/th2.jpg", "fakeimg/th11.jpg"],
    category_id: categoriesData[0].id,
    collections: [collectionsData[0]],
    size: ["L", "XL"],
    color: "Noir",
    price: 1500,
    quantity: 100,
    status: "1",
    created_at: "2025-12-01T10:00:00.000Z",
    updated_at: "2025-12-01T10:00:00.000Z",
  },
  {
    id: "2",
    name: "Casquette Homme",
    description: "Casquette élégante pour un style décontracté.",
    main_image: "fakeimg/ca1.jpg",
    additionnal_images: ["images/ca2.jpg", "images/ca3.jpg", "images/ca4.jpg"],
    category_id: categoriesData[0].id,
    collections: [collectionsData[0], collectionsData[1]],
    size: ["unique"],
    color: "Noir",
    price: 2200,
    quantity: 50,
    status: "0",
    created_at: "2025-12-01T10:00:00.000Z",
    updated_at: "2025-12-01T10:00:00.000Z",
  },
  {
    id: "3",
    name: "Pantalon Homme Slim",
    description:
      "Un pantalon slim, confortable et stylé, idéal pour les sorties.",
    main_image: "fakeimg/p1.jpg",
    additionnal_images: ["fakeimg/p2.jpg", "fakeimg/p3.jpg"],
    category_id: categoriesData[0].id,
    status: "1",
    collections: [collectionsData[1]],
    size: ["M", "L"],
    color: "Noir",
    price: 2900,
    quantity: 70,
    created_at: "2025-12-01T10:00:00.000Z",
    updated_at: "2025-12-01T10:00:00.000Z",
  },
  {
    id: "4",
    name: "Chemise Homme",
    description:
      "Chemise élégante à carreaux, idéale pour les occasions décontractées.",
    main_image: "fakeimg/th6.jpg",
    additionnal_images: ["fakeimg/th7.jpg", "fakeimg/th8.jpg"],
    category_id: categoriesData[0].id,
    status: "1",
    collections: [],
    size: ["L", "XL"],
    color: "Beige",
    price: 1900,
    quantity: 90,
    created_at: "2025-12-01T10:00:00.000Z",
    updated_at: "2025-12-01T10:00:00.000Z",
  },
  {
    id: "5",
    name: "T-shirt Femme Col V",
    description: "T-shirt à col V, léger et confortable, idéal pour l'été.",
    main_image: "fakeimg/th3.jpg",
    additionnal_images: ["fakeimg/th4.jpg", "fakeimg/th5.jpg"],
    category_id: categoriesData[1].id,
    status: "1",
    collections: [],
    size: ["S", "M"],
    color: "Blanc",
    price: 1800,
    quantity: 80,
    created_at: "2025-12-01T10:00:00.000Z",
    updated_at: "2025-12-01T10:00:00.000Z",
  },
  {
    id: "6",
    name: "Robe Femme Été",
    description: "Robe légère et élégante pour les journées chaudes.",
    main_image: "fakeimg/th9.jpg",
    additionnal_images: ["fakeimg/th10.jpg", "fakeimg/th11.jpg"],
    category_id: categoriesData[1].id,
    status: "1",
    collections: [collectionsData[1]],
    size: ["S", "M", "L"],
    color: "Blanc",
    price: 2500,
    quantity: 60,
    created_at: "2025-12-01T10:00:00.000Z",
    updated_at: "2025-12-01T10:00:00.000Z",
  },
  {
    id: "7",
    name: "Jeans Femme Taille Haute",
    description: "Jeans slim taille haute, parfaits pour un look élégant.",
    main_image: "fakeimg/cu1.jpg",
    additionnal_images: ["fakeimg/cu2.jpg", "fakeimg/cu3.jpg"],
    category_id: categoriesData[1].id,
    status: "0",
    collections: [],
    size: ["M", "L"],
    color: "Belge",
    price: 3400,
    quantity: 40,
    created_at: "2025-12-01T10:00:00.000Z",
    updated_at: "2025-12-01T10:00:00.000Z",
  },
  {
    id: "8",
    name: "Culotte Femme en Coton",
    description: "Culotte en coton, confortable pour un usage quotidien.",
    main_image: "fakeimg/po1.jpg",
    additionnal_images: ["fakeimg/po2.jpg", "fakeimg/po3.jpg"],
    category_id: categoriesData[1].id,
    status: "1",
    collections: [collectionsData[2]],
    size: ["M", "L"],
    color: "Belge",
    price: 9000,
    quantity: 120,
    created_at: "2025-12-01T10:00:00.000Z",
    updated_at: "2025-12-01T10:00:00.000Z",
  },
  {
    id: "9",
    name: "Tableau Citation Motivation",
    description:
      "Un tableau avec une citation inspirante pour décorer votre intérieur.",
    main_image: "fakeimg/ta1.jpg",
    additionnal_images: ["fakeimg/ta2.jpg", "fakeimg/ta3.jpg"],
    category_id: categoriesData[2].id,
    status: "1",
    collections: [],
    size: ["unique"],
    color: "Blanc",
    price: 2900,
    quantity: 30,
    created_at: "2025-12-01T10:00:00.000Z",
    updated_at: "2025-12-01T10:00:00.000Z",
  },
  {
    id: "10",
    name: "Tableau Citation Sérénité",
    description:
      "Un tableau avec une citation inspirante pour décorer votre intérieur.",
    main_image: "fakeimg/ta4.jpg",
    additionnal_images: [
      "fakeimg/ta5.jpg",
      "fakeimg/ta6.jpg",
      "fakeimg/ta6.jpg",
    ],
    category_id: categoriesData[2].id,
    status: "1",
    collections: [],
    size: ["unique"],
    color: "Blanc",
    price: 2900,
    quantity: 30,
    created_at: "2025-12-01T10:00:00.000Z",
    updated_at: "2025-12-01T10:00:00.000Z",
  },
  {
    id: "11",
    name: "Mug Personnalisé",
    description: "Mug personnalisable avec votre message ou photo.",
    main_image: "fakeimg/t1.jpg",
    additionnal_images: ["fakeimg/t2.jpg", "fakeimg/t3.jpg"],
    category_id: categoriesData[2].id,
    status: "1",
    collections: [collectionsData[3]],
    size: ["unique"],
    color: "Belge",
    price: 1200,
    quantity: 200,
    created_at: "2025-12-01T10:00:00.000Z",
    updated_at: "2025-12-01T10:00:00.000Z",
  },
  {
    id: "12",
    name: "Tasse magique Personnalisé",
    description: "Mug personnalisable avec votre message ou photo.",
    main_image: "fakeimg/t4.jpg",
    additionnal_images: ["fakeimg/t5.jpg", "fakeimg/t1.jpg"],
    category_id: categoriesData[2].id,
    status: "0",
    collections: [collectionsData[2]],
    size: ["unique"],
    color: "Belge",
    price: 1200,
    quantity: 200,
    created_at: "2025-12-01T10:00:00.000Z",
    updated_at: "2025-12-01T10:00:00.000Z",
  },
  {
    id: "13",
    name: "Bob du battant",
    description:
      "Ceinture en cuir de qualité supérieure, idéale pour compléter votre look.",
    main_image: "fakeimg/bo1.jpg",
    additionnal_images: [
      "fakeimg/bo2.jpg",
      "fakeimg/bo3.jpg",
      "fakeimg/bo4.jpg",
    ],
    category_id: categoriesData[2].id,
    status: "1",
    collections: [collectionsData[3]],
    size: ["unique"],
    color: "Noir",
    price: 1900,
    quantity: 50,
    created_at: "2025-12-01T10:00:00.000Z",
    updated_at: "2025-12-01T10:00:00.000Z",
  },
  {
    id: "14",
    name: "Autocollant avec citation",
    description: "Sac à main élégant pour femme, parfait pour vos sorties.",
    main_image: "fakeimg/a2.jpg",
    additionnal_images: ["fakeimg/a3.jpg", "fakeimg/a4.jpg", "fakeimg/a5.jpg"],
    category_id: categoriesData[2].id,
    status: "0",
    collections: [],
    size: ["unique"],
    color: "Belge",
    price: 4500,
    quantity: 30,
    created_at: "2025-12-01T10:00:00.000Z",
    updated_at: "2025-12-01T10:00:00.000Z",
  },
  {
    id: "15",
    name: "Autocollant du battant",
    description: "Sac à main élégant pour femme, parfait pour vos sorties.",
    main_image: "fakeimg/a6.jpg",
    additionnal_images: ["fakeimg/a7.jpg", "fakeimg/a8.jpg"],
    category_id: categoriesData[2].id,
    status: "1",
    collections: [],
    size: ["unique"],
    color: "Belge",
    price: 4500,
    quantity: 30,
    created_at: "2025-12-01T10:00:00.000Z",
    updated_at: "2025-12-01T10:00:00.000Z",
  },
];

// Attribution des produits aux collections
/* collections[0].products = [products[0], products[1], products[5], products[9]];
collections[1].products = [products[1], products[4], products[7]];
collections[2].products = [products[2], products[5], products[9]];
collections[3].products = [products[2], products[4], products[8], products[9]];
collections[4].products = [products[7]]; */

// Génération de données factices pour OrderColumnType
const ordersData: OrderColumnType[] = [
  {
    id: "1",
    customer: "Jean Dupont",
    products: 2,
    totalAmount: 69.98,
    createdAt: new Date().toISOString(),
  },
  {
    id: "2",
    customer: "Marie Dubois",
    products: 1,
    totalAmount: 49.99,
    createdAt: new Date().toISOString(),
  },
  {
    id: "3",
    customer: "Alice Martin",
    products: 3,
    totalAmount: 119.97,
    createdAt: new Date().toISOString(),
  },
  {
    id: "4",
    customer: "Robert Durand",
    products: 2,
    totalAmount: 139.98,
    createdAt: new Date().toISOString(),
  },
  {
    id: "5",
    customer: "Charles Petit",
    products: 4,
    totalAmount: 189.96,
    createdAt: new Date().toISOString(),
  },
];

// Génération de données factices pour OrderItemType
const orderItemsData: OrderItemType[] = [
  {
    product: productsData[0],
    color: "blanc",
    size: "M",
    quantity: 1,
  },
  {
    product: productsData[1],
    color: "bleu",
    size: "L",
    quantity: 1,
  },
  {
    product: productsData[2],
    color: "noir",
    size: "M",
    quantity: 1,
  },
  {
    product: productsData[3],
    color: "rouge",
    size: "S",
    quantity: 1,
  },
  {
    product: productsData[4],
    color: "gris",
    size: "XL",
    quantity: 2,
  },
  {
    product: productsData[5],
    color: "rose",
    size: "M",
    quantity: 1,
  },
  {
    product: productsData[6],
    color: "blanc",
    size: "42",
    quantity: 1,
  },
  {
    product: productsData[7],
    color: "beige",
    size: "M",
    quantity: 3,
  },
  {
    product: productsData[8],
    color: "rouge",
    size: "Taille Unique",
    quantity: 2,
  },
  {
    product: productsData[9],
    color: "gris",
    size: "M",
    quantity: 4,
  },
];

// Génération de données factices pour CustomerType
const customersData: CustomerType[] = [
  {
    clerkId: "1",
    name: "Jean Dupont",
    email: "jean.dupont@example.com",
  },
  {
    clerkId: "2",
    name: "Marie Dubois",
    email: "marie.dubois@example.com",
  },
  {
    clerkId: "3",
    name: "Alice Martin",
    email: "alice.martin@example.com",
  },
  {
    clerkId: "4",
    name: "Robert Durand",
    email: "robert.durand@example.com",
  },
  {
    clerkId: "5",
    name: "Charles Petit",
    email: "charles.petit@example.com",
  },
  {
    clerkId: "6",
    name: "Émilie Blanc",
    email: "emilie.blanc@example.com",
  },
  {
    clerkId: "7",
    name: "François Noir",
    email: "francois.noir@example.com",
  },
  {
    clerkId: "8",
    name: "Sophie Rouge",
    email: "sophie.rouge@example.com",
  },
  {
    clerkId: "9",
    name: "Lucie Vert",
    email: "lucie.vert@example.com",
  },
  {
    clerkId: "10",
    name: "Pierre Bleu",
    email: "pierre.bleu@example.com",
  },
  {
    clerkId: "11",
    name: "Pierre Bleu",
    email: "pierre.bleu@example.com",
  },
  {
    clerkId: "12",
    name: "Pierre Bleu",
    email: "pierre.bleu@example.com",
  },
];

const eventsData: EventType[] = [
  {
    id: "1",
    name: "Festival de musique d’Abidjan",
    description:
      "Un grand festival de musique avec des artistes internationaux et locaux.",
    address: "Palais des Congrès, Abidjan, Côte d'Ivoire",
    image: "fakeimg/event1.jpg",
    price: 25.0,
    country: "Côte d'Ivoire",
    startDate: new Date(),
    endDate: new Date(),
  },
  {
    id: "2",
    name: "Marché de Noël à Dakar",
    description:
      "Le marché de Noël annuel de Dakar avec des artisans locaux et des produits traditionnels.",
    address: "Place de l’Indépendance, Dakar, Sénégal",
    image: "fakeimg/event2.jpg",
    price: 5.0,
    country: "Sénégal",
    startDate: new Date(),
    endDate: new Date(),
  },
  {
    id: "3",
    name: "Festival du Film de Lomé",
    description:
      "Festival international du film à Lomé, mettant en avant des productions africaines.",
    address: "Centre Culturel Français, Lomé, Togo",
    image: "fakeimg/event3.jpg",
    price: 15.0,
    country: "Togo",
    startDate: new Date(),
    endDate: new Date(),
  },
  {
    id: "4",
    name: "Salon de l’Entrepreneuriat de Ouagadougou",
    description:
      "Un salon dédié aux jeunes entrepreneurs et aux opportunités d’affaires.",
    address: "Hotel Azalai, Ouagadougou, Burkina Faso",
    image: "fakeimg/event4.jpg",
    price: 20.0,
    country: "Burkina Faso",
    startDate: new Date(),
    endDate: new Date(),
  },
  {
    id: "5",
    name: "Carnaval de Banjul",
    description:
      "Le plus grand carnaval de la Gambie, une célébration de la culture locale.",
    address: "Plage de Banjul, Banjul, Gambie",
    image: "fakeimg/event5.jpg",
    price: 10.0,
    country: "Gambie",
    startDate: new Date(),
    endDate: new Date(),
  },
  {
    id: "6",
    name: "Festival de Danse de Conakry",
    description:
      "Un festival annuel de danse qui réunit des danseurs du monde entier.",
    address: "Centre Culturel Franco-Guinéen, Conakry, Guinée",
    image: "fakeimg/event6.jpg",
    price: 12.0,
    country: "Guinée",
    startDate: new Date(),
    endDate: new Date(),
  },
];

export {
  collectionsData,
  productsData,
  ordersData,
  orderItemsData,
  customersData,
  eventsData,
  categoriesData,
};
