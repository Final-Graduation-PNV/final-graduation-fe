import { faClose } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../../styles/Modal/Thankyou.scss"
function Thanks({ closeModal }) {
  return (
    <div className="modalBackground-thanks">
      <div className="modalContainer-thanks">
        <div className="modal-icon-thanks">
          <FontAwesomeIcon icon={faClose} onClick={() => closeModal(false)} />
        </div>
        <div className="modal-text-thanks">
          <div className="modal-thanks">
            <p>Thank you</p>
          </div>
          <div className="modal-des">
            <p>Thank you for your order </p>
            <p>We have sent an application to your Email</p>
            <p> Please check your Email</p>
          </div>
        </div>
        <div className="btn-thanks">
          <button className="btn-thanks__cancel" onClick={() => closeModal(false)}>Yes</button>
        </div>
      </div>
    </div>

  )
}
export default Thanks