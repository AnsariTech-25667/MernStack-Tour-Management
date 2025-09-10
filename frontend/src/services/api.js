import axios from "axios";

// Base API URL (from env or default localhost)
const BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api";

// Create axios instance
const api = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});

// -------------------
// AUTH TOKEN HANDLER
// -------------------
export function setAuthToken(token) {
  if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common["Authorization"];
  }
}

// -------------------
// GET
// -------------------
export async function apiGet(path) {
  try {
    const res = await api.get(path);
    return res.data;
  } catch (err) {
    console.error("API GET error:", err.response?.data || err.message);
    throw err;
  }
}

// -------------------
// POST
// -------------------
export async function apiPost(path, data) {
  try {
    const res = await api.post(path, data);
    return res.data;
  } catch (err) {
    console.error("API POST error:", err.response?.data || err.message);
    throw err;
  }
}

// -------------------
// PUT
// -------------------
export async function apiPut(path, data) {
  try {
    const res = await api.put(path, data);
    return res.data;
  } catch (err) {
    console.error("API PUT error:", err.response?.data || err.message);
    throw err;
  }
}

// -------------------
// DELETE
// -------------------
export async function apiDelete(path) {
  try {
    const res = await api.delete(path);
    return res.data;
  } catch (err) {
    console.error("API DELETE error:", err.response?.data || err.message);
    throw err;
  }
}

export default api;
