"use client";
import { useAuth } from "@/context/AuthContext";
import { logout } from "@/lib/api";
import { getToken, removeToken, removeUserData } from "@/lib/auth";
import { LoaderIcon } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function LeftSideBar() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { userData } = useAuth();

  const logoutUser = async () => {
    try {
      const token = getToken();
      setLoading(true);
      const res = await logout(token);
      if (res && res.message) {
        removeToken();
        removeUserData();
        toast.success(res.message);
        router.replace("/");
      }
    } catch (error) {
      console.log("Erreur lors de la déconnexion", error);
      toast.error("Erreur lors de la déconnexion. Veuillez réessayer !");
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen left-0 top-0 bottom-0 sticky flex-col p-12 border-r border-gray-200 ">
      <div className="flex flex-col gap-16">
        <div className="text-center ">
          <h1 className="text-2xl font-bold mb-2">
            Hello, {userData ? userData.firstname : ""} !
          </h1>
          <p className="text-[14px]">
            Bienvenue ! Vous pouvez gérer les paramètres de votre compte ici.
          </p>
        </div>
        <ul className="flex flex-col gap-6">
          <Link
            href="/account"
            className={pathname === "/account" ? "font-bold text-nowrap" : ""}
          >
            <li>Favoris</li>
          </Link>
          <Link
            href="/account/orders"
            className={
              pathname.includes("/account/orders")
                ? "font-bold text-nowrap"
                : ""
            }
          >
            <li>Historique des commandes</li>
          </Link>
          <Link
            href="/account/events"
            className={
              pathname === "/account/events" ? "font-bold text-nowrap" : ""
            }
          >
            <li>Mes evènements</li>
          </Link>
          <Link
            href="/account/profil"
            className={
              pathname === "/account/profil" ? "font-bold text-nowrap" : ""
            }
          >
            <li>Profil</li>
          </Link>
        </ul>
        <div className="flex justify-center">
          <button
            onClick={() => logoutUser()}
            className="px-8 py-2 text-black border transition-transform duration-700 ease-in-out border-gray-200 hover:border-black rounded-full"
          >
            {loading ? <LoaderIcon /> : "Déconnexion"}
          </button>
        </div>
      </div>
    </div>
  );
}
