// taskApi.ts
import axios from "axios";

const baseURL = "http://127.0.0.1:3000/task";

const taskApi = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getTasks = () => taskApi.get("/");
export const createTask = (data: any) => {
  taskApi.post("/", data);
};
export const updateTask = (id: number, data: any) =>
  taskApi.put(`/${id}`, data);
export const deleteTask = (id: number) => taskApi.delete(`/${id}`);
export const doneTask = (id: number, done: boolean) =>
  taskApi.put(`/${id}/done`, done);
