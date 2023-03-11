import http from "./http";
const CATEGORIES_API_URL = "shop/categories"
export const categories = async () => {
  return await http.get(CATEGORIES_API_URL);
}