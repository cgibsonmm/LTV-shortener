import { api } from "./config";

export const post = async (payload) => {
  try {
    const res = await api.post("/short_urls.json", payload);
    return res.data;
  } catch (error) {
    console.error(error.response?.status || error);
    return error.response?.data || error;
  }
};
