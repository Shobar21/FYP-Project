import axios from "axios";

const productsAPI = "http://localhost:5000/products/get";

export const getProducts = async (skip, limit) => {
  const response = await axios.get(productsAPI, {
    params: {
      skip,
      limit,
    },
  });
  return response.data;
};
