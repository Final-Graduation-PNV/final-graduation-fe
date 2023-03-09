import Swal from 'sweetalert2';
import "../../styles/Modal/Cart.scss";

const Cart = () => {
  const AlertCartSuccess = () => {
    Swal.fire({
      position: 'center',
      fontSize: 18,
      color: "#3c7026",
      icon: 'success',
      title: 'Item has been added to your shopping cart',
      showConfirmButton: false,
      timer: 1500
    })
  }
  const AlertCartError = () => {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Your cart! The quantity must be less or equal than product quantity!',
      button: "Ok",
    })
  }

  return {
    AlertCartError, AlertCartSuccess
  }
}
export default Cart
