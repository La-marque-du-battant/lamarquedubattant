"use client";

import { useState } from "react";
import CustomerLoginForm from "@/components/store/auth/CustomerLoginForm";

export default function CustomerLogin() {
  const [open, setOpen] = useState(false);
  const [authMethod, setAuthMethod] = useState("");

  return (
    <div className="min-h-[600px] container mx-auto flex justify-center items-center">
      <div className="mt-20">
        <CustomerLoginForm
          open={open}
          setOpen={setOpen}
          setAuthMethod={setAuthMethod}
        />
      </div>
    </div>
  );
}
