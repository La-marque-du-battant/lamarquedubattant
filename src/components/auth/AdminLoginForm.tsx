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
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { LoaderIcon } from "lucide-react";
import { login } from "@/lib/api";
import { setToken } from "@/lib/auth";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  email: z
    .string()
    .min(1, { message: "L'email est requis" })
    .email("Adresse mail invalide"),
  password: z
    .string()
    .min(6, { message: "Le mot de passe doit contenir au moins 6 caractères" }),
});

export default function AdminLoginForm() {
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
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setLoading(true);
      const res = await login(values.email, values.password);
      if (res.access_token) {
        setToken(res.access_token);
        toast.success("Connecté avec succès");
        router.replace("/dashboard");
      }
    } catch (error) {
      console.log("login", error);
      toast.error("Erreur survenue au niveau du serveur ! Veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 w-[20rem]"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Veuillez saisir votre adresse email"
                  className="placeholder:text-[14px]"
                  onKeyDown={handleKeyPress}
                />
              </FormControl>
              <FormMessage className="text-[12px]" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mot de passe</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Veuillez saisir votre mot de passe"
                  className="placeholder:text-[14px]"
                  onKeyDown={handleKeyPress}
                />
              </FormControl>
              <FormMessage className="text-[12px]" />
            </FormItem>
          )}
        />
        <div className="flex justify-between items-center">
          <div className="flex space-x-2 items-center">
            <Checkbox />
            <p className="text-[14px]">Se souvenir de moi</p>
          </div>
          <div>
            <Link className="text-[14px] underline" href="">
              Mot de passe oublié
            </Link>
          </div>
        </div>
        <Button type="submit" className="w-full">
          {loading ? <LoaderIcon /> : <span>Se connecter</span>}
        </Button>
      </form>
    </Form>
  );
}
