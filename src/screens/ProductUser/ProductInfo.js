import { faPen, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
export default function ProductInfo({ data, onDelete, closeModal, setEditData }) {
  const handlerEditData = () => {
    closeModal(true);
    setEditData(data);
  };
  return (
    <>
      <div className="product-info">
        <div>{data.id}</div>
        <div>{data.name}</div>
        <div><img className="product-info-img" src={data.image} alt="" /></div>
        <div>{data.category_name}</div>
        <div>{data.price}000vnđ</div>
        <div>{data.description}</div>
        <div>{data.quantity}</div>
        <div className="product-info__action">
          <FontAwesomeIcon className="product-info__iconPen" icon={faPen} onClick={handlerEditData} />
          <FontAwesomeIcon className="product-info__iconTrash" icon={faTrashCan} onClick={() => onDelete(data.id)} />
        </div>
      </div></>

  );
}
