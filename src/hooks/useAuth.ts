import { getUser } from "@/lib/api";
import { getToken, removeToken } from "@/lib/auth";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export const useAuth = () => {
  const [user, setUser] = useState<UserType | null>();
  const [loading, setLoading] = useState<boolean>(true);

  const fetchUser = async () => {
    try {
      const token = getToken();
      if (token) {
        const userData = await getUser(token);
        setUser(userData);
      } else {
        setUser(null);
      }
    } catch (error) {
      console.log("User fetching error", error);
      setUser(null);
      toast.error(
        "La récupération des informations de l'utilisateur a échouée !"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return { user, loading };
};

export const useLogout = () => {
  const logout = () => {
    removeToken();
    toast.success("Déconnecté avec succès");
  };

  return { logout };
};
