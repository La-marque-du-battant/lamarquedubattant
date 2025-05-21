"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { forgotPassword, login } from "@/lib/api";
import { setToken, setUserData } from "@/lib/auth";
import { useRouter } from "next/navigation";
import CustomBlackButton from "@/components/store/CustomBlackButton";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";
import { LuEye } from "react-icons/lu";
import { LuEyeOff } from "react-icons/lu";

const formSchema = z.object({
  email: z
    .string()
    .min(1, { message: "L'email est requis" })
    .email("Adresse mail invalide"),
});

export default function ResetPasswordForm({
  open,
  setOpen,
  setAuthMethod,
}: {
  open: boolean;
  setOpen: (value: boolean) => void;
  setAuthMethod: (value: string) => void;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setLoading(true);
      const res = await forgotPassword(values.email);
      if (res) {
        console.log(res.message);
        toast.success(res.message);
        setOpen(!open);
        router.replace("/auth/login");
      }
    } catch (error) {
      console.log("login", error);
      toast.error("Erreur survenue au niveau du serveur ! Veuillez réessayer.");
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-8 px-6 pb-16 items-center w-full"
      >
        <div className="text-center flex flex-col gap-3">
          <h1 className="text-xl font-bold">
            Réinitialiser votre mot de passe
          </h1>
          <p>
            Soumettez votre e-mail ci-dessous pour réinitialiser le mot de
            passe.
          </p>
        </div>
        <div className="flex flex-col gap-4 w-full">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    type="email"
                    placeholder="Email *"
                    onKeyDown={handleKeyPress}
                    className="bg-slate-100 w-full py-2 px-6 rounded-full focus:outline-none focus:ring-1 focus:ring-black text-black placeholder:text-sm"
                  />
                </FormControl>
                <FormMessage className="text-[12px]" />
              </FormItem>
            )}
          />
        </div>

        <CustomBlackButton title="Soumettre" loading={loading} />

        <button
          type="button"
          onClick={() => setAuthMethod("login")}
          className="underline text-center"
        >
          Se connecter
        </button>
      </form>
    </Form>
  );
}
