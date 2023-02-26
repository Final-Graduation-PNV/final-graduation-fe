import React from "react";
import EditProduct from "./EditProduct";
import { useState } from "react";
import ButtonSubmit from "../../components/ButtonSubmit";



export default function ProductInfo({ data, onDelete, closeModal,setEditData}) {
  const handlerEditData = (e) => {
    
    closeModal(true);
    setEditData(data);
};
  return (
    <>
      <div className="product-info">
        <div>{data.id}</div>
        <div>{data.name}</div>
        <div><img className="product-info-img" src="/image/avata.png" alt="" /></div>
        <div>{data.type}</div>
        <div>{data.price}</div>
        <div>{data.description}</div>
        <div>{data.quantity}</div>
        <div className="product-info__action">
          <button  className="product-info__action" onClick={handlerEditData}>
            <img className="product-info__icon" src="/image/pencil.png" alt="" />
          </button>
          <button className="product-info__action" onClick={() => onDelete(data.id)} >
            <img className="product-info__icon" src="/image/Delete.png" alt="" />
          </button>
        </div>
      </div></>

  );
}
