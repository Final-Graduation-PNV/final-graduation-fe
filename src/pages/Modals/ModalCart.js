const ModalCart = () => {
  return (
    <div className="modalBackground-sigin">
      <div className="modalContainer-sigin">
        <div className="modal-text-sigin">
          <p className="modal-text__tittle-sigin">Logged in successfully</p>
          <p>You have logged in successfully</p>
          <FontAwesomeIcon className="check-icon-sigin" icon={faCheck} />
        </div>
        <button className="modalSignin__btn-sigin" onClick={() => navigate("/home")}>OK</button>
      </div>
    </div>
  )
}