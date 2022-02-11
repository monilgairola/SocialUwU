import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000/",
});

export const login = (data: any) => API.post(`/api/users/login`, data);
export const register = (data: any) => API.post(`/api/users/register`, data);
export const get_user_by_id = (id: string) =>
  API.get(`/api/users/getbyid/${id}`);
