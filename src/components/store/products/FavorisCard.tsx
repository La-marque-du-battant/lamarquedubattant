"use client";
import Image from "next/image";
import { Loader, Trash2 } from "lucide-react";
import { fetchClient } from "../../../../utils/fetchClient";
import toast from "react-hot-toast";
import { useState } from "react";
import { useCart } from "@/context/CartContext";

export default function FavorisCard({ favorite, onFavoriteRemoved }: any) {
  const [favLoading, setFavLoading] = useState(false);
  const { addToCart } = useCart();
  const [loading, setLoading] = useState(false);

  const removeToFavorite = async (id: string) => {
    try {
      const res = await fetchClient(`/favorites/${id}`, {
        method: "POST",
      });
      if (res && res.success == true) {
        setFavLoading(false);
        toast.success(res.message);
        onFavoriteRemoved(id);
      }
    } catch (error) {
      setFavLoading(false);
      console.error("Erreur lors du chargement des produits:", error);
      toast.error("Erreur interne du serveur.");
    } finally {
      setFavLoading(false);
    }
  };

  return (
    <div className="w-60 flex flex-col relative overflow-hidden mt-4">
      <div className="w-full h-[18rem] cursor-pointer">
        <Image
          src={favorite.product.main_image ? favorite.product.main_image : ""}
          alt="Product Image"
          width={500}
          height={500}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="leading-6 mt-2">
        <p>{favorite.product.name}</p>
        <small className="text-gray-400">{favorite.product.price} F cfa</small>
      </div>
      <div className="flex justify-between items-center">
        <small className="text-gray-400">
          Taille: {favorite.size_selected}
        </small>
        <div>
          {favLoading ? (
            <Loader />
          ) : (
            <Trash2
              className="w-10 h-10 rounded-full p-2 cursor-pointer border border-gray-200"
              onClick={() => removeToFavorite(favorite.product.id)}
            />
          )}
        </div>
      </div>
      <div className="mt-2">
        <button
          onClick={() => {
            setLoading(true);
            addToCart({
              product: favorite.product,
              sizeSelected: favorite.size_selected,
            });
            setLoading(false);
            toast.success("Produit ajouté au panier.");
          }}
          className="px-8 py-2 w-full text-black border transition-transform duration-700 ease-in-out border-gray-200 hover:border-black rounded-full"
        >
          {loading ? <Loader /> : "Ajouter au panier"}
        </button>
      </div>
    </div>
  );
}
