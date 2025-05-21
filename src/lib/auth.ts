const TOKEN_KEY = "auth_token";
const USER_DATA = "user_data";

export const getToken = (): string | null => {
  let token: string | null = null;
  if (typeof window !== "undefined") {
    token = localStorage.getItem(TOKEN_KEY);
  }
  return token;
};

export const setToken = (token: string): void => {
  if (typeof window !== "undefined") {
    return localStorage.setItem(TOKEN_KEY, token);
  }
};

export const removeToken = (): void => {
  if (typeof window !== "undefined") {
    return localStorage.removeItem(TOKEN_KEY);
  }
};

export const getUserData = (): string | null => {
  let user_data: string | null = null;

  if (typeof window !== "undefined") {
    return localStorage.getItem(USER_DATA);
  }
  return user_data;
};

export const setUserData = (data: any): void => {
  if (typeof window !== "undefined") {
    return localStorage.setItem(USER_DATA, JSON.stringify(data));
  }
};

export const removeUserData = (): void => {
  if (typeof window !== "undefined") {
    return localStorage.removeItem(USER_DATA);
  }
};
