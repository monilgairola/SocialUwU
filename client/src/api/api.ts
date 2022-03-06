import axios from "axios";

const API = axios.create({
  baseURL: "https://socialuwu.herokuapp.com/",
});

export const login = (data: any) => API.post(`/api/users/login`, data);
export const register = (data: any) => API.post(`/api/users/register`, data);
export const get_user_by_id = (id: string) =>
  API.get(`/api/users/getbyid/${id}`);
export const update_profile = (data: any, token: any) => API.put(`/api/users/update_profile`, data, {
  headers: {
    "token": token
  }
});
export const follow_user = (id: any, token: any) => API.put(`/api/users/follow/${id}`, {}, {
  headers: {
    "token": token
  }
})
export const get_posts = () => API.get(`/api/posts`);