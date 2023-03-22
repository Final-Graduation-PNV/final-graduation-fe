import http from "./http";

const SIGNIN_API_URL = "login";
const SIGNUP_API_URL = "register";
const RESEND_OTP_API_URL = "users/resend-otp";
const VERIFY_OTP_API_URL = "users";
const LOGOUT_OTP_API_URL = "users";
const CONFIRM_FORGOT_API_URL = "users ";
const SIGNUP_BESHOP_API_URL = "user/be-shop";
const SEEPROFILE = "user/profile";
const EDITPROFILE = "user/profile";
const FORGOT_PASSWORD_API_URL = "users/forgot";

export const signin = async (email, password) => {
  return await http.post(SIGNIN_API_URL, {
    email,
    password,
  });
};

export const signup = async (name, email, password, password_confirmation) => {
  return await http.post(SIGNUP_API_URL, {
    name,
    email,
    password,
    password_confirmation,
  });
};

export const sendEmailOTP = async (email) => {
  return await http.post(RESEND_OTP_API_URL, { email });
};

export const verifyOTP = async (id, otp) => {
  return await http.post(`${VERIFY_OTP_API_URL}/${id}/verify`, { otp });
};

export const logout = async (id) => {
  return await http.post(`${LOGOUT_OTP_API_URL}/${id}/cancel`);
};

export const shopBe = async (id) => {
  return await http.post(SIGNUP_BESHOP_API_URL, { id });
};
export const seeProfile = async () => {
  return await http.get(SEEPROFILE);
};
export const editProfile = async (data) => {
  return await http.patch(EDITPROFILE, data);
};

export const forgotPassword = async (email) => {
  return await http.patch(FORGOT_PASSWORD_API_URL, { email });
};

export const confirmOTPforgot = async (id, otp) => {
  return await http.get(`users/${id}/forgot`, { otp });
};
