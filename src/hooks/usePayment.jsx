import { wait } from "@testing-library/user-event/dist/utils";
import { useDispatch, useSelector } from "react-redux";
import { payment } from "../api/paymentAPI";
import {
  loadPayment,
  loadPaymentSelector,
  paymentSelector,
  setPaymentList,
} from "../redux/slices/paymentSlice";

const usePayment = () => {
  const dispatch = useDispatch();
  const load = useSelector(loadPaymentSelector);
  const payments = useSelector(paymentSelector);

  const refreshPayment = () => dispatch(loadPayment());
  const setPayment = (product) => dispatch(setPaymentList(product));

  const totalPayment = () => {
    return payments.reduce((total, paymentEle) => {
      return total + paymentEle.product_price * paymentEle.cart_quantity * 1000;
    }, 0);
  };

  return {
    payments,
    loadProductToggle: load,
    refreshPayment,
    setPayment,
    totalPayment,
  };
};
export default usePayment;
