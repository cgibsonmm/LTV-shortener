import axios from "axios";

const BASE_URL = process.env.BACKEND_URL || "localhost:3000";

export const api = axios.create({
  baseURL: BASE_URL,
});

export * from "./get";
export * from "./post";
