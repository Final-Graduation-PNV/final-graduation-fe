import ls from "localstorage-slim";

const InforPersonRow = () => {
  return (
    <>
      <div className="infor-person">
        <p className="infor-person__name">
          {localStorage.getItem("user_name")}
        </p>
        <p className="infor-person__phone">
          {ls.get("phone", { decrypt: true })}
        </p>
      </div>
      <div className="infor-address">
        <p className="infor-address__address">
          {ls.get("address", { decrypt: true })}
        </p>
        <p className="infor-address__city">
          {ls.get("city", { decrypt: true })}
        </p>
      </div>
    </>
  );
};

export default InforPersonRow;
