import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

export async function seedCollections() {
  const collections = [
    {
      name: "Collection Hiver 2025",
      image: "/fakeimg/collection.jpg",
      description:
        "Découvrez les tendances incontournables de l'hiver 2025, avec des pièces chaudes et stylées.",
      start_date: new Date("2025-01-01"),
      end_date: new Date("2025-03-31"),
    },
    {
      name: "Collection Printemps 2025",
      image: "/fakeimg/th10.jpg",
      description:
        "La collection Printemps 2025 allie légèreté et fraîcheur avec des couleurs vives et des tissus naturels.",
      start_date: new Date("2025-04-01"),
      end_date: new Date("2025-06-30"),
    },
    {
      name: "Collection Été 2025",
      image: "/fakeimg/th5.jpg",
      description:
        "L'été 2025 se prépare avec des vêtements légers, confortables et adaptés à la chaleur estivale.",
      start_date: new Date("2025-07-01"),
      end_date: new Date("2025-09-30"),
    },
    {
      name: "Collection Automne 2025",
      image: "/fakeimg/th2.jpg",
      description:
        "Explorez des tenues élégantes pour l'automne 2025, avec des couleurs chaudes et des textures douces.",
      start_date: new Date("2025-10-01"),
      end_date: new Date("2025-12-31"),
    },
    {
      name: "Collection intemporelle",
      image: null,
      description:
        "Une collection intemporelle qui reste pertinente toute l'année.",
      start_date: new Date("2024-01-01"),
      end_date: null,
    },
  ];

  for (const collection of collections) {
    await prisma.collection.create({ data: collection });
  }
  console.log("Insertion des collections...");
}
