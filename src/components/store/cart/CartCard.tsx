"use client";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import { BsDash, BsPlus, BsTrash } from "react-icons/bs";

export default function CartCard({
  cartItem,
}: {
  cartItem: { product: ProductType; sizeSelected: string; quantity: number };
}) {
  const { removeFromCart, updateQuantity, getTotalForItem } = useCart();

  return (
    <div className="flex flex-col">
      <div className="flex gap-4 pt-2">
        <div className="w-40 h-[10rem] flex justify-center items-center">
          <Image
            src={cartItem.product.main_image}
            alt="Product Image"
            width={100}
            height={110}
            className="object-cover w-full h-full"
          />
        </div>
        <div>
          <p className="font-semibold">{cartItem.product.name}</p>
          <small className="text-slate-400">{cartItem.sizeSelected}</small>
          <p>{cartItem.product.price} F cfa </p>
        </div>
      </div>
      <div className="flex justify-between items-center mt-4 pr-6">
        <div>
          <h1>Quantité</h1>
        </div>
        <div className="flex gap-2 items-center">
          <div className="flex justify-between items-center px-4 py-2 border border-gray-300 rounded-full w-40 hover:border-black">
            <BsDash
              className="w-6 h-6 cursor-pointer"
              onClick={() =>
                updateQuantity(cartItem.product.id, cartItem.quantity - 1)
              }
            />
            <p>{cartItem.quantity}</p>
            <BsPlus
              className="w-6 h-6 cursor-pointer"
              onClick={() =>
                updateQuantity(cartItem.product.id, cartItem.quantity + 1)
              }
            />
          </div>
          <div className="p-2 cursor-pointer rounded-full border border-transparent hover:border hover:border-gray-200">
            <BsTrash
              className="w-6 h-6"
              onClick={() => removeFromCart(cartItem.product.id)}
            />
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mt-2 pb-6 border-b border-gray-300 pr-6">
        <div>
          <h1>Total</h1>
        </div>
        <div className="flex gap-2 items-center">
          <div className="flex justify-center items-center px-4 py-2 border border-gray-300 rounded-full w-[13rem] hover:border-black">
            <p>{getTotalForItem(cartItem.product.id)} F cfa</p>
          </div>
        </div>
      </div>
    </div>
  );
}
