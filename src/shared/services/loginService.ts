import axiosInstance from "../api/httpClient";
import { IUser } from "../interfaces/IUser";

import httpClient from "../api/httpClient";

async function login(login: string, password: string): Promise<{ id: number }> {
  return httpClient.post("/workers/login", { body: { login, password } });
}

async function getUserById(id: number): Promise<IUser> {
  return axiosInstance.get(`/workers/get/${id}`);
}

const LoginService = {
  login,
  getUserById,
};

export default LoginService;
