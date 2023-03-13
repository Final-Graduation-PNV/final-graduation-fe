const InforPersonRow = ({ product }) => {
  console.log("product name ", product.user_name);
  return (
    <>
      <div className="infor-person">
        <p className="infor-person__name">{product.user_name}</p>
        <p className="infor-person__phone">{product.user_phone}</p>
      </div>
      <div className="infor-address">
        <p className="infor-address__address">{product.user_address}</p>
        <p className="infor-address__city">{product.user_city}</p>
      </div>
    </>
  );
};

export default InforPersonRow;
