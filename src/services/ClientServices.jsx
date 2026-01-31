import axiosInstance from "../api/axiosInstance";

export const createClientApi = async (clientData) => {
  const response = await axiosInstance.post("/clients", clientData);
  return response.data;
};
