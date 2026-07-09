import axios from "axios";

const token = window.localStorage.getItem("token");

export const Api = axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
