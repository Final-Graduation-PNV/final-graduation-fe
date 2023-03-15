import "../../styles/Cart/AddTocart.scss"

import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { deleteAllCart } from "../../api/cartAPI"

import { useState } from "react"
import { detalPayment } from "../../api/paymentAPI"
import cartProduct from "../../assets/Image/cartProduct.png"
import CartTableRow from "../../components/features/cart/CartTableRow"
import HeaderTableCart from "../../components/features/cart/HeaderTableCart"
import RouteCart from "../../components/features/cart/RouteCart"
import useCarts from "../../hooks/useCarts"
import Header from "../../layout/header/Header"
// import { setPaymentList } from "../../redux/slices/paymentSlice"

import ls from 'localstorage-slim'

function Cart() {
  const { cart, refreshCart, getCart, loadCartToggle, getTotal } = useCarts();
  const [checked, setChecked] = useState([]);

  localStorage.setItem("checked", checked)
  // localStorage.setItem("data", paying)
  // console.log("paying: ", paying)
  // Lấy chuỗi từ localStorage
  // const localStorageData = localStorage.getItem("data");

  // // Chuyển đổi chuỗi thành mảng các đối tượng
  // const arrayData = localStorageData.split(',').map(item => JSON.parse(item));

  // // Hiển thị mảng dữ liệu
  // console.log(arrayData);



  // const dispatch = useDispatch();

  // dispatch(setChecked(checked))
  const navigate = useNavigate()

  useEffect(() => {
    getCart()
  }, [loadCartToggle])

  const deleteAllHandler = async () => {
    const res = await deleteAllCart()
    refreshCart()
  }

  const paymentHandler = async () => {
    try {
      const res = await detalPayment(checked)
      navigate("/payment");
      if (res.data.paying) {
        res.data.paying.map((pro, ids) => {
          if (pro.user_name == null && pro.cart_note == null && pro.user_address == null && pro.user_city && pro.user_phone) {
            console.log(pro)
            const user = ls.set("name", pro.user_name, { encrypt: true });
            const note = ls.set("note", pro.cart_note, { encrypt: true });
            const address = ls.set("address", pro.user_address, { encrypt: true });
            const city = ls.set("city", pro.user_city, { encrypt: true });
            const phone = ls.set("phone", pro.user_phone, { encrypt: true });
          }
          else {
            ls.get("city", { encrypt: true })
            ls.get("phone", { encrypt: true })
            ls.get("address", { encrypt: true })
          }
        })
      }

      console.log("res card2: ", res.data.paying)
      ls.set("data", res.data.paying, { encrypt: true });
    } catch (e) {
      console.log("Err payment: ", e)
    }
  }


  return (
    <div className="container-addtocar">
      <Header />
      <div className="con-addToCart">
        <div className="addToCart">
          <RouteCart />
          <div className="table-addCart">
            <HeaderTableCart />

            {cart.length ? (
              cart.map((pro, idx) =>
              (
                <CartTableRow key={idx} product={pro} setCheckedCart={setChecked} checkedCart={checked} />
              ))
            ) : (
              <div className="noCart">
                <img src={cartProduct} />
                <p>Your shopping cart is empty</p>
              </div>
            )
            }
          </div>
          < div className="purchase">
            <div className="purchase-dete">
              <div className="purchase__dete">
                <input type="checkbox" />Select All
                <button onClick={deleteAllHandler}>Delete All</button>
              </div>
            </div>
            <div className="purchase-total">
              <div className="total">
                <p className="purchase__total">Total:</p>
                <p className="purchase__price">{new Intl.NumberFormat().format(getTotal())} vnđ</p>
              </div>
              <button className="purchase__btn" onClick={() => paymentHandler()}>Purchase</button>
            </div>
          </div>
        </div>
      </div>
    </div >

  )
}
export default Cart