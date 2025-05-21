"use client";

import { Toaster } from "react-hot-toast";

export const ToasterProvider = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-[9999]">
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          style: { zIndex: 9999 },
        }}
      />
    </div>
  );
};
