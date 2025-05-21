"use client";

import React from "react";
import Image from "next/image";
import { BsHeart } from "react-icons/bs";
import ProductDetailAccordion from "@/components/store/products/ProductDetailAccordion";
import ProductDetailCarrousel from "@/components/store/products/ProductDetailCarrousel";
import { Fragment, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/store/products/ProductCard";
import CartModal from "@/components/store/cart/CartModal";
import Link from "next/link";
import { Loader } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { productsData } from "@/lib/data";

export default function ProductDetail({ params }: any) {
  const [product, setProduct] = useState<any>({});
  const [sizes, setSizes] = useState<any>([]);
  const [accessories, setAccessories] = useState<any>([]);
  const [featureProducts, setFeatureProducts] = useState<any>([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [favLoading, setFavLoading] = useState(false);
  const { addToCart } = useCart();
  const [sizeSelected, setSizeSelected] = useState("");
  const [favorite, setFavorite] = useState(false);

  const fetchProduct = async () => {
    setLoading(true);
    setProduct(productsData.find((p) => p.id === params.productId));
    setLoading(false);
  };

  const fetchAccessories = async () => {
    setLoading(true);
    setAccessories(productsData.filter((p) => p.category_id === "3"));
    setLoading(false);
  };

  const fetchFeaturesProducts = async (id: string) => {
    setLoading(true);
    setFeatureProducts(
      productsData.filter((p) => p.category_id === product.category_id)
    );
    setLoading(false);
  };

  const addToFavorite = async () => {
    setFavLoading(true);
    setFavorite(!favorite);
    setFavLoading(false);
  };

  useEffect(() => {
    if (product && product.size) {
      setSizes(product.size);

      if (sizes.length === 1) {
        setSizeSelected(sizes[0]);
      }
    }
  }, [product, sizes]);

  useEffect(() => {
    fetchProduct();
    fetchAccessories();
  }, [params.productId]);

  useEffect(() => {
    if (product.id) {
      fetchFeaturesProducts(product.id);
    }
  }, [product]);

  return loading ? (
    <div className="h-full w-full flex justify-center items-center">
      <Loader className="w-[100px] h-[100px]" />
    </div>
  ) : (
    <Fragment>
      {/* TOP */}
      <div className="w-full block md:flex gap-2 overflow-x-hidden mb-10 px-6">
        <div className="h-full w-full md:flex-1 custom-scroll">
          <div className="h-full">
            <Image
              src={`/${product.main_image}`}
              alt="Main image"
              height={1000}
              width={800}
              className="object-cover h-full w-full"
            />
          </div>
        </div>
        <div className="w-full md:w-[35rem] px-4 pt-10">
          <h1 className="font-bold leading-10">{product.name}</h1>
          <small>{product.price} F cfa</small>
          {sizes.length > 1 ? (
            <div className="py-8 border-b border-gray-200">
              <p>Taille</p>
              <ul className="flex gap-2 pt-2">
                {sizes.map((item: string, index: number) => {
                  return (
                    <li
                      onClick={() => setSizeSelected(item)}
                      key={index}
                      className={`w-14 h-14 flex items-center justify-center cursor-pointer rounded-full border hover:border-black ${
                        sizeSelected == item ? "border-black" : ""
                      }`}
                    >
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
          ) : (
            <div className="py-8 border-b border-gray-200 capitalize">
              <p>Taille</p>
              <p className="pt-2">{sizes[0]}</p>
            </div>
          )}
          <div className="py-8 border-b border-gray-200">
            <Button
              onClick={() => {
                addToCart({
                  product: product,
                  sizeSelected: sizeSelected,
                });
                toast.success("Produit ajouté au panier !");
              }}
              disabled={!sizeSelected}
              className="bg-black text-nowrap rounded-full px-1 py-2 text-white w-full"
            >
              Ajouter au panier
            </Button>
            <div className="flex gap-4 mt-2">
              <Button
                className="px-6 py-2 border border-gray-200 rounded-full hover:border-black bg-transparent hover:bg-transparent"
                onClick={() => addToFavorite()}
                disabled={!sizeSelected}
              >
                {favLoading ? (
                  <Loader />
                ) : (
                  <BsHeart
                    className={`w-6 h-6 cursor-pointer text-black ${
                      favorite ? "text-red-500" : ""
                    }`}
                  />
                )}
              </Button>
              {/* <div className="flex-1 flex cursor-pointer justify-center py-2 border border-gray-200 rounded-full hover:border-black">
                    Tableau des tailles
                  </div> */}
            </div>
            <div className="pt-6">
              <small className="text-justify">{product.description}</small>
            </div>
          </div>
          <div className="px-12 py-8">
            <ProductDetailCarrousel />
          </div>
          <ProductDetailAccordion />
        </div>
      </div>
      {product.additionnal_images && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-6">
          {product.additionnal_images.map((item: string, index: number) => {
            return (
              <div key={index} className="h-[600px]">
                <Image
                  src={`/${item}`}
                  alt="Second image"
                  height={100}
                  width={100}
                  className="object-cover h-full w-full"
                />
              </div>
            );
          })}
        </div>
      )}
      {/* BOTTOM */}
      <div className="py-10 px-6">
        <h1 className="font-bold mb-6">Combinez avec</h1>
        {accessories && accessories.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {accessories.map((item: any, index: number) => {
              return (
                <Link href={`/products/${item.id}`} key={index}>
                  <ProductCard
                    product={item}
                    setOpen={setOpen}
                    setProduct={setProduct}
                  />
                </Link>
              );
            })}
          </div>
        ) : (
          <div>
            <h1>Pas d&apos;accessoires</h1>
          </div>
        )}
      </div>
      <div className="py-10 px-4">
        <h1 className="font-bold mb-6">Produits similaires</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {featureProducts.map((item: any, index: number) => {
            return (
              <Link href={`/products/${item.id}`} key={index}>
                <ProductCard
                  product={item}
                  setOpen={setOpen}
                  setProduct={setProduct}
                />
              </Link>
            );
          })}
        </div>
      </div>
      <CartModal open={open} setOpen={setOpen} product={product} />
    </Fragment>
  );
}
