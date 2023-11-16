import httpClient from "../api/httpClient";
import IManager from "../interfaces/IManager";

async function getManagers(): Promise<IManager[]> {
  return httpClient.get("/managers/get");
}

async function getManagersById(managerId: number): Promise<IManager> {
  return httpClient.get(`/managers/get/${managerId}`);
}

const ManagersService = {
  getManagers,
  getManagersById,
};

export default ManagersService;
