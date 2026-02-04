
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";

// Base configuration for all API calls
const baseConfig: AxiosRequestConfig = {
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  //timeout: 15000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};

// Create a single Axios instance for the whole app
const axiosInstance: AxiosInstance = axios.create(baseConfig);

// Request interceptor: attach auth tokens, common headers, logging, etc.
axiosInstance.interceptors.request.use(
  (config) => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("accessToken");
      if (token) {
        config.headers?.set("Authorization", `Bearer ${token}`);
      }
    }
    return config;
  },
  (error: AxiosError) => Promise.reject(error)
);



// Response interceptor: handle common error shapes, logging, etc.
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    // You can do global error handling / logging here
    // Example: handle 401 / 403
    const status = error.response?.status;

    if (status === 401) {
      // Optionally clear auth, redirect to login, etc.
      if (typeof window !== "undefined") {
        // localStorage.removeItem("accessToken");
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;

