import httpClient from "../api/httpClient";
import ITask from "../interfaces/ITask";

async function generateTasks(): Promise<ITask[]> {
  return await httpClient.get("/workers/generate_tasks");
}

async function getTasks(worker_id: number): Promise<ITask[]> {
  return await httpClient.get(`/workers/get_tasks/${worker_id}`);
}

const TasksService = {
  generateTasks,
  getTasks,
};

export default TasksService;