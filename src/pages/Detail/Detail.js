import "../../styles/Detail/Detail.scss"

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { getDataDetail } from "../../api/productsAPI"
import CommentReview from "../../components/features/detail/CommentReview"
import ProductDetail from "../../components/features/detail/ProductDetail"
import RouteDetail from "../../components/features/detail/RouteDetail"
import Shop from "../../components/features/detail/Shop"

import useCarts from "../../hooks/useCarts"
import Header from "../../layout/header/Header"


function Detail() {

  const [detailProduct, setDetailProduct] = useState([]);

  const { id } = useParams();
  const { refreshCart, loadCartToggle, getCart } = useCarts()

  useEffect(() => {
    const getDetail = async () => {
      try {
        const res = await getDataDetail(id);
        setDetailProduct(res.data.product)
      }
      catch (err) {
        console.log("Err data detail:", err)
      }
    }
    getDetail()
  }, [])

  useEffect(() => {
    getCart()
  }, [loadCartToggle])

  return (
    detailProduct
      ? (
        <div className="container" >
          <Header />
          <div className="detail">
            <RouteDetail id={id} />
            {
              detailProduct.map((pro, id) => {
                return (
                  <div className="container-detail" key={pro.id}>
                    <ProductDetail product={pro} key={pro.id} />
                    <Shop product={pro} />
                    <div className="product-des">
                      <p className="product-des__tittle">Detail Products</p>
                      <p className="product-des__des">{pro.description}</p>
                    </div>
                    <div className="review">
                      <p className="review__tittle">Review Products</p>
                      <CommentReview />
                      <CommentReview />
                      <CommentReview />
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div >
      )
      : (
        <div>Loading...</div>
      ))
}
export default Detail