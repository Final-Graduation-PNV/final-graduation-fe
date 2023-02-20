import { React, useEffect, useState } from "react";
import axios from "axios";
import Header from "../../components/header";
import AddProduct from "./AddProduct";
import ProductInfo from "./ProductInfo";

const Product = () => {
    const [product, setProduct] = useState([]);
    const [toggle, setToggle] = useState(false)

    useEffect(() => {
        axios
            .get("https://61ce733e7067f600179c5ea7.mockapi.io/mn/products")
            .then((res) => {
                setProduct(res.data);
            });
    }, [toggle]);

    const deleteHandle = async (id) => {
        var isConfirmed = window.confirm("Are you sure for deleting?")
        if (isConfirmed) {
            axios
                .delete("https://61ce733e7067f600179c5ea7.mockapi.io/mn/products/" + id)
                .then(function (response) {
                    console.log(response);
                    setToggle(!toggle)
                })
        }
    }
    return (
        <div className="product">
            <div className="product__header"><Header /></div>
            <hr></hr>
            {/* <AddProduct/> */}
            <div className="product__body">

                <div className="product__body__left-menu">
                    <div className="product__body__left-menu__avata">
                        <img className="product-img" src="/image/avata.png" alt="" />
                        <h3>Your market place</h3>
                        <p>Ngô Thị Tròn</p>
                    </div>
                    <div className="product__body__left-menu__menu">
                        <ul>
                            <li><img className="product-icon" src="/image/Yourpro.png" alt="" /> Your product</li>
                            <li><img className="product-icon" src="/image/manacus.png" alt="" /> Manage customers</li>
                            <li><img className="product-icon" src="/image/manare.png" alt="" /> Manage revenue</li>
                            <li><img className="product-icon" src="/image/manaor.png" alt="" /> Manage order</li>
                            <li><img className="product-icon" src="/image/home.png" alt="" /> Home</li>
                            <li><img className="product-icon" src="/image/Logout.png" alt="" /> Log out</li>
                        </ul>

                    </div>
                </div>
                <div className="product__body__right-menu">
                    <h1>Your products</h1>

                    <div className="product__body__right-menu__head">
                        <input placeholder="Filter"></input>
                        <AddProduct />
                    </div>
                    <div className="product__body__right-menu__body">
                        <div>ID</div>
                        <div>Name</div>
                        <div>Image</div>
                        <div>Type</div>
                        <div>Price</div>
                        <div>Description</div>
                        <div>Quantity</div>
                        <div>Action</div>
                    </div>
                    <div className="product__body__right-menu__list">
                        {product.map((product) => (
                            <ProductInfo key={product.id} data={product} onDelete={deleteHandle} />
                        ))}
                    </div>

                </div>
            </div>

        </div>
    )
};
export default Product;