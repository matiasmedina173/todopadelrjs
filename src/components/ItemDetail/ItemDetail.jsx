import React from "react";
import "./ItemDetail.css";

const ItemDetail = ({ id, nombre, precio, img }) => {
  return (
    <div className="contenedorItem">
      <h2>Nombre: {nombre}</h2>
      <h3>Precio: {precio}</h3>
      <p>ID: {id}</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur non
        blanditiis praesentium est veniam nisi consequuntur ad sunt laborum.
        Esse illo obcaecati consequatur quod aspernatur minus, tempora
        voluptatibus asperiores eum!
      </p>
      <img src={img} alt={nombre} />
    </div>
  );
};

export default ItemDetail;
