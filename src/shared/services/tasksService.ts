import httpClient from "../api/httpClient";
import ITask, { ITaskStatus, ITaskType } from "../interfaces/ITask";

// /workers/generate_tasks
// /workers/get_tasks/2
// /workers/start_task
// /workers/finish_task
// /workers/tasks_status_info
// /workers/get_kpi_by_id/2
// /workers/get_kpi
// /workers/get_tasks_info_by_type

async function generateTasks(): Promise<ITask[]> {
  return await httpClient.get("/workers/generate_tasks");
}

async function getTasks(worker_id: number): Promise<ITask[]> {
  return await httpClient.get(`/workers/get_tasks/${worker_id}`);
}

async function startTask(worker_id: number, order: number): Promise<void> {
  return await httpClient.post(`/workers/start_task`, {
    body: {
      worker_id: worker_id,
      order: order,
    },
  });
}

async function finishTask(worker_id: number, order: number): Promise<void> {
  return await httpClient.post(`/workers/finish_task`, {
    body: {
      worker_id: worker_id,
      order: order,
    },
  });
}

async function getTasksStatusInfo(): Promise<ITaskStatus> {
  return await httpClient.get("/workers/tasks_status_info");
}

async function getKpi(): Promise<void> {
  return await httpClient.get(`/workers/get_kpi`);
}

async function getKpiById(
  worker_id: number
): Promise<{ kpi: number; updated: string }> {
  return await httpClient.get(`/workers/get_kpi_by_id/${worker_id}`);
}

async function getTasksInfoByType(): Promise<ITaskType> {
  return await httpClient.get("/workers/get_tasks_info_by_type");
}

const TasksService = {
  generateTasks,
  getTasks,
  startTask,
  finishTask,
  getTasksStatusInfo,
  getKpiById,
  getKpi,
  getTasksInfoByType,
};

export default TasksService;
