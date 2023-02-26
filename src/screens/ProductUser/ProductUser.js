import { React, useEffect, useState } from "react";
import axios from "axios";
import AddProduct from "./AddProduct";
import ProductInfo from "./ProductInfo";
import FormInput from "../../components/FormInput";
import HeaderShopOwner from "../../components/HeaderShopOwner";
import ButtonSubmit from "../../components/ButtonSubmit";
import EditProduct from "./EditProduct";

const Product = () => {
    const [product, setProduct] = useState([]);
    const [toggle, setToggle] = useState(false);
    const [modalAddProduct, setModalAddProduct] = useState(false);
    const [modalEditProduct, setModalEditProduct] = useState(false);
    const [editData, setEditData] = useState([]);




    useEffect(() => {
        axios
            .get("https://61ce733e7067f600179c5ea7.mockapi.io/mn/products")
            .then((res) => {
                setProduct(res.data);
            })
            .catch(err => {
                console.log("Err: ", err)
            })
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
    const handlerInput = (e) => {
        const { name, value } = e.target;
        console.log(product);
        setProduct({
            ...product,
            [name]: value,
        });
    };

    return (
        <>
            {modalAddProduct && <AddProduct closeModal={setModalAddProduct} />}
            {modalEditProduct && <EditProduct data={editData} closeModal={setModalEditProduct} />}
            <div className="product-user">
                <div className="product-user__header"><HeaderShopOwner /></div>
                <hr></hr>
                <div className="product-user__body">
                    <div className="product-user__body__left-menu">
                        <div className="product-user__body__left-menu__avata">
                            <img className="product-user-img" src="/image/avata.png" alt="" />
                            <h3>Your market place</h3>
                            <p>Ngô Thị Tròn</p>
                        </div>
                        <div className="product-user__body__left-menu__menu">
                            <ul>
                                <li><img className="product-user-icon" src="/image/Yourpro.png" alt="" /> Your product</li>
                                <li><img className="product-user-icon" src="/image/manacus.png" alt="" /> Manage customers</li>
                                <li><img className="product-user-icon" src="/image/manare.png" alt="" /> Manage revenue</li>
                                <li><img className="product-user-icon" src="/image/manaor.png" alt="" /> Manage order</li>
                                <li><img className="product-user-icon" src="/image/home.png" alt="" /> Home</li>
                                <li><img className="product-user-icon" src="/image/Logout.png" alt="" /> Log out</li>
                            </ul>

                        </div>
                    </div>
                    <div className="product-user__body__right-menu">
                        <div className="right-menu">
                            <h1>Your products</h1>

                            <div className="product-user__body__right-menu__head">
                                <input name="filter"
                                    placeholder="Filter"
                                    onChange={handlerInput}
                                    type="text"
                                    className="product-user__body__right-menu__head__filter"
                                />
                                <ButtonSubmit className="product-user__body__right-menu__head__add-button" title="Add product" onClick={() => setModalAddProduct(true)} />
                            </div>
                            <div className="product-user__body__right-menu__body">
                                <div>ID</div>
                                <div>Name</div>
                                <div>Image</div>
                                <div>Type</div>
                                <div>Price</div>
                                <div>Description</div>
                                <div>Quantity</div>
                                <div>Action</div>
                            </div>
                            <hr />
                            <div className="product-user__body__right-menu__list">
                                {product.map((product) => (
                                    <div>
                                        <ProductInfo key={product.id} data={product} onDelete={deleteHandle} closeModal={setModalEditProduct} setEditData={setEditData}/>
                                        <hr />
                                    </div>

                                ))}
                            </div>

                        </div>

                    </div>
                </div>

            </div></>

    )
};
export default Product;