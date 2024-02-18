import React, { useContext } from "react";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";
import { CarritoContext } from "../../context/CarritoContext";
import "./Cart.css"; // Importa el archivo CSS de estilos

const Cart = () => {
  const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(
    CarritoContext
  );

  if (cantidadTotal === 0) {
    return (
      <div className="cart-empty">
        <h2>No hay productos en el carrito</h2>
        <Link className="miBtn" to="/">
          Ver Productos
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      {carrito.map((prod) => (
        <CartItem key={prod.id} {...prod} />
      ))}
      <h3 className="cart-total"> Total:$ {total} </h3>
      <div className="cart-buttons">
        <button className="miBtn" onClick={() => vaciarCarrito()}>
          Vaciar Carrito
        </button>
        <Link className="miBtn" to="/checkout">
          Finalizar Compra
        </Link>
      </div>
    </div>
  );
};

export default Cart;
