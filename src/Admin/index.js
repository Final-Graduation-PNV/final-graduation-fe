import React, { useState } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import SideBar from './components/Sidebar';
import sidebar_menu from './constants/sidebar-menu';

import './index.css';
import Categories from './pages/Categories';
import AddCategory from './pages/Categories/AddCategory';
import Orders from './pages/Orders';

function AdminPage() {
  const [modalAddCategory, setModalAddCategory] = useState(false);
  // const [modalEditCategory, setModalEditCategory] = useState(false);
  const [toggle, setToggle] = useState(false);

  return (
    <>
      {modalAddCategory && <AddCategory toggle={setToggle} closeModal={setModalAddCategory} />}
      {/* {modalEditProduct && <EditProduct toggle={setToggle} key={editData.id} data={editData} closeModal={setModalEditProduct} />} */}
      <div className='dashboard-container'>
        <SideBar menu={sidebar_menu} />
        <div className='dashboard-body'>
          <Routes>
            {/* <Route path="*" element={<div></div>} /> */}
            <Route exact path="/admin" element={<div>a</div>} />
            <Route exact path="/admin/orders" element={< Orders />} />
            <Route exact path="/admin/categories" element={<Categories openModal={setModalAddCategory} toggle={toggle} setToggle={setToggle}/>} />
            <Route exact path="/admin/profile" element={<div>a</div>} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default AdminPage;