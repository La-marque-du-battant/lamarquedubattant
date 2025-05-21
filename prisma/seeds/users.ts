import { hashSync } from "bcrypt";
import { Role } from "@/generated/prisma";
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

export async function seedUsers() {
  const users = [
    {
      lastname: "Doe",
      firstname: "John",
      avatar: null,
      email: "john.doe@example.com",
      password: hashSync("Password@123", 10),
      birthday: new Date("1985-05-15"),
      role: Role.CLIENT,
      provider: null,
      provider_id: null,
    },
    {
      lastname: "Admin",
      firstname: "Super",
      avatar: null,
      email: "super.admin@example.com",
      password: hashSync("Superpassword@123", 10),
      birthday: new Date("1990-01-10"),
      role: Role.SUPER_ADMIN,
      provider: null,
      provider_id: null,
    },
    {
      lastname: "Smith",
      firstname: "Anna",
      avatar: null,
      email: "anna.smith@example.com",
      password: hashSync("Adminpassword@123", 10),
      birthday: new Date("1995-07-20"),
      role: Role.ADMIN,
      provider: null,
      provider_id: null,
    },
    {
      lastname: "User",
      firstname: "Regular",
      avatar: null,
      email: "regular.user@example.com",
      password: hashSync("Userpassword@123", 10),
      birthday: new Date("2000-11-05"),
      role: Role.USER,
      provider: null,
      provider_id: null,
    },
  ];

  for (const user of users) {
    await prisma.user.create({ data: user });
  }
  console.log("Insertion des utilisateurs...");
}
