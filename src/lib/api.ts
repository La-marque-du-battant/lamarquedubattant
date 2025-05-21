import toast from "react-hot-toast";
import { fetchClient } from "../../utils/fetchClient";
export const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getCsrfToken = async (): Promise<void> => {
  const res = await fetch(`${API_URL}/sanctum/csrf-cookie`, {
    method: "GET",
    credentials: "include",
  });

  if (!res.ok) {
    throw new Error("Failed to get CSRF token");
  }

  console.log("CSRF token set");
};

interface AuthResponse {
  data?: any;
  access_token?: string | any;
  message?: string | any;
}

//Authentification
export const register = async (body: {}): Promise<AuthResponse> => {
  await getCsrfToken();
  const res = await fetch(`${API_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    credentials: "include",
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const errorData = await res.json();
    console.error("Register error:", errorData);
    toast.error(errorData.message);
    throw new Error(errorData.message || "Register Failed");
  }
  return await res.json();
};

export const login = async (
  email: string,
  password: string
): Promise<AuthResponse> => {
  //await getCsrfToken();

  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    credentials: "include",
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) {
    const errorData = await res.json();
    console.error("Login error:", errorData);
    toast.error(errorData.message);
    throw new Error(errorData.message || "Login Failed");
  }

  return await res.json();
};

export const logout = async (
  token: string | any
): Promise<{ message: string }> => {
  await getCsrfToken();
  const res = await fetch(`${API_URL}/auth/logout`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error("Erreur lors de la déconnexion");
  }
  return await res.json();
};

export const forgotPassword = async (
  email: string
): Promise<{ message: string }> => {
  await getCsrfToken();
  const res = await fetch(`${API_URL}/auth/forgot-password`, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    credentials: "include",
    body: JSON.stringify({ email }),
  });

  if (!res.ok) {
    const errorData = await res.json();
    console.error("Login error:", errorData);
    toast.error(errorData.message);
    throw new Error(errorData.message || "Login Failed");
  }

  return await res.json();
};

export const resetPassword = async (
  password: string,
  password_confirmation: string,
  hash: string | any
): Promise<AuthResponse> => {
  await getCsrfToken();
  const res = await fetch(`${API_URL}/auth/reset-password/${hash}`, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    credentials: "include",
    body: JSON.stringify({ password, password_confirmation }),
  });

  if (!res.ok) {
    const errorData = await res.json();
    console.error("Reset error:", errorData);
    toast.error(errorData.message);
    throw new Error(errorData.message || "Reset Failed");
  }

  return await res.json();
};

//Users

export const getUser = async (token: string): Promise<UserType | null> => {
  const res = await fetch(`${API_URL}/user`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch user");
  }

  return await res.json();
};

export const getRoles = async (): Promise<{ data: RoleType[] } | null> => {
  const res = await fetch(`${API_URL}/roles`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch roles");
  }
  return await res.json();
};

export const addUsers = async (
  values: UserType
): Promise<{ message: string }> => {
  await getCsrfToken();
  const res = await fetch(`${API_URL}/auth/register`, {
    method: "POST",
    credentials: "include",
    body: JSON.stringify(values),
    headers: {
      "Content-type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error("Failed to add users");
  }
  return await res.json();
};

export const getUsers = async (): Promise<{ data: UserType[] } | null> => {
  const res = await fetch(`${API_URL}/users`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  });
  if (!res.ok) {
    throw new Error("Failed to get users");
  }
  return await res.json();
};

export const deleteItem = async (
  item: string,
  id: string | any
): Promise<void> => {
  const res = await fetch(`${API_URL}/${item}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
    },
  });
  if (!res.ok) {
    throw new Error("Failed to get users");
  }
  console.log("Item deleted !");
};

//Products

export const getProducts = async () => {
  try {
    const data = await fetchClient("/products");
    console.log("GET response:", data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

//Cart

export const saveCart = async (body: any) => {
  try {
    const res = await fetchClient("/cart/save", { method: "POST", body: body });
    console.log("POST response:", res);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

/* const updateData = async () => {
  const body = { name: "Jane Doe" };

  try {
    const data = await fetchClient("/api/some-resource/1", {
      method: "PUT",
      body,
    });
    console.log("PUT response:", data);
  } catch (error) {
    console.error("Error updating data:", error);
  }
}; */

/* const patchData = async () => {
  const body = { email: "jane.doe@example.com" };

  try {
    const data = await fetchClient("/api/some-resource/1", {
      method: "PATCH",
      body,
    });
    console.log("PATCH response:", data);
  } catch (error) {
    console.error("Error patching data:", error);
  }
}; */

/* const deleteData = async () => {
  try {
    const data = await fetchClient("/api/some-resource/1", {
      method: "DELETE",
    });
    console.log("DELETE response:", data);
  } catch (error) {
    console.error("Error deleting data:", error);
  }
}; */
