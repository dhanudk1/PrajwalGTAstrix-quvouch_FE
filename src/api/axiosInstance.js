import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8087/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

// 🔐 ADD JWT TOKEN AUTOMATICALLY
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
