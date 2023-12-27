import React from "react";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer
        greeting={"Hola a Todos, Esta es mi primer pre-entrega React Js"}
      />
    </>
  );
};

export default App;
