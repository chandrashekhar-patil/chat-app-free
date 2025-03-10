import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://chat-back-free.onrender.com/api", // Use your Render backend URL
  withCredentials: true, // Send cookies with every request
});

export default axiosInstance;
