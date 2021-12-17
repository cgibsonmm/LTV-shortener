import axios from "axios";
import { BACKEND_URL } from "../endpoint";

export const api = axios.create({
  baseURL: BACKEND_URL,
});
