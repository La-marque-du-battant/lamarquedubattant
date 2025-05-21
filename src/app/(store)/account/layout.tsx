"use client";
import "../../globals.css";
import LeftSideBar from "@/components/store/layouts/LeftSideBar";
import TopBar from "@/components/store/layouts/TopBar";
import { AuthProvider } from "@/context/AuthContext";
import { OrderProvider } from "@/context/OrderContext";
import { Dialog, DialogPanel } from "@headlessui/react";
import { XMarkIcon, FunnelIcon, Bars3Icon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function ProductsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [openFilter, setOpenFilter] = useState(false);

  return (
    <section>
      <div className="flex max-md:flex-col mt-14">
        <AuthProvider>
          <OrderProvider>
            <div className="pt-6 px-6">
              {/* Bouton pour ouvrir le filtre sur mobile */}
              <button
                className="md:hidden flex items-center gap-2 px-3 py-1 text-sm border rounded-md"
                onClick={() => setOpenFilter(true)}
              >
                <Bars3Icon className="h-5 w-5" />
                Menu
              </button>
            </div>
            <div className="max-w-[20rem] hidden md:block">
              <LeftSideBar />
            </div>
            {/* <TopBar /> */}
            <div className="flex-1 h-full md:h-screen overflow-x-hidden custom-scrollbar">
              {children}
            </div>
          </OrderProvider>
        </AuthProvider>
      </div>

      {/* Modale pour le filtre sur mobile */}
      <Dialog
        open={openFilter}
        onClose={() => setOpenFilter(false)}
        className="relative z-50"
      >
        {/* Fond */}
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center">
          {/* Contenu de la modale */}
          <DialogPanel className="bg-white rounded-md w-full max-w-sm p-4 shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">Menu</h2>
              <button onClick={() => setOpenFilter(false)}>
                <XMarkIcon className="h-6 w-6 text-gray-500" />
              </button>
            </div>

            <div className="h-[25rem] custom-scrollbar">
              <LeftSideBar />
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </section>
  );
}
