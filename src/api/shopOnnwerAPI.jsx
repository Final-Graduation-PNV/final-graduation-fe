import http from "./http";

const SEARCH_API_URL = "shop/search";

export const searchProduct = async () => {
  return await http.get(SEARCH_API_URL + "?name=")
}