import React from "react";

const PaymentRow = ({ product }) => {
  console.log("product payment row: ", product);
  return (
    <div className="product-con">
      <div className="product-imgName">
        <p className="con__img">
          <img className="img__product" src={product.product_image} />
        </p>
        <p className="con__name">{product.product_name}</p>
      </div>
      <p className="con__prie">
        {new Intl.NumberFormat().format(product.product_price * 1000)} vnđ
      </p>
      <p className="con__quantily">{product.cart_quantity}</p>
      <p className="con__amount">
        {new Intl.NumberFormat().format(product.cart_amount * 1000)} vnđ
      </p>
    </div>
  );
};
export default PaymentRow;
