import axios from "axios";

const BASE_URL = process.env.BACKEND_URL || "http://localhost:3000";

export const api = axios.create({
  baseURL: BASE_URL,
});
