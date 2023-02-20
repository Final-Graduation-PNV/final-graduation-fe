import React from "react";
import axios from "axios";
// import { useState } from "react";
import EditProduct from "./EditProduct";


export default function ProductInfo({ data, onDelete }) {
  // const deleteHandle = async (event) => {
  //   event.preventDefault();
  //   var isConfirmed = window.confirm("Are you sure for deleting?")
  //   if (isConfirmed) {
  //     axios
  //     .delete("https://61ce733e7067f600179c5ea7.mockapi.io/mn/products/" + data.id)
  //     .then(function (response) {
  //       console.log(response);
  //       window.location.reload();
  //     })
  //   }
    
  // }
  return (
    <div className="product-info">
      <div>{data.id}</div>
      <div>{data.pro_name}</div>
      <div><img className="product-img" src="/image/avata.png" alt="" /></div>
      <div>{data.type}</div>
      <div>{data.price}</div>
      <div>{data.description}</div>
      <div>{data.quantity}</div>
      <div className="product-info__action"><EditProduct  data={data} /><button onClick={() => onDelete(data.id)} className="product-action"><img className="product-icon" src="/image/Delete.png" alt="" /></button></div>
    </div>
  );
}
