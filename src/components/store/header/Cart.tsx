"use client";

import { Fragment, useEffect, useState } from "react";
import { LuShoppingCart } from "react-icons/lu";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";

export default function CartHead() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const router = useRouter();
  const { cart } = useCart();
  return (
    <Fragment>
      <div className="relative">
        <LuShoppingCart
          className="w-6 h-6 cursor-pointer"
          onClick={() => router.push("/cart")}
        />
        {mounted && (
          <div className="absolute -top-4 font-bold right-0 text-red-500">
            {cart ? cart.length : 0}
          </div>
        )}
      </div>
      {/* {open && (
        <div className="absolute h-screen w-full top-0 left-0 flex">
          <div
            className="h-full opacity-[0.3] w-2/3 bg-black cursor-pointer"
            onClick={() => setOpen(false)}
          ></div>
          <div
            className={`h-full w-1/3 bg-white fixed top-0 bottom-0 right-0 transform transition-transform duration-200 ease-in-out text-black ${
              open ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="custom-scrollbar">
              <div className="pt-6 pb-4 mx-6 border-b border-black flex justify-between items-center fixed top-0 right-0 left-0 bg-white">
                <h1 className="text-2xl">Votre panier</h1>
                <BsXLg
                  className="w-8 h-8 cursor-pointer"
                  onClick={() => setOpen(false)}
                />
              </div>
              <div className="mt-[6rem] h-[22rem] custom-scrollbar">
                {!cartItem ? (
                  <p>Votre panier est vide</p>
                ) : (
                  <div className="border-l border-gray-300">
                    <div className="px-6">
                      <CartCard />
                    </div>
                    <div className="px-6 mt-10">
                      <CartAccordion />
                    </div>
                    <div className="absolute bottom-0 h-[10rem] w-full flex flex-col gap-6 justify-center items-center bg-white border-t border-black px-4">
                      <CartCheckout />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )} */}
    </Fragment>
  );
}
