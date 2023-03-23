import Swal from 'sweetalert2';
import "../../styles/Modal/Cart.scss";

const Cart = () => {
  const AlertCartSuccess = (e) => {
    Swal.fire({
      position: 'center',
      fontSize: 18,
      color: "#3c7026",
      icon: 'success',
      title: e,
      showConfirmButton: false,
      timer: 1500
    })
  }
  const AlertCartError = (e) => {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: e,
      button: "Ok",
    })
  }

  const AlertSendSuccess = () => {
    Swal.fire({
      position: 'center',
      fontSize: 18,
      color: "#3c7026",
      icon: 'success',
      title: 'The OTP verification code has been sent to your Email. Please enter...',
      showConfirmButton: false,
      timer: 1500
    })
  }
  
  const AlertPaymentSuccess = () => {
    Swal.fire({
      color: "#3c7026",
      icon: 'success',
      title: 'Check your email address to see bill detail.',
      button: "Go To Homepage",
    })

  }

  const AlertPaymentError = () => {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Please enter your address!',
      button: "Ok",
    })
  }

  const AlertcartPayment = () => {
    Swal.fire({
      text: 'You have not selected any items for checkout',
      button: "Ok",
    })
  }

  const AlertProfile = (e) => {
    Swal.fire({
      color: "#3c7026",
      icon: 'success',
      title: e,
      button: "Ok",
    })
  }

  const AlertAddProduct = (e) => {
    Swal.fire({
      color: "#3c7026",
      icon: 'success',
      text: 'Add new product successfully',
      title: e,
      button: "Ok",
    })
  }
  const AlertEditProduct = (e) => {
    Swal.fire({
      text: 'Edit product successfully',
      color: "#3c7026",
      icon: 'success',
      title: e,
      button: "Ok",
    })
  }
  const AlertDleteProduct = (e) => {
    Swal.fire({
      text: 'Delete product successfully',
      color: "#3c7026",
      icon: 'success',
      title: e,
      button: "Ok",
    })
  }
  const AlertForgotPassword = (e) => {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: e,
      button: "Ok",
    })
  }

  const AlertOPTPassWord = (e) => {
    Swal.fire({
      color: "#3c7026",
      icon: 'success',
      title: e,
      button: "Ok",
    })
  }
  const ErrorOTPPassWord = (e) => {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: e,
      button: "Ok",
    })
  }
  const AlertChangePassWord = (e) => {
    Swal.fire({
      color: "#3c7026",
      icon: 'success',
      title: e,
      button: "Ok",
    })
  }
  const ErrorChangePassWord = (e) => {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: e,
      button: "Ok",
    })
  }

  return {
    AlertCartError, AlertcartPayment,
    AlertCartSuccess, AlertSendSuccess,
    AlertPaymentError, AlertPaymentSuccess,
    AlertProfile, AlertForgotPassword,
    AlertOPTPassWord, ErrorOTPPassWord,
    AlertChangePassWord, ErrorChangePassWord,
    AlertAddProduct, AlertEditProduct,AlertDleteProduct
  }
}
export default Cart
