"use client";

import { createContext, useContext, useEffect, useState } from "react";

type CartItem = {
  product: ProductType;
  sizeSelected: string;
  quantity: number;
};

interface CartContextProps {
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, newQuantity: number) => void;
  getTotalForItem: (id: string) => number;
  getTotal: () => number;
  clearCart: () => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  /* const [cart, setCart] = useState<CartItem[]>(() => {
    // Initialiser le panier depuis localStorage
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("cart");
      return savedCart ? JSON.parse(savedCart) : [];
    }
    return [];
  }); */

  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Sauvegarder le panier dans le localStorage à chaque modification
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  // Ajouter un produit au panier
  const addToCart = (
    item: Omit<CartItem, "quantity">,
    quantity: number = 1
  ) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (cartItem) =>
          cartItem.product.id === item.product.id &&
          cartItem.sizeSelected === item.sizeSelected
      );
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.product.id === item.product.id
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem
        );
      }
      return [...prevCart, { ...item, quantity }];
    });
  };

  // Supprimer un produit du panier
  const removeFromCart = (id: string) => {
    setCart((prevCart) =>
      prevCart.filter((cartItem) => cartItem.product.id !== id)
    );
  };

  // Modifier la quantité d'un produit
  const updateQuantity = (id: string, newQuantity: number) => {
    setCart((prevCart) =>
      prevCart
        .map((cartItem) =>
          cartItem.product.id === id
            ? { ...cartItem, quantity: newQuantity }
            : cartItem
        )
        .filter((cartItem) => cartItem.quantity > 0)
    );
  };

  // Obtenir le total pour un produit
  const getTotalForItem = (id: string) => {
    const item = cart.find((cartItem) => cartItem.product.id === id);
    return item ? item.quantity * item.product.price : 0;
  };

  const getTotal = () => {
    return cart.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  };

  // Vider le panier
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        getTotalForItem,
        getTotal,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart doit être utilisé dans un CartProvider");
  }
  return context;
};
