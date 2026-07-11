import axios from "axios";

export const Api = axios.create({
  baseURL: "http://localhost:5000",
});

Api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
