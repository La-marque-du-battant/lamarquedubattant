"use client";

import AuthLayout from "@/components/auth/AuthLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Image from "next/image";
import { getUserData, setUserData } from "@/lib/auth";
import { Loader } from "lucide-react";
import { fetchClient } from "../../../../../utils/fetchClient";

export default function Profil() {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    birthday: "",
    address: "",
    city: "",
    avatar: "",
  });

  const [loading, setLoading] = useState(false);

  // Récupérer l'utilisateur depuis localStorage
  useEffect(() => {
    const userData = getUserData();
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  // Gérer les modifications des champs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  // Soumettre les modifications des informations utilisateur
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetchClient("/update-informations", {
        method: "PUT",
        body: user,
      });
      if (res && res.success == true) {
        toast.success(res.message);
        setUserData(res.data);
        setUser(res.data);
        console.log("PUT response:", res);
      }
    } catch (error) {
      toast.error("Erreur interne du serveur !");
      console.error("Erreur :", error);
    } finally {
      setLoading(false);
    }
  };

  // Gérer le changement d'image
  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const image = e.target.files[0];

      if (!image) {
        toast.error("Veuillez sélectionner une image.");
        return;
      }

      const formData = new FormData();
      formData.append("avatar", image);

      try {
        const res = await fetchClient("/update-avatar", {
          method: "POST",
          body: formData,
        });

        if (res && res.success == true) {
          setUserData(res.data);
          setUser(res.data);
          toast.success(res.message);
          console.log("POST response:", res);
        }
      } catch (error) {
        console.error("Erreur :", error);
        toast.error("Erreur interne du serveur !");
      }
    }
  };

  return (
    <AuthLayout>
      <div className="py-10">
        <div className="flex px-10 justify-between items-center py-4 border-b border-gray-200">
          <h1 className="font-semibold text-xl ">Profil</h1>
          <div>
            <Button onClick={handleSubmit} disabled={loading}>
              {loading ? <Loader /> : "Modifier votre profil"}
            </Button>
          </div>
        </div>
        <div className="px-10 pt-5">
          {/* <div className="h-[150px] w-[150px] rounded-full border mb-8"></div> */}
          <div className="relative h-[160px] w-[160px]">
            <div className="h-[150px] w-[150px] rounded-full border p-2 mb-8">
              <Image
                width={100}
                height={100}
                src={user.avatar || "/user.png"}
                alt="Profile"
                className="w-full h-full rounded-full object-cover"
              />
              <label className="absolute bottom-2 right-2 bg-black text-white p-2 rounded-full cursor-pointer">
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageChange}
                />
                📷
              </label>
            </div>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="lastname">Nom</label>
                  <Input
                    type="text"
                    name="lastname"
                    value={user.lastname}
                    onChange={handleChange}
                    className="bg-slate-100 w-full py-2 px-6 rounded-full focus:outline-none focus:ring-1 focus:ring-black text-black placeholder:text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="firstname">Prénom</label>
                  <Input
                    type="text"
                    name="firstname"
                    value={user.firstname}
                    onChange={handleChange}
                    className="bg-slate-100 w-full py-2 px-6 rounded-full focus:outline-none focus:ring-1 focus:ring-black text-black placeholder:text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="firstname">Email</label>
                  <Input
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                    className="bg-slate-100 w-full py-2 px-6 rounded-full focus:outline-none focus:ring-1 focus:ring-black text-black placeholder:text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="phone">Numéro de téléphone</label>
                  <Input
                    type="text"
                    name="phone"
                    value={user.phone}
                    onChange={handleChange}
                    className="bg-slate-100 w-full py-2 px-6 rounded-full focus:outline-none focus:ring-1 focus:ring-black text-black placeholder:text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="birthday">Date d&apos;anniverssaire</label>
                  <Input
                    type="date"
                    name="birthday"
                    value={user.birthday}
                    onChange={handleChange}
                    className="bg-slate-100 w-full py-2 px-6 rounded-full focus:outline-none focus:ring-1 focus:ring-black text-black placeholder:text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="address">Adresse</label>
                  <Input
                    type="text"
                    name="address"
                    value={user.address}
                    onChange={handleChange}
                    className="bg-slate-100 w-full py-2 px-6 rounded-full focus:outline-none focus:ring-1 focus:ring-black text-black placeholder:text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="city">Ville</label>
                  <Input
                    type="text"
                    name="city"
                    value={user.city}
                    onChange={handleChange}
                    className="bg-slate-100 w-full py-2 px-6 rounded-full focus:outline-none focus:ring-1 focus:ring-black text-black placeholder:text-sm"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}
