import {
  LayoutDashboard,
  Shapes,
  ShoppingBag,
  Tag,
  UsersRound,
} from "lucide-react";

export const navLinks = [
  {
    url: "/dashboard",
    icon: <LayoutDashboard />,
    label: "Dashboard",
  },
  {
    url: "/collections",
    icon: <Shapes />,
    label: "Collections",
  },
  {
    url: "/articles",
    icon: <Tag />,
    label: "Produits",
  },
  {
    url: "/orders",
    icon: <ShoppingBag />,
    label: "Commandes",
  },
  {
    url: "/customers",
    icon: <UsersRound />,
    label: "Clients",
  },
  {
    url: "/events",
    icon: <UsersRound />,
    label: "Evènements",
  },
  {
    url: "/users",
    icon: <UsersRound />,
    label: "Utilisateurs",
  },
];
