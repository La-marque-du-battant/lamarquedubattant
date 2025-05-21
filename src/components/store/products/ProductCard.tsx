"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ProductCard({
  product,
  setOpen,
  setProduct,
}: {
  product: ProductType;
  setOpen: (value: boolean) => void;
  setProduct: (value: ProductType) => void;
}) {
  // Helper function to check if a product is new
  const isNewProduct = (createdAt: string): boolean => {
    const productDate = new Date(createdAt);
    const now = new Date();

    // Calculate the difference in time
    const timeDifference = now.getTime() - productDate.getTime();
    const daysDifference = timeDifference / (1000 * 60 * 60 * 24); // Convert to days

    return daysDifference <= 30; // Check if it's within 30 days
  };

  const [sizes, setSizes] = useState<[] | any>([]);

  useEffect(() => {
    if (product && product.size) {
      const size = product.size;
      setSizes(size); // Assigner automatiquement la première taille si une seule
    }
  }, [product]);

  const handleQuickViewClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setProduct(product);
    setOpen(true);
  };

  return (
    <div className="w-full">
      <div className="w-full h-80 flex flex-col justify-center items-center cursor-pointer relative group overflow-hidden p-2">
        <div className="absolute top-0 left-0 p-2 flex flex-wrap gap-2">
          {isNewProduct(product.created_at) && (
            <small className="py-1 px-2 bg-white rounded-full cursor-grab">
              Nouveau
            </small>
          )}

          {product.status === "0" && (
            <small className="py-1 px-2 bg-white rounded-full cursor-grab">
              Indisponible
            </small>
          )}
        </div>

        <Image
          src={`/${
            product.main_image ? product.main_image : "defaultImage.png"
          }`}
          alt="Product Image"
          width={150}
          height={150}
          className="object-cover w-full h-full transition duration-700 ease-in-out transform hover:scale-150 cursor-pointer"
        />
        <div className="absolute bottom-[15px] hidden group-hover:block">
          <div
            className="flex w-full px-6"
            onClick={(e) => e.stopPropagation()}
          >
            <ul
              className="bg-white flex-1 rounded-full px-4 py-2 flex gap-1"
              onClick={(e) => e.preventDefault()}
            >
              {sizes.map((item: string, index: number) => {
                return (
                  <li key={index} className="text-nowrap capitalize">
                    {item}
                  </li>
                );
              })}

              <li>
                <Link href="">...</Link>
              </li>
            </ul>
            <button
              type="button"
              className="bg-black text-nowrap rounded-full px-1 py-2 text-white"
              onClick={handleQuickViewClick}
            >
              Vue rapide
            </button>
          </div>
        </div>
      </div>
      <div className="py-4">
        <p>{product.name}</p>
        <small className="text-slate-400">{product.price} F cfa </small>
      </div>
    </div>
  );
}
