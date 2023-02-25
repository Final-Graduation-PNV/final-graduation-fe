import React from "react";
import EditProduct from "./EditProduct";


export default function ProductInfo({ data, onDelete }) {
  return (
    <div className="product-info">
      <div>{data.id}</div>
      <div>{data.pro_name}</div>
      <div><img className="product-info-img" src="/image/avata.png" alt="" /></div>
      <div>{data.type}</div>
      <div>{data.price}</div>
      <div>{data.description}</div>
      <div>{data.quantity}</div>
      <div className="product-info__action">
        <EditProduct data={data} />
        <button onClick={() => onDelete(data.id)} className="product-info__action">
          <img className="product-info__icon" src="/image/Delete.png" alt="" />
        </button>
      </div>
    </div>
  );
}
