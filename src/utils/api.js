import axios from "axios";
import { refreshThunk } from "../features/auth/authSlice";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true, // needed for refresh cookie
});

let _store;

export const injectStore = (store) => {
  _store = store;

  // Attach access token on every request
  api.interceptors.request.use((config) => {
    const token = _store.getState().auth.accessToken;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  // Prevent multiple refresh calls in parallel
  let refreshPromise = null;

  api.interceptors.response.use(
    (response) => response,
    async (error) => {
      const original = error.config;

      if (error?.response?.status === 401 && !original._retry) {
        original._retry = true;

        if (!refreshPromise) {
          refreshPromise = _store
            .dispatch(refreshThunk())
            .unwrap()
            .finally(() => {
              refreshPromise = null;
            });
        }

        try {
          await refreshPromise;
          // retry the original request (request interceptor adds new token)
          return api(original);
        } catch (e) {
          // refresh failed, user will be treated as logged out
          return Promise.reject(error);
        }
      }

      return Promise.reject(error);
    },
  );
};
