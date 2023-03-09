import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from "axios";
import { React, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import ButtonSubmit from "../../components/ButtonSubmit";
import HeaderShopOwner from "../../components/HeaderShopOwner";
import AddProduct from "./AddProduct";
import EditProduct from "./EditProduct";
import ProductInfo from "./ProductInfo";
const Product = () => {
    const [products, setProducts] = useState([]);
    const [toggle, setToggle] = useState(false);
    const [modalAddProduct, setModalAddProduct] = useState(false);
    const [categories, setCategories] = useState([]);
    const [modalEditProduct, setModalEditProduct] = useState(false);
    const [editData, setEditData] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem("token");
        axios.get("http://ec2-54-193-79-196.us-west-1.compute.amazonaws.com/api/shop/categories", {

            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        })
            .then((res) => {
                setCategories(res.data.categories);

            })
            .catch(err => {
                console.log("Err get product: ", err)
            })
    }, [toggle]);

    useEffect(() => {

        const shop_id = localStorage.getItem("user_id");
        const token = localStorage.getItem("token");

        console.log("user id:", shop_id);
        console.log("User token", token)
        axios.get("http://ec2-54-193-79-196.us-west-1.compute.amazonaws.com/api/shop/products", {
            // params: { shop_id },
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        }
        )
            .then((res) => {
                setProducts(res.data.products);

            })
            .catch(err => {
                console.log("Err get product: ", err)
            })
    }, [toggle]);

    const deleteHandle = async (id) => {

        var isConfirmed = window.confirm("Are you sure for deleting?")
        if (isConfirmed) {
            const token = localStorage.getItem("token");

            axios
                .delete("http://ec2-54-193-79-196.us-west-1.compute.amazonaws.com/api/shop/products/" + id,
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token}`,
                        }
                    }
                )
                .then(function (response) {
                    console.log(response);

                    setToggle(!toggle)
                })
        }
    }
    const handlerInput = (e) => {
        const { name, value } = e.target;
        console.log(products);
        setProducts({
            ...products,
            [name]: value,
        });
    };
    const handleSearch = (e) => {
        axios.get(`http://ec2-54-193-79-196.us-west-1.compute.amazonaws.com/api/shop/products/search/`)
    }

    return (
        <>
            {modalAddProduct && <AddProduct toggle={setToggle} categories={categories} closeModal={setModalAddProduct} />}
            {modalEditProduct && <EditProduct toggle={setToggle} categories={categories} key={editData.id} data={editData} closeModal={setModalEditProduct} />}
            <div className="product-user">
                <div className="product-user__header"><HeaderShopOwner /></div>
                <div className="product-user__body">
                    <div className="product-user__body__left-menu">
                        <div className="product-user__body__left-menu__avata">
                            <img className="product-user-img" src="/image/avata.png" alt="" />
                            <h3>Your market place</h3>
                            <p>Ngô Thị Tròn</p>
                        </div>
                        <div className="product-user__body__left-menu__menu">
                            <ul>
                                <li><a href="#"><img className="product-user-icon" src="/image/Yourpro.png" alt="" />Your product</a></li>
                                <li><a href="#"><img className="product-user-icon" src="/image/manacus.png" alt="" />Manage customers</a></li>
                                <li><a href="#"><img className="product-user-icon" src="/image/manare.png" alt="" />Manage revenue</a></li>
                                <li><a href="#"><img className="product-user-icon" src="/image/manaor.png" alt="" />Manage order</a></li>
                                <Link to="/home" style={{ textDecoration: "none", color: "black", fontSize: 15, fontWeight: 600 }}><li><img className="product-user-icon" src="/image/home.png" alt="" />Home</li></Link>
                            </ul>

                        </div>
                    </div>
                    <div className="product-user__body__right-menu">
                        <div className="right-menu">
                            <h2>Your products</h2>

                            <div className="product-user__body__right-menu__head">
                                <div className="product-user__body__right-menu__head__filter">
                                    <FontAwesomeIcon className="product-user__body__right-menu__head__filter-icon" icon={faFilter} />
                                    <input name="filter"
                                        placeholder="Filter"
                                        onChange={handlerInput}
                                        type="text"
                                        className="product-user__body__right-menu__head__filter-input"
                                    />
                                </div>

                                <ButtonSubmit className="product-user__body__right-menu__head__add-button" title="Add product" onClick={() => setModalAddProduct(true)} />
                            </div>
                            <div className="product-user__body__right-menu__title">
                                <div>ID</div>
                                <div>Name</div>
                                <div>Image</div>
                                <div>Type</div>
                                <div>Price</div>
                                <div>Description</div>
                                <div>Quantity</div>
                                <div>Action</div>
                            </div>
                            {
                                products ? (
                                    <div className="product-user__body__right-menu__list">
                                        {products.map((product) => (
                                            <div>
                                                <ProductInfo key={product.id} data={product} onDelete={deleteHandle} closeModal={setModalEditProduct} setEditData={setEditData} />
                                                <hr />
                                            </div>
                                        ))
                                        }
                                    </div>
                                ) : (<div>Please, add product</div>)
                            }

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};
export default Product;