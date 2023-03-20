import React, { useState } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import SideBar from './components/Sidebar';
import sidebar_menu from './constants/sidebar-menu';

import './index.scss';
import Categories from './pages/Categories';
import AddCategory from './pages/Categories/AddCategory';
import EditCategory from './pages/Categories/EditCategory';
import Orders from './pages/Orders';
import Users from './pages/Users';

function AdminPage() {
  const [modalAddCategory, setModalAddCategory] = useState(false);
  const [modalEditCategory, setModalEditCategory] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [editData, setEditData] = useState([]);


  return (
    <>
      {modalAddCategory && <AddCategory toggle={toggle} setToggle={setToggle} closeModal={setModalAddCategory} />}
      {modalEditCategory && <EditCategory toggle={toggle} setToggle={setToggle} key={editData.id} data={editData} closeModal={setModalEditCategory} />}
      <div className='dashboard-container'>
        <SideBar menu={sidebar_menu} />
        <div className='dashboard-body'>
          <Routes>
            {/* <Route path="*" element={<div></div>} /> */}
            <Route exact path="/admin" element={<div>a</div>} />
            <Route exact path="/admin/users" element={<Users/>} />
            <Route exact path="/admin/categories" element={<Categories openAddModal={setModalAddCategory} openEditModal={setModalEditCategory} setEditData={setEditData} toggle={toggle} setToggle={setToggle}/>} />
            <Route exact path="/admin/profile" element={<div>a</div>} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default AdminPage;