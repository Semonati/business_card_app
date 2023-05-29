import jwtDecode from "jwt-decode";

const TOKEN = "token";

export const setTokenInLocalStorage = (encryptedToken) =>
  localStorage.setItem(TOKEN, encryptedToken);

export const getUser = () => {
  try {
    const user = localStorage.getItem(TOKEN);
    return jwtDecode(user);
  } catch (error) {
    return null;
  }
};

export const removeToker = () => localStorage.removeItem(TOKEN);

export const getToken = () => localStorage.getItem(TOKEN);
