"use client";
import { getUser } from "@/lib/api";
import { getToken } from "@/lib/auth";
import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

interface AuthContextProps {
  userData: UserType | any;
  setUser: (user: any) => void;
  loading: boolean;
  token: string | any;
}

const AuthContext = createContext<AuthContextProps>({
  userData: null,
  setUser: () => {},
  loading: true,
  token: "",
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [userData, setUser] = useState<UserType | null>(null);

  const [loading, setLoading] = useState(true);
  const token = getToken();

  const fetchUser = async () => {
    try {
      if (token) {
        const userData = await getUser(token);
        setUser(userData);
      } else {
        setUser(null);
      }
    } catch (error) {
      console.log("Erreur lors de la récupération", error);
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

  return (
    <AuthContext.Provider value={{ userData, setUser, loading, token }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
