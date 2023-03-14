import { useDispatch, useSelector } from "react-redux";
import {
  addressSelector,
  loadPayment,
  loadPaymentSelector,
  paymentSelector,
  setPaymentList,
} from "../redux/slices/paymentSlice";

const usePayment = () => {
  const dispatch = useDispatch();
  const load = useSelector(loadPaymentSelector);
  const payments = useSelector(paymentSelector);
  const address = useDispatch(addressSelector);

  const refreshPayment = () => dispatch(loadPayment());
  const setPayment = (product) => dispatch(setPaymentList(product));
  const setAddress = (address) => dispatch(setAddress(address));
  const setPhone = (phone) => dispatch(setPhone(phone));
  const setCity = (city) => dispatch(setCity(city));

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
    setAddress,
    setPhone,
    setCity,
  };
};
export default usePayment;
