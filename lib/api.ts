import axios, { AxiosInstance, InternalAxiosRequestConfig } from "axios";

// Create Axios instance with dynamic base URL
const getBaseURL = (): string => {
  // Check for environment variable first
  if (typeof window !== "undefined" && process.env.NEXT_PUBLIC_API_URL) {
    return process.env.NEXT_PUBLIC_API_URL;
  }

  // Auto-detect based on environment
  if (typeof window !== "undefined") {
    const hostname = window.location.hostname;
    if (hostname === "localhost" || hostname === "127.0.0.1") {
      return "http://localhost:3000/api";
    }
    // Production URL
    return `https://${hostname}/api`;
  }

  return "/api";
};

const api: AxiosInstance = axios.create({
  baseURL: getBaseURL(),
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor: Add auth tokens from localStorage
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("authToken");
      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor: Handle 401 errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Clear auth token
      if (typeof window !== "undefined") {
        localStorage.removeItem("authToken");
        // Redirect to login page if it exists
        // window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  }
);

export default api;


