"use client";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { Fragment, useEffect } from "react";
import toast from "react-hot-toast";
import Loader from "../custom ui/Loader";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  const { userData, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!userData && !loading) {
      toast.error("Vous devez vous connecter avant d'accéder à cette page !");
      router.replace("/");
    }
  }, [userData, loading, router]);

  if (loading || !userData) {
    return <Loader />;
  }

  return <Fragment>{children}</Fragment>;
};

export default AuthLayout;
