import http from "./http";

const SIGNIN_API_URL = "login";
const SIGNUP_API_URL = "register";


export const signin = async (email, password) => {
  return await http.post(SIGNIN_API_URL, { email, password })
}

export const signup = async (name, email, password, password_confirmation, address, city) => {
  return await http.post(SIGNUP_API_URL, {
    name,
    email,
    password,
    password_confirmation,
    address,
    city
  })
}