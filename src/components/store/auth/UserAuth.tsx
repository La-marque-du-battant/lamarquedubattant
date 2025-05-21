"use client";
import { Fragment, useState } from "react";
import { LuUser2 } from "react-icons/lu";
import CustomerLoginForm from "@/components/store/auth/CustomerLoginForm";
import Image from "next/image";
import { ToasterProvider } from "@/lib/ToasterProvider";
import { getToken } from "@/lib/auth";
import { useRouter, usePathname } from "next/navigation";
import CustomerRegisterForm from "./CustomerRegisterForm";
import ResetPasswordForm from "./ResetPasswordForm";

export default function Footer() {
  const [open, setOpen] = useState(false);
  const [authMethod, setAuthMethod] = useState("login");
  const token = getToken();
  const router = useRouter();
  const path = usePathname();

  const handleUserIconClick = () => {
    /*  if (token) {
      router.push("/account/orders");
    } else  */ if (path === "/auth/login") {
      router.replace("/auth/login");
    } else if (path === "/auth/register") {
      router.replace("/auth/register");
    } else {
      setOpen(true);
    }
  };
  return (
    <Fragment>
      <ToasterProvider />
      <LuUser2
        className="w-6 h-6 cursor-pointer"
        onClick={() => handleUserIconClick()}
      />
      {open && (
        <div className="fixed h-screen w-full top-0 left-0 flex z-[9999]">
          <div
            className="h-full opacity-[0.3] w-2/3 bg-black cursor-pointer"
            onClick={() => setOpen(false)}
          ></div>
          <div
            className={`h-full w-1/3 bg-white fixed top-0 bottom-0 right-0 transform transition-transform duration-200 ease-in-out text-black ${
              open ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="custom-scrollbar h-full">
              <div className="pt-6 fixed top-0 right-0 left-0 bg-white">
                <button
                  className={`py-4 w-1/2 ${
                    authMethod === "login" || authMethod === "reset"
                      ? "border-b-4 border-black"
                      : ""
                  }`}
                  onClick={() => setAuthMethod("login")}
                >
                  Connexion
                </button>
                <button
                  className={`py-4 w-1/2 ${
                    authMethod === "register" ? "border-b-4 border-black" : ""
                  }`}
                  onClick={() => setAuthMethod("register")}
                >
                  Inscription
                </button>
              </div>
              <div className="mt-[5rem]">
                <div className="w-full flex justify-center py-[2rem]">
                  <Image src="./battant.png" alt="" width={100} height={100} />
                </div>
                {authMethod === "login" && (
                  <CustomerLoginForm
                    open={open}
                    setOpen={setOpen}
                    setAuthMethod={setAuthMethod}
                  />
                )}
                {authMethod === "register" && (
                  <CustomerRegisterForm open={open} setOpen={setOpen} />
                )}
                {authMethod === "reset" && (
                  <ResetPasswordForm
                    open={open}
                    setOpen={setOpen}
                    setAuthMethod={setAuthMethod}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
}
