import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import "./ItemDetail.css";

//Importo el CarritoContext:
import { CarritoContext } from "../../context/CarritoContext";
//Importo el Hook useContext:
import { useContext } from "react";

const ItemDetail = ({ id, nombre, stock, desc, precio, img }) => {
  //Creo  un estado local con la cantidad de productos agregados.
  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const { agregarAlCarrito } = useContext(CarritoContext);

  //Creo una función manejadora de la cantidad

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);

    //Creo un objeto con el item y la cantidad
    const item = { id, nombre, precio };
    agregarAlCarrito(item, cantidad);
  };

  return (
    <div className="contenedorItem">
      <h2>Nombre: {nombre} </h2>
      <h3>Precio: {precio} </h3>
      <p>ID: {id} </p>

      <p>{desc}</p>
      <img src={img} alt={nombre} />

      {
        /// Acá empleo la lógica de montaje y desmontaje del contador
      }

      {agregarCantidad > 0 ? (
        <Link className="miBtn" to="/cart">
          {" "}
          Terminar compra
        </Link>
      ) : (
        <ItemCount
          incial={1}
          stock={stock}
          funcionAgregar={manejadorCantidad}
        />
      )}
    </div>
  );
};

export default ItemDetail;
