export default interface ITask {
  worker_id: 0;
  worker_name: string;
  priority: string;
  task_type: string;
  address: string;
  duration: 0;
  status: string;
  order: 0;
  date: string;
  start_datetime: string;
  finish_datetime: string;
}

export interface ITaskStatus {
  planned: number;
  finished: number;
  not_finished: number;
}

export interface ITaskType {
  departure_to_the_point: number;
  training: number;
  delivery: number;
}
