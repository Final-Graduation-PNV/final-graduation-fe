import axios from "axios";
import http from "./http";

const SEARCH_API_URL = "shop/search";
const SHOP_PRODUCTS = "shop/products";
const SHOP_CATEGORIES = "categories";
const SHOP_PERIOD_API_URL = "shop/check";
const SHOP_VNPAY_CREATE_API_URL = "shop/vnpay/create";

export const searchShopProduct = async (search) => {
  return await http.get(`${SEARCH_API_URL}?name=${search}`);
};

export const getShopProducts = async () => {
  return await http.get(SHOP_PRODUCTS);
};

export const addNewProduct = async (product) => {
  return await http.post(`${SHOP_PRODUCTS}`, {
    name: product.name,
    price: product.price,
    description: product.description,
    image: product.image,
    quantity: product.quantity,
    category_id: product.category_id,
    shop_id: product.shop_id,
  });
};

export const deleteShopProduct = async (id) => {
  return await http.delete(`${SHOP_PRODUCTS}/${id}`);
};

export const updateShopProduct = async (product) => {
  return await http.put(`${SHOP_PRODUCTS}/${product.id}`, {
    name: product.name,
    price: product.price,
    description: product.description,
    category_id: product.category_id,
    image: product.image,
    quantity: product.quantity,
  });
};

export const getShopCategories = async () => {
  return await http.get(SHOP_CATEGORIES);
};

export const getImageLink = async (file) => {
  return await axios.post(
    "https://api.cloudinary.com/v1_1/dx88ipscr/image/upload",
    { file: file, upload_preset: "gl32w86e", cloud_name: "dx88ipscr" }
  );
};

export const periodShop = async () => {
  return await http.patch(SHOP_PERIOD_API_URL);
};

export const vnPayCreate = async () => {
  return await http.get(SHOP_VNPAY_CREATE_API_URL);
};
