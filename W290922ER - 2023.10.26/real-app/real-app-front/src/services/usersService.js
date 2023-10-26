import httpService from "./httpService";
import jwtDecode from "jwt-decode";

const TOKEN_KEY = "token";

export function createUser(user) {
  return httpService.post("/users", user);
}

export async function login(credentials) {
  const response = await httpService.post("/auth", credentials);
  localStorage.setItem(TOKEN_KEY, response.data.token);

  return response;
}

export function logout() {
  localStorage.removeItem(TOKEN_KEY);
}

export function getJWT() {
  return localStorage.getItem(TOKEN_KEY);
}

export function getUser() {
  try {
    const token = getJWT();
    return jwtDecode(token);
  } catch {
    return null;
  }
}

const usersService = {
  createUser,
  login,
  logout,
  getUser,
  getJWT,
};

export default usersService;
