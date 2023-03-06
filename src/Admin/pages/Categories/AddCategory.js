import React from "react";
import axios from "axios";
import { useState } from "react";
import './styles.scss';


function AddCategory({ toggle, closeModal }) {
    const [category, setCategory] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCategory({
          ...category,
          [name]: value,
        });
        console.log("category: ", category.category);

    };
    const handleSubmit = () => {
        const token = localStorage.getItem("token")
        axios.post("http://ec2-54-193-79-196.us-west-1.compute.amazonaws.com/api/admin/categories", { name: category.category },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                }
            }
        )
            .then(function (response) {
                console.log(response);
                toggle(!true);
                closeModal(false);
            })
            .catch(function (error) {
                console.log("Er admin web onwer", error);
            });
    }

    return (
        <>
        <div className="add-category">
            <div className='add-category__form'>
                <label className='add-category__form__label'>Input Category Name</label>
                <input className='add-category__form__input'
                    type='text'
                    name='category'
                    placeholder='Category'
                    value={category.data}
                    onChange={handleChange}
                    required="required"
                />
                <button className='add-category__form__button'onClick={handleSubmit}> Add new </button>
            </div>
        </div>
    </>
        
    );
}

export default AddCategory;