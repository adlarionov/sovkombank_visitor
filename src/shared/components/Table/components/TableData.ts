export const tableDataTasks: ITableData[] = [
  {
    type: 1,
    name: "Выезд на точку для стимулирования выдач",
    priority: "Высокий",
    time: "4 часа",
    firstCondition:
      "Дата выдачи последней карты более 7 дней назад, при этом есть одобренные заявки",
    secondCondition: "Дата выдачи последней карты более 14 дней назад",
    employeeLevels: ["Сеньёр"],
  },
  {
    type: 2,
    name: "Обучение агента",
    priority: "Средний",
    time: "2 часа",
    firstCondition:
      "Отношение кол-ва выданных карт к одобренным заявкам менее 50%, если выдано больше 0 карт",
    secondCondition: "-",
    employeeLevels: ["Сеньёр", "Мидл"],
  },
  {
    type: 3,
    name: "Доставка карт и материалов",
    priority: "Низкий",
    time: "1.5 часа",
    firstCondition: "Точка подключена вчера",
    secondCondition: "Карты и материалы не доставлялись",
    employeeLevels: ["Джун"],
  },
];

export interface ITableData {
  type: number;
  name: string;
  priority: string;
  time: string;
  firstCondition: string;
  secondCondition: string;
  employeeLevels: string[];
}

export const tableDataAddresses = [
  {
    id: "43",
    address: "ул. им. Героя Аверкиева А.А., д. 8/1 к. мая, кв. 268",
    when_connected: "Давно",
    is_delivered: "Да",
    days_passed: "0",
    approved_amount: "3",
    given_amount: "4",
  },
  {
    id: "13",
    address: "ул. Уральская, д. 162",
    when_connected: "Вчера",
    is_delivered: "Да",
    days_passed: "15",
    approved_amount: "22",
    given_amount: "16",
  },
  {
    id: "4",
    address: "ул. им. Героя Аверкиева А.А., д. 8/1 к. мая, кв. 268",
    when_connected: "Давно",
    is_delivered: "Да",
    days_passed: "0",
    approved_amount: "3",
    given_amount: "4",
  },
  {
    id: "45",
    address: "ул. им. Героя Аверкиева А.А., д. 8/1 к. мая, кв. 268",
    when_connected: "Давно",
    is_delivered: "Да",
    days_passed: "0",
    approved_amount: "3",
    given_amount: "4",
  },
];

export interface ITableDataAddresses {
  id: number;
  address: string;
  when_connected: string;
  is_delivered: string;
  days_passed: number;
  approved_amount: number;
  given_amount: number;
}

export const tableDataEmployees = [
  {
    number: "1",
    credential: "Дерягин Никита Владимирович",
    address: "Краснодар, Красная, д. 139",
    grade: "Сеньёр",
  },
  {
    number: "2",
    credential: "Бобылёв Ипполит Альбертович",
    address: "Краснодар, В.Н. Мачуги, 41",
    grade: "Мидл",
  },
  {
    number: "3",
    credential: "Николаев Азарий Платонович",
    address: "Краснодар, Красных Партизан, 321",
    grade: "Джун",
  },
];

export interface ITableDataEmployees {
  number: string;
  credential: string;
  address: string;
  grade: string;
}
