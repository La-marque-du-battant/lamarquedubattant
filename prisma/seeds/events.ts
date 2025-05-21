import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

export async function seedEvents() {
  const events = [
    {
      name: "Festival de musique d’Abidjan",
      description:
        "Un grand festival de musique avec des artistes internationaux et locaux.",
      image: "/fakeimg/event1.jpg",
      price: 25.0,
      country: "Côte d'Ivoire",
      address: "Palais des Congrès, Abidjan, Côte d'Ivoire",
      start_date: new Date("2025-01-01"), // Mois = 4 pour mai
      end_date: new Date("2025-01-01"),
    },
    {
      name: "Marché de Noël à Dakar",
      description:
        "Le marché de Noël annuel de Dakar avec des artisans locaux et des produits traditionnels.",
      image: "/fakeimg/event2.jpg",
      price: 5.0,
      country: "Sénégal",
      address: "Place de l’Indépendance, Dakar, Sénégal",
      start_date: new Date("2025-01-01"),
      end_date: new Date("2025-01-01"),
    },
    {
      name: "Festival du Film de Lomé",
      description:
        "Festival international du film à Lomé, mettant en avant des productions africaines.",
      image: "/fakeimg/event3.jpg",
      price: 15.0,
      country: "Togo",
      address: "Centre Culturel Français, Lomé, Togo",
      start_date: new Date("2025-01-01"),
      end_date: new Date("2025-01-01"),
    },
    {
      name: "Salon de l’Entrepreneuriat de Ouagadougou",
      description:
        "Un salon dédié aux jeunes entrepreneurs et aux opportunités d’affaires.",
      image: "/fakeimg/event4.jpg",
      price: 20.0,
      country: "Burkina Faso",
      address: "Hotel Azalai, Ouagadougou, Burkina Faso",
      start_date: new Date("2025-01-01"),
      end_date: new Date("2025-01-01"),
    },
    {
      name: "Carnaval de Banjul",
      description:
        "Le plus grand carnaval de la Gambie, une célébration de la culture locale.",
      image: "/fakeimg/event5.jpg",
      price: 10.0,
      country: "Gambie",
      address: "Plage de Banjul, Banjul, Gambie",
      start_date: new Date("2025-01-01"),
      end_date: new Date("2025-01-01"),
    },
    {
      name: "Festival de Danse de Conakry",
      description:
        "Un festival annuel de danse qui réunit des danseurs du monde entier.",
      image: "/fakeimg/event6.jpg",
      price: 12.0,
      country: "Guinée",
      address: "Centre Culturel Franco-Guinéen, Conakry, Guinée",
      start_date: new Date("2025-01-01"),
      end_date: new Date("2025-01-01"),
    },
  ];

  for (const event of events) {
    await prisma.event.create({ data: event });
  }
}
