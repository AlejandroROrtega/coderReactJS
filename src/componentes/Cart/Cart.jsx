import { Fragment, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
    const { cart, clearCart, total, totalAmount } = useContext(CartContext);

    if (totalAmount === 0) {
        return (
            <>
                <h2>Carrito Vacio, no tiene productos</h2>
                <Link to="/">Seguir Comprando</Link>
            </>
        )
    }
    return (
        <div>
            {cart.map(producto => <CartItem key={producto.id} {...producto} />)}
            <h2>Total: ${total}</h2>
            <h3>Cantidad Total: {totalAmount}</h3>
            <button onClick={() => clearCart()}>Vaciar Carrito</button>
            <Link to="/checkout">Finalizar Compra</Link>
        </div>
    )
}

export default Cart