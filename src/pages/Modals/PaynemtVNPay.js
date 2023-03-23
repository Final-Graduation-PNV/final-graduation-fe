
const PaymentVNPay = () => {
  return (
    <div className="modalBackground-paymentVnPay" style={{
      width: "100vw",
      height: "900px",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      position: "fixed",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "-70px",
      fontFamily: "Open Sans"
    }}>
      <div className="modalcontainer-paymentVnPay" style={{
        width: "400px",
        height: "290px",
        borderRadius: "12px",
        backgroundColor: "white",
        boxShadow: "0px 0px 8px 0px rgba(0, 0, 0, 0.35)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "25px 25px 35px 25px",
        justifyContent: "space-around"
      }}>
        <p className="paymentVnPay__title" style={{
          fontSize: "30px",
          fontWeight: 600,
          lineHeight: 0,
          textAlign: "center",
          color: "#3c7026"
        }}>Thank you</p>
        <div className="content-paymentVnPay" style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
          <img src="https://cdn.pixabay.com/photo/2018/07/19/06/05/handshake-3547921_1280.jpg" style={{ width: "100px", height: "auto" }} />
          <div className="paymentVnPay">
            <p style={{ fontSize: "13px", textAlign: "center" }}>you have successfully paid</p>
          </div>
          <div className="btn-paymentVnPay">
            <button className="btn-paymentVnPay__confirm" style={{ padding: '7px 50px', borderRadius: '20px', outline: 'none', backgroundColor: '#3c7026', fontSize: '15px', fontWeight: 600, color: '#fff', border: 'none', cursor: 'pointer' }}>Go To The website</button>
          </div>
        </div>

      </div>
    </div>
  )
}
export default PaymentVNPay