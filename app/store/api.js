import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_URL; // ✅ Next.js env

// Helper to get token safely (only in browser)
const getBearerToken = () => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("access_token");
    return token ? `Bearer ${token}` : "";
  }
  return "";
};

// Create axios instance
const axiosInstance = axios.create({
  baseURL,
  headers: {
    Authorization: getBearerToken(),
  },
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("access_token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }

    if (config.data instanceof FormData) {
      delete config.headers["Content-Type"];
    } else {
      config.headers["Content-Type"] = "application/json";
    }

    return config;
  },
  (error) => Promise.reject(error),
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const { status, data } = error.response;
      const errorMessage = data?.message || "Some unknown error";

      //   if (status === 401 || errorMessage === "Unauthorized") {
      //     toast.error("Unauthorized request. Logging out...");
      //     if (typeof window !== "undefined") {
      //       localStorage.removeItem("access_token");
      //       window.location.href = "/login";
      //     }
      //   }

      return Promise.reject(new Error(errorMessage));
    }

    return Promise.reject(new Error("Network error"));
  },
);

// Utility methods
export const get = (url, params) => axiosInstance.get(url, { params });
export const post = (url, params) => axiosInstance.post(url, params);
export const put = (url, params) => axiosInstance.put(url, params);
export const del = (url) => axiosInstance.delete(url);

export default axiosInstance;
