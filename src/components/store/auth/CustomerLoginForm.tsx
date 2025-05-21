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
import { login } from "@/lib/api";
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
  password: z
    .string()
    .min(6, { message: "Le mot de passe doit contenir au moins 6 caractères" }),
});

export default function CustomerLoginForm({
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
  const [toggleInput, setToggleInput] = useState(false);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setLoading(true);
      const res = await login(values.email, values.password);
      if (res && res.data) {
        setToken(res.access_token);
        if (res.data.role == "client") {
          console.log(res.data);
          setUserData(res.data);
          toast.success("Connecté avec succès");
          setOpen(!open);
          router.replace("/account");
        }
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
          <h1 className="text-xl font-bold">Connexion</h1>
          <p>
            Bienvenue <br />
            Connectez-vous ci-dessous pour accéder à votre compte
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

          <div className="relative">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      type={!toggleInput ? "password" : "text"}
                      placeholder="Mot de passe *"
                      onKeyDown={handleKeyPress}
                      className="bg-slate-100 w-full py-2 px-6 rounded-full focus:outline-none focus:ring-1 focus:ring-black text-black placeholder:text-sm"
                    />
                  </FormControl>
                  <FormMessage className="text-[12px]" />
                </FormItem>
              )}
            />
            <div className="absolute top-0 right-0 px-4 flex justify-center items-center h-10">
              {!toggleInput ? (
                <LuEye
                  onClick={() => setToggleInput(true)}
                  className="cursor-pointer w-6 h-6"
                />
              ) : (
                <LuEyeOff
                  onClick={() => setToggleInput(false)}
                  className="cursor-pointer w-6 h-6"
                />
              )}
            </div>
          </div>
        </div>

        <div className="flex justify-start items-center w-full gap-4">
          <Checkbox />
          <p>Souvenez-vous de moi.</p>
        </div>

        <CustomBlackButton title="Connexion" loading={loading} />

        <button
          type="button"
          onClick={() => setAuthMethod("reset")}
          className="underline text-slate-400 text-center"
        >
          Mot de passe oublié ?
        </button>
      </form>
    </Form>
  );
}
