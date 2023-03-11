import "../../styles/Cart/AddTocart.scss"

import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { deleteAllCart } from "../../api/cartAPI"

import cartProduct from "../../assets/Image/cartProduct.png"
import CartTableRow from "../../components/features/cart/CartTableRow"
import HeaderTableCart from "../../components/features/cart/HeaderTableCart"
import RouteCart from "../../components/features/cart/RouteCart"
import useCarts from "../../hooks/useCarts"
import Header from "../../layout/header/Header"

function Cart() {
  const { cart, refreshCart, getCart, loadCartToggle, getTotal } = useCarts();
  const navigate = useNavigate()

  useEffect(() => {
    getCart()
  }, [loadCartToggle])

  const deleteAllHandler = async () => {
    const res = await deleteAllCart()
    refreshCart()
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
                <CartTableRow key={idx} product={pro} />
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
              <button className="purchase__btn" onClick={() => navigate("/payment")}>Purchase</button>
            </div>
          </div>
        </div>
      </div>
    </div >

  )
}
export default Cart