import { Fragment, useEffect, useState } from "react";
import { BsXLg } from "react-icons/bs";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";

export default function CartModal({
  open,
  product,
  setOpen,
}: {
  open: boolean;
  product: ProductType | any;
  setOpen: (value: boolean) => void;
}) {
  const { addToCart } = useCart();
  const [sizeSelected, setSizeSelected] = useState("");

  useEffect(() => {
    if (product && product.size) {
      const sizes = product.size;
      if (sizes.length === 1) {
        setSizeSelected(sizes[0]); // Assigner automatiquement la première taille si une seule
      }
    }
  }, [product]);

  return (
    <Fragment>
      {open && (
        <div className="fixed h-full w-full top-0 left-0 flex z-[99999]">
          <div
            className="h-full opacity-[0.3] flex-1 bg-black cursor-pointer"
            onClick={() => {
              setOpen(false);
              setSizeSelected("");
            }}
          ></div>
          <div
            className={`h-full w-[260px] sm:w-[360px] md:w-[460px] bg-white fixed top-0 bottom-0 right-0 transform transition-transform duration-200 ease-in-out text-black custom-scrollbar ${
              open ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="">
              <div className="pt-6 pb-4 mx-6 border-b border-black flex justify-between items-center fixed top-0 right-0 left-0 bg-white">
                <h1 className="text-2xl font-semibold">
                  Selectionnez les options
                </h1>
                <BsXLg
                  className="w-8 h-8 cursor-pointer"
                  onClick={() => {
                    setOpen(false);
                    setSizeSelected("");
                  }}
                />
              </div>
              <div className="mt-[6rem] h-[22rem]">
                <div className="border-l border-gray-300">
                  <div className="px-6 flex justify-center items-center">
                    <div className="w-[14rem] h-[14rem]">
                      <Image
                        src={`/${product.main_image}`}
                        alt="Product Image"
                        width={100}
                        height={100}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                  <div className="px-6 mt-10">
                    <h1 className="font-semibold mb-4">{product.name}</h1>
                    <p>{product.price} F cfa</p>
                  </div>
                  {product.size.length > 1 ? (
                    <div className="px-6 mt-8">
                      <p>Taille</p>

                      <ul
                        className="py-2 flex flex-wrap gap-2"
                        onClick={(e) => e.preventDefault()}
                      >
                        {product.size.map((item: string, index: number) => {
                          return (
                            <li
                              onClick={() => setSizeSelected(item)}
                              key={index}
                              className={`w-14 h-14 text-2xl flex justify-center items-center rounded-full border hover:border-black ${
                                sizeSelected == item ? "border-black" : ""
                              } cursor-pointer`}
                            >
                              {item}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  ) : (
                    <div className="px-6 mt-8 capitalize">
                      <p>{product.size[0]}</p>
                    </div>
                  )}
                  <div className="px-6 mt-10">
                    <Button
                      onClick={() => {
                        addToCart({
                          product: product,
                          sizeSelected: sizeSelected,
                        });
                        setOpen(false);
                        setSizeSelected("");
                        toast.success("Produit ajouté au panier.");
                      }}
                      disabled={!sizeSelected}
                      className="bg-black text-nowrap rounded-full px-1 py-2 mb-6 text-white w-full"
                    >
                      Ajouter au panier
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
}
