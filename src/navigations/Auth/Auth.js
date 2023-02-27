import { Route, Routes } from "react-router-dom";
import Signin from "../../screens/Auth/Signin";
import Signup from "../../screens/Auth/Signup";
import AddTocart from "../../screens/Home/Addtocart";
import Detail from "../../screens/Home/Detail";
import HomePage from "../../screens/Home/HomePage";
import Payment from "../../screens/Home/Payment";
import SeeShop from "../../screens/Home/SeeShop";
import Product from "../../screens/ProductUser/ProductUser";
import EditProfile from "../../screens/profiles/EditProfile";
import Profile from "../../screens/profiles/Profile";
function Auth() {
  return (
    <Routes>
      <Route index element={<Signin />} />
      <Route path="Sup" element={<Signup />} />
      <Route path="Sin" element={<Signin />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/home/detail" element={<Detail />} />
      <Route path="/home/detail/addtocart" element={<AddTocart />} />
      <Route path="/home/detail/addtocart/payment" element={<Payment />} />
      <Route path="/home/detail/seeshop" element={<SeeShop />} />
      <Route path="/home/profile" element={<Profile />} />
      <Route path="/home/EditProfile" element={<EditProfile />} />
      <Route path="/home/shopOnnwer" element={<Product />} />
      {/* <Route path="/home/detail/seeshop" element={< />} /> */}
    </Routes>
  )
}
export default Auth