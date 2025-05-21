"use client";

import AuthLayout from "@/components/auth/AuthLayout";
import FavorisCard from "@/components/store/products/FavorisCard";
import { useEffect, useState } from "react";
import { fetchClient } from "../../../../utils/fetchClient";
import toast from "react-hot-toast";
import { FileClock } from "lucide-react";
import Link from "next/link";

export default function Favoris() {
  const [favorites, setFavorites] = useState([]);

  const getFavorites = async () => {
    try {
      const res = await fetchClient(`/favorites`);
      if (res && res.success == true) {
        setFavorites(res.data);
      }
    } catch (error) {
      console.error("Erreur lors du chargement des produits:", error);
      toast.error("Erreur interne du serveur.");
    }
  };

  // Fonction pour supprimer un favori de la liste
  const handleFavoriteRemoved = (id: string) => {
    setFavorites((prev) => prev.filter((fav: any) => fav.product.id !== id));
  };

  useEffect(() => {
    getFavorites();
  }, []);

  return (
    <AuthLayout>
      <div className="p-10">
        <h1 className="font-semibold text-xl py-4">Favoris</h1>
        {favorites && favorites.length > 0 ? (
          <div className="grid grid-cols-3 max-lg:grid-cols-2">
            {favorites.map((item, index) => {
              return (
                <FavorisCard
                  key={index}
                  favorite={item}
                  onFavoriteRemoved={handleFavoriteRemoved}
                />
              );
            })}

            {/* <FavorisCard />
            <FavorisCard /> */}
          </div>
        ) : (
          <div className="h-80 flex flex-col items-center justify-center gap-4">
            <FileClock className="w-20 h-20" />
            <p>Vous n&apos;avez pas de produits favoris</p>
            <div>
              <Link
                href="/products?category=tous"
                className="bg-black text-nowrap rounded-full px-4 py-2 mt-4 text-white w-full"
              >
                Ajouter ici
              </Link>
            </div>
          </div>
        )}
      </div>
    </AuthLayout>
  );
}
