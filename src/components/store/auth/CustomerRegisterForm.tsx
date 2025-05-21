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
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { LoaderIcon } from "lucide-react";
import { login, register } from "@/lib/api";
import { setToken, setUserData } from "@/lib/auth";
import { useRouter } from "next/navigation";
//import Button from "@/components/store/Button";
//import Input from "@/components/store/auth/Input";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";
import { Fragment } from "react";
import { LuEye } from "react-icons/lu";
import { LuEyeOff } from "react-icons/lu";
import CustomBlackButton from "../CustomBlackButton";

const formSchema = z.object({
  lastname: z.string().min(1, { message: "Le nom est requis" }),
  firstname: z.string().min(1, { message: "Le prénom est requis" }),
  email: z
    .string()
    .min(1, { message: "L'email est requis" })
    .email("Adresse mail invalide"),
  password: z
    .string()
    .min(6, { message: "Le mot de passe doit contenir au moins 6 caractères" }),
  password_confirmation: z
    .string()
    .min(6, { message: "Le mot de passe doit contenir au moins 6 caractères" }),
  role: z.string().min(1, { message: "Le rôle est requis" }),
});

export default function CustomerRegisterForm({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (value: boolean) => void;
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
      lastname: "",
      firstname: "",
      email: "",
      password: "",
      password_confirmation: "",
      role: "client",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setLoading(true);
      console.log(values);
      const res = await register(values);
      if (res) {
        setToken(res.access_token);
        setUserData(JSON.stringify(res.data));
        toast.success(res.message);
        setOpen(false);
        router.replace("/account");
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
          <h1 className="text-xl font-bold">Créer un compte</h1>

          <p className="text-sm">
            Créer votre compte pour accéder à l&apos;historique de vos
            commandes, à l&apos;état de vos commandes, aux adresses enrégistrées
            et plus encore Connectez-vous ci-dessous pour accéder à votre compte
          </p>
        </div>
        <div className="flex flex-col gap-4 w-full">
          <FormField
            control={form.control}
            name="lastname"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    type="text"
                    placeholder="Nom *"
                    onKeyDown={handleKeyPress}
                    className="bg-slate-100 w-full py-2 px-6 rounded-full focus:outline-none focus:ring-1 focus:ring-black text-black placeholder:text-sm"
                  />
                </FormControl>
                <FormMessage className="text-[12px]" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="firstname"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    type="text"
                    placeholder="Prénom *"
                    onKeyDown={handleKeyPress}
                    className="bg-slate-100 w-full py-2 px-6 rounded-full focus:outline-none focus:ring-1 focus:ring-black text-black placeholder:text-sm"
                  />
                </FormControl>
                <FormMessage className="text-[12px]" />
              </FormItem>
            )}
          />
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
          <div className="relative">
            <FormField
              control={form.control}
              name="password_confirmation"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      type={!toggleInput ? "password" : "text"}
                      placeholder="Confirmez mot de passe *"
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
        <div className="flex justify-start w-full gap-4">
          <Checkbox />
          <p className="text-sm">
            Inscrivez-vous aux newsletters pour être informé des dernières
            collections et évènements.
          </p>
        </div>

        <CustomBlackButton title="Créer" loading={loading} />

        <p className="text-sm">Vous avez déjà un compte ? Connectez-vous</p>
        <small className="text-[12px] text-slate-400 text-center">
          En créant un compte, vous acceptez notre{" "}
          <Link href="/" className="underline">
            politique de confidentialité
          </Link>{" "}
          et nos{" "}
          <Link href="/" className="underline">
            conditions d&apos;utilisation
          </Link>
          .
        </small>
      </form>
    </Form>
  );
}
