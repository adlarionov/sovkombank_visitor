export interface ITaskCard {
  id: number;
  taskNumber: number;
  priority: "Высокий" | "Низкий";
  time: string;
  title: string;
  address: string;
  comment: string;
  employee: string;
}
