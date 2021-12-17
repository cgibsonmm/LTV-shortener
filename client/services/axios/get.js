import { api } from "./config";
import { BACKEND_URL } from "../endpoint";

export const fetchTop100 = async () => {
  try {
    const res = await api(BACKEND_URL);
    return res.data.urls;
  } catch (error) {
    console.error(error.response.status);
    return error.response.data;
  }
};
