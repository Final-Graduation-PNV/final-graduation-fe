import { faTrashCan } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import product from "../../assets/Image/product.png"
import product1 from "../../assets/Image/product1.png"
import Header from "../../header/Header"
import "../../styles/Home/AddTocart.scss"
function AddTocart() {
  return (
    <div className="container-addtocar">
      <Header />
      <div className="con-addToCart">
        <div className="addToCart">
          <div className="detail-top">
            <div className="detail-top__nav">
              <p>
                <Link to="/home">Marketplace ></Link>
                <Link to="/home/detail">Detail ></Link>
                <Link to="/home/detail/addtocart">Add to cart </Link>
              </p>
            </div>
          </div>
          <div className="table-addCart">
            <div className="addCart-header">
              <p className="addCart-top__id">  <input type="checkbox" /></p>
              <p className="addCart-top__name">Name</p>
              <p className="addCart-top__img">Image</p>
              <p className="addCart-top__price">Price</p>
              <p className="text-quantily addCart-top__quan">Quantity</p>
              <p className="addCart-top__dele">Delete</p>
            </div>
            <div className="addCart-contaniner">
              <p className="addCart-top__id">  <input type="checkbox" /></p>
              <p className="addCart-top__name">Sago Palm</p>
              <p className="addCart-top__img"><img src={product} /></p>
              <p className="addCart-top__price">315.000 vnd</p>
              <p className="text-quantily addCart-top__quan">
                <p className="quantily__plus">+</p>
                <p className="quantily__number">1</p>
                <p className="quantily__minus">-</p>
              </p>
              <p className="addCart-top__dele"><FontAwesomeIcon className="faTrashCan" icon={faTrashCan} /></p>
            </div>
            <div className="addCart-contaniner">
              <p className="addCart-top__id">  <input type="checkbox" /></p>
              <p className="addCart-top__name">Sago Palm</p>
              <p className="addCart-top__img"><img src={product1} /></p>
              <p className="addCart-top__price">315.000 vnd</p>
              <p className="text-quantily addCart-top__quan">
                <p className="quantily__plus">+</p>
                <p className="quantily__number">1</p>
                <p className="quantily__minus">-</p>
              </p>
              <p className="addCart-top__dele"><FontAwesomeIcon className="faTrashCan" icon={faTrashCan} /></p>
            </div>
            <div className="addCart-contaniner">
              <p className="addCart-top__id">  <input type="checkbox" /></p>
              <p className="addCart-top__name">Sago Palm</p>
              <p className="addCart-top__img"><img src={product} /></p>
              <p className="addCart-top__price">315.000 vnd</p>
              <p className="text-quantily addCart-top__quan">
                <p className="quantily__plus">+</p>
                <p className="quantily__number">1</p>
                <p className="quantily__minus">-</p>
              </p>
              <p className="addCart-top__dele"><FontAwesomeIcon className="faTrashCan" icon={faTrashCan} /></p>
            </div>

          </div>
          <div className="purchase">
            <div className="purchase-dete">
              <p className="purchase__dete">  <input type="checkbox" /> Xóa tất cả</p>
            </div>
            <div className="purchase-total">
              <div className="total">
                <p className="purchase__total">Total:</p>
                <p className="purchase__price">1260000</p>
              </div>
              <Link to="payment"><button className="purchase__btn">Purchase</button></Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
export default AddTocart