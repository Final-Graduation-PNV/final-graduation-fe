import Swal from 'sweetalert2';
import "../../styles/Modal/Cart.scss";

const AlertCart = () => {
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
export default AlertCart;