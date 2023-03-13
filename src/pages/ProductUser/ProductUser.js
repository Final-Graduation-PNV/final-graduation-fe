import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { React, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { getShopProducts, getShopCategories, deleteShopProduct } from '../../api/shopOnnwerAPI';
import ButtonSubmit from "../../components/ButtonSubmit";
import HeaderShopOwner from "../../components/HeaderShopOwner";
import AddProduct from "./AddProduct";
import EditProduct from "./EditProduct";
import ProductInfo from "./ProductInfo";
import { searchShopProduct } from '../../api/shopOnnwerAPI';

const Product = () => {
    const [products, setProducts] = useState([]);
    const [toggle, setToggle] = useState(false);
    const [modalAddProduct, setModalAddProduct] = useState(false);
    const [categories, setCategories] = useState([]);
    const [modalEditProduct, setModalEditProduct] = useState(false);
    const [editData, setEditData] = useState([]);
    const [search, setSearch] = useState("");
    useEffect(() => {  //Get categories for shop owners
        const getCategories = async () => {
            try {
                const res = await getShopCategories()
                setCategories(res.data.categories)
            } catch (err) {
                console.log("Err get shop categories: ", err)
            }
        }
        getCategories()
    }, [toggle])

    useEffect(() => {   //Get products for shop owners
        const getShopPage = async () => {
            try {
                const res = await getShopProducts()
                setProducts(res.data.products)
            } catch (err) {
                console.log("Err get shop products: ", err)
            }
        }
        getShopPage()
    }, [toggle])


    const handleSearchProduct = async (event) => {
        try {
            if (event.key === 'Enter') {
                const res = await searchShopProduct(search);
                setProducts(res.data.product)
                console.log("aaa",res.data.product)

            }
        }
        catch (err) {
            console.log("Err search product", err)
            
        }

    }


    const deleteHandle = async (id) => {  //Delete product for shop owners
        var isConfirmed = window.confirm("Are you sure for deleting?")
        if (isConfirmed) {
            try {
                const res = await deleteShopProduct(id)
                setToggle(!toggle)
            } catch (err) {
                console.log("Err get shop products: ", err)
            }
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

    return (
        <>
            {modalAddProduct && <AddProduct setToggle={setToggle} toggle={toggle} categories={categories} closeModal={setModalAddProduct} />}
            {modalEditProduct && <EditProduct setToggle={setToggle} toggle={toggle} categories={categories} data={editData} closeModal={setModalEditProduct} />}
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
                                    {/* <input name="search"
                                        placeholder="Search"
                                        onChange={handlerInput}
                                        type="text"
                                        className="product-user__body__right-menu__head__filter-input"
                                    /> */}
                                    <input
                                        className="product-user__body__right-menu__head__filter-input"
                                        onKeyPress={handleSearchProduct}
                                        type="text"
                                        placeholder="Search plan & flower"
                                        value={search}
                                        onChange={(e) => setSearch(e.target.value)}
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
                                            <ProductInfo key={product.id} data={product} onDelete={deleteHandle} closeModal={setModalEditProduct} setEditData={setEditData} />
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