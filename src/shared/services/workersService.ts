import httpClient from "../api/httpClient";
import IWorker from "../interfaces/IWorker";

async function getWorkers(): Promise<IWorker[]> {
  return httpClient.get(`/workers/get`);
}

async function getWorkersById(id: number): Promise<IWorker> {
  return httpClient.get(`/workers/get/${id}`);
}

async function loginWorkers(
  login: string,
  password: string
): Promise<{ id: number }> {
  return httpClient.post("/workers/login", {
    body: {
      login,
      password,
    },
  });
}

const WorkersService = {
  getWorkersById,
  getWorkers,
  loginWorkers,
};

export default WorkersService;
