import React, { useState, useEffect} from 'react';
import axios from "axios";

import DashboardHeader from '../../components/DashboardHeader';

import all_orders from '../../constants/orders';
import { calculateRange, sliceData } from '../../utils/table-pagination';

import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";





function Categories() {
    const [search, setSearch] = useState('');
    const [orders, setOrders] = useState(all_orders);
    const [page, setPage] = useState(1);
    const [pagination, setPagination] = useState([]);

    const [categories, setCategories] = useState([]);

    const [toggle, setToggle] = useState(false);
    useEffect(() => {

        const shop_id = localStorage.getItem("user_id");
        const token = localStorage.getItem("token");

        console.log("user id:", shop_id);
        console.log("User token", token)
        axios.get("http://ec2-54-193-79-196.us-west-1.compute.amazonaws.com/api/admin/categories", {
            // params: { shop_id },
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        }
        )
            .then((res) => {
                setCategories(res.data);

            })
            .catch(err => {
                console.log("Err get product: ", err)
            })
    }, [toggle]);

    useEffect(() => {
        setPagination(calculateRange(all_orders, 5));
        setOrders(sliceData(all_orders, page, 5));
    }, []);

    // Search
    const __handleSearch = (event) => {
        setSearch(event.target.value);
        if (event.target.value !== '') {
            let search_results = orders.filter((item) =>
                item.first_name.toLowerCase().includes(search.toLowerCase()) ||
                item.last_name.toLowerCase().includes(search.toLowerCase()) ||
                item.product.toLowerCase().includes(search.toLowerCase())
            );
            setOrders(search_results);
        }
        else {
            __handleChangePage(1);
        }
    };

    // Change Page 
    const __handleChangePage = (new_page) => {
        setPage(new_page);
        setOrders(sliceData(all_orders, new_page, 5));
    }

    return (
        <div className='dashboard-content'>
            <DashboardHeader
                btnText="New Category" />

            <div className='dashboard-content-container'>
                <div className='dashboard-content-header'>
                    <h2>Categories List</h2>
                    <div className='dashboard-content-search'>
                        <input
                            type='text'
                            value={search}
                            placeholder='Search..'
                            className='dashboard-content-input'
                            onChange={e => __handleSearch(e)} />
                    </div>
                </div>

                <table>
                    <thead>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>CREATE AT</th>
                        <th>UPDATE AT</th>
                        <th>EDIT</th>
                        <th>DELETE</th>
                    </thead>

                    {categories.length !== 0 ?
                        <tbody>
                            {categories.map((category, index) => (
                                <tr key={index}>
                                    <td><span>{category.id}</span></td>
                                    <td><span>{category.name}</span></td>
                                    <td><span>{category.created_at}</span></td>
                                    <td><span>{category.updated_at}</span></td>
                                    <td><span><FontAwesomeIcon icon={faPen} /></span></td>
                                    <td><span><FontAwesomeIcon icon={faTrash} /></span></td>
                                </tr>
                            ))}
                        </tbody>
                        : null}
                </table>

                {orders.length !== 0 ?
                    <div className='dashboard-content-footer'>
                        {pagination.map((item, index) => (
                            <span
                                key={index}
                                className={item === page ? 'active-pagination' : 'pagination'}
                                onClick={() => __handleChangePage(item)}>
                                {item}
                            </span>
                        ))}
                    </div>
                    :
                    <div className='dashboard-content-footer'>
                        <span className='empty-table'>No data</span>
                    </div>
                }
            </div>
        </div>
    )
}

export default Categories;