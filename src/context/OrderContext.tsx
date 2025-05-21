"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { fetchClient } from "../../utils/fetchClient";
import toast from "react-hot-toast";

type OrderContextType = {
  orders: [] | any;
  getOrder: (id: string | any) => void;
};

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const OrderProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [laoding, setLoading] = useState(false);
  const [orders, setOrders] = useState<[] | any>([]);

  const getOrders = async () => {
    try {
      const res = await fetchClient("/orders");
      if (res && res.success === true) {
        setOrders(res.data);
        console.log("GET response:", res);
      }
    } catch (error) {
      toast.error("Erreur interne du serveur !");
      console.error("Error fetching data:", error);
    }
  };

  const getOrder = async (id: string | any) => {
    try {
      const res = await fetchClient(`/orders/${id}`);
      if (res && res.success === true) {
        console.log(res.data);
        return res.data;
      }
    } catch (error) {
      toast.error("Erreur interne du serveur !");
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <OrderContext.Provider value={{ orders, getOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error("useOrder doit être utilisé dans un OrderProvider");
  }
  return context;
};
