import axiosInstance from "../../api/axiosInstance";

// ✅ GET all businesses
export const getBusinessesApi = async () => {
  const response = await axiosInstance.get("/business");
  return response.data;
};

// ✅ GET business by ID
export const getBusinessByIdApi = async (id) => {
  const response = await axiosInstance.get(`/business/${id}`);
  return response.data;
};

// ✅ CREATE business
export const createBusinessApi = async (data) => {
  const response = await axiosInstance.post("/business", data);
  return response.data;
};

// ✅ UPDATE business
export const updateBusinessApi = async ({ id, data }) => {
  const response = await axiosInstance.put(`/business/${id}`, data);
  return response.data;
};

// ✅ DELETE business
export const deleteBusinessApi = async (id) => {
  await axiosInstance.delete(`/business/${id}`);
  return id;
};
