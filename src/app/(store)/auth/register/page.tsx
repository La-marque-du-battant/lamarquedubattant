"use client";
import { useState } from "react";
import CustomerRegisterForm from "@/components/store/auth/CustomerRegisterForm";

export default function CustomerRegister() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-[600px] container mx-auto flex justify-center items-center">
      <div className="mt-20 w-[600px]">
        <CustomerRegisterForm open={open} setOpen={setOpen} />
      </div>
    </div>
  );
}
