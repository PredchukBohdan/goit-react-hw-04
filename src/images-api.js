import axios from "axios";

const token = "qfhxlVsYGzOWsbabUCgbc1zMafzxqBUUe37J4jgjSP0";

const api = axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: `Client-ID ${token}`,
  },
});

export const fetchImagesData = async (query, page, signal) => {
  const response = await api.get("/search/photos", {
    params: {
      query,
      page,
      per_page: 15,
      signal,
    },
  });
  return response;
};
