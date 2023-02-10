import React, { useState } from "react";
import "../../styles/ModalBtn.scss";
import Modal from "../Auth/Modal";
function ModalBtn() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="Modal">
      <button className="openModalBtn" onClick={() => setOpenModal(true)}>Open</button>
      {openModal && <Modal closeModal={setOpenModal} />}
    </div>
  )
}
export default ModalBtn