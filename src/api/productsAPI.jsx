import http from "./http";
const PRODUCTS_API_URL = 'user/products'
const SEARCH_PRODUCT_API_URL = PRODUCTS_API_URL + "/search";

export const getData = async () => {
  return await http.get(PRODUCTS_API_URL);
}

export const getDataDetail = async (id) => {
  return await http.get(`${PRODUCTS_API_URL}/${id}`)
}

export const searchProduct = async (searchUser) => {
  return await http.get(`${SEARCH_PRODUCT_API_URL}/key?key=${searchUser}`);
}

export const searchCateCity = async (city, cate) => {
  return await http.get(`${SEARCH_PRODUCT_API_URL}/city-cate?category=${cate}&city=${city}`)
}
