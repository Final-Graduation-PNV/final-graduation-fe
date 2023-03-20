import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";

import Signin from "../pages/Auth/Signin";
import Signup from "../pages/Auth/Signup";
import Cart from "../pages/Cart/Cart";
import Detail from "../pages/Detail/Detail";
import HomePage from "../pages/HomePage";
import ShopMap from "../pages/Map/Map";
import Logout from "../pages/Modals/Logout";
import Payment from "../pages/Payment/Payment";
import Product from "../pages/ProductUser/ProductUser";
import EditProfile from "../pages/profiles/EditProfile";
import Profile from "../pages/profiles/Profile";
import SeeShop from "../pages/SeeShop/SeeShop";
import { isLoggedInSelector } from "../redux/slices/authSlice";

function Auth() {
  const isUserLoggedIn = useSelector(isLoggedInSelector)
  return (
    <Routes>
      {
        isUserLoggedIn
          ? (
            <>
              <Route path="" element={<HomePage />} />
              <Route path="/detail/:id" element={<Detail />} />
              <Route path="/detail/:id/cart" element={<Cart />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/seeshop" element={<SeeShop />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/EditProfile" element={<EditProfile />} />
              <Route path="/shopOnnwer" element={<Product />} />
              <Route path="/searchMap" element={<ShopMap/>} />
              <Route path="*" element={<HomePage />} />
            </>
          )
          : (
            <>
              {/* <Route path="comfirmOtp" element={<ConfirmOTP />} /> */}
              <Route path="logout" element={<Logout />} />
              <Route path="sign-up" element={<Signup />} />
              <Route path="sign-in" index element={<Signin />} />
              <Route path="*" element={<Signin />} />
            </>
          )
      }
      {/* <Route path="/home/detail/seeshop" element={< />} /> */}
    </Routes>
  )
}
export default Auth