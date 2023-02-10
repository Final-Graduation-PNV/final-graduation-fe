import { Route, Routes } from "react-router-dom";
import Signin from "../../screens/Auth/Signin";
import Signup from "../../screens/Auth/Signup";
function Auth() {
  return (
    <Routes>
      <Route index element={<Signin />} />
      <Route path="Sup" element={<Signup />} />
      <Route path="Sin" element={<Signin />} />
    </Routes>
  )
}
export default Auth