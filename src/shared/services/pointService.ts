import httpClient from "../api/httpClient";
import { ITableDataAddresses } from "../components/Table/components/TableData";

async function getPoints(): Promise<ITableDataAddresses[]> {
  return httpClient.get("/points/get");
}

async function getPointsById(id: number): Promise<ITableDataAddresses> {
  return httpClient.get(`/points/get/${id}`);
}

async function updatePointsById(
  id: number,
  address: string,
  when_connected: string,
  is_delivered: string,
  days_passed: number,
  approved_amount: number,
  given_amount: number
) {
  return httpClient.put(`/points/update/${id}`, {
    query: {
      id,
      address,
      when_connected,
      is_delivered,
      days_passed,
      approved_amount,
      given_amount,
    },
  });
}

async function deletePointsById(id: number) {
  return httpClient.del(`/points/get/${id}`);
}

async function uploadPoints() {
  return httpClient.post("/points/upload", {
    // key1: 'value1', здесь нужно будет файл запихнуть для загрузки
  });
}

async function addPoints(
  id: number,
  address: string,
  when_connected: string,
  is_delivered: string,
  days_passed: number,
  approved_amount: number,
  given_amount: number
) {
  return httpClient.post("/points/add", {
    body: {
      id,
      address,
      when_connected,
      is_delivered,
      days_passed,
      approved_amount,
      given_amount,
    },
  });
}

const PointService = {
  getPoints,
  getPointsById,
  updatePointsById,
  deletePointsById,
  uploadPoints,
  addPoints,
};

export default PointService;
