import http from "./http";

const DETAIL_PAYMENT_API_URL = "user/detail-payment";
const PAYMENT_API_URL = "user/payment";

export const detalPayment = async (ids) => {
  return await http.patch(DETAIL_PAYMENT_API_URL, { ids: ids });
};

export const payment = async (ids, note, name, phone, city, address) => {
  return await http.patch(PAYMENT_API_URL, {
    ids: ids,
    note,
    name,
    phone,
    city,
    address,
  });
};
