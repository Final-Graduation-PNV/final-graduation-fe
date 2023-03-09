import http from "./http";

const SIGNIN_API_URL = "login";
const SIGNUP_API_URL = "register";
const RESEND_OTP_API_URL = "resend-otp";
const VERIFY_OTP_API_URL = 'email/verify-otp'
const LOGOUT_OTP_API_URL = ''

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

export const sendOTP = async (email) => {
  return await http.post(RESEND_OTP_API_URL, { email })
}

export const verifyOTP = async (id, otp) => {
  return await http.post(`${VERIFY_OTP_API_URL}/${id}`, { otp })
}