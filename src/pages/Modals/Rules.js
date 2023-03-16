import "../../styles/Modal/Rules.scss";

import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import NoteSignupShop from "./NoteSignupShop";

function Rules({ closeModal }) {
  const [isShow, setIsShow] = useState(false);
  return (
    <>
      <div className="modalBackground-Rules">
        {isShow && <NoteSignupShop closeModal={setIsShow} />}
        <div className="modalContainer-Rules">
          <div className="modal-icon-Rules">
            <FontAwesomeIcon icon={faClose} onClick={() => closeModal(false)} />
          </div>
          <div className="Rules-text">
            <p className="Rules-text__tittle">Rules create your market place</p>
            <div className="Rules-des">
              <p className="rules_one">1. General principles </p>
              <p className="rules">a. Posting for sale on Shopee is an activity of a Seller using goods, services and documents about goods and services to introduce to customers about those goods and services.</p>
              <p className="rules"> b. When posting products for sale on Shopee, the Seller is responsible for complying with the provisions of Articles 117, 120.4, and 121 of the Commercial Law and legal documents related to display and introduction activities. goods and services.</p>
              <p className="rules"> c. All documents that the Seller is required to provide, the Seller must ensure and commit that all documents provided by the Seller to Shopee are scanned from the original documents, not forged, modified, erased to clear.</p>
              <p className="rules_one">2. The content is not allowed to be posted for sale</p>
              <p className="rules">Users are entitled to post products on Shopee for business purposes. However, it is strictly forbidden for users to post products with the following content:</p>
              <p className="rules"> a. Reactionary, anti-religious, anti-religious, pornographic, violent, going against the fine customs, traditions and culture of Vietnam;</p>
              <p className="rules"> b. Post spam, disrupt or discredit the services provided by Shopee;</p>
              <p className="rules"> c. Insulting, provoking others in any way;d. Disseminate information that is prohibited by law such as: heroin use, ecstasy, murder, robbery, etc. (eg: cannabis leaf products, shise. Promotion, advertising for the use of harmful products (eg: tobacco, alcohol, marijuaf. Depraved cultural products (tape, books, articles);</p>
              <p className="rules">g. National secret documents, state secrets, business secrets, personal secrets;</p>
              <p className="rules">H. Humans and/or parts of the human body;</p>
              <p className="rules"> i. Products that are racist, offensive to a certain ethnicity or country;</p>
              <p className="rules"> j. Minimize personal products (such as personal pictures, family pictures, children's pictures);</p>
              <p className="rules">k. The products are on Shopee's Prohibited/Restricted Products List.</p>
            </div>
            <div className="Rules-btn">
              <button className="Rules-btn__yes" onClick={() => setIsShow(true)}>Yes</button>
            </div>
          </div>
        </div>
      </div >
    </>

  )
}
export default Rules