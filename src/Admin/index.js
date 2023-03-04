import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import SideBar from './components/Sidebar';
import sidebar_menu from './constants/sidebar-menu';

import './index.css';
import Categories from './pages/Categories';
import Orders from './pages/Orders';

function AdminPage() {
  return (
    <>
      <div className='dashboard-container'>
        <SideBar menu={sidebar_menu} />
        <div className='dashboard-body'>
          <Routes>
            {/* <Route path="*" element={<div></div>} /> */}
            <Route exact path="/admin" element={<div>a</div>} />
            <Route exact path="/admin/orders" element={< Orders />} />
            <Route exact path="/admin/categories" element={<Categories/>} />
            <Route exact path="/admin/profile" element={<div>a</div>} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default AdminPage;