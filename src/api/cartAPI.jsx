import http from "./http";

const CART_API_URL = "user/carts";
const ADDTOCART_API_URL = "/user/products";
const CLEAR_ALL_CART_URL = "user/clear-carts";

export const getCarts = async () => {
  return await http.get(CART_API_URL);
};

export const addToCart = async (id, quantity) => {
  return await http.post(`${ADDTOCART_API_URL}/${id}/cart`, { quantity });
};

export const deleteCartById = async (id) => {
  return await http.delete(`${CART_API_URL}/${id}`);
};

export const deleteAllCart = async () => {
  return await http.delete(CLEAR_ALL_CART_URL);
};

export const updateCart = async (id, quantity) => {
  return await http.patch(`${CART_API_URL}/${id}`, { quantity: quantity });
};
