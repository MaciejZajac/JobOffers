import axios from "axios";
import config from "../global/config";

export const api =
  process.env.NODE_ENV === "production" ? config.prodApi : config.localApi;

export const axiosInstance = axios.create({
  baseURL: api,
  timeout: 1000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});
