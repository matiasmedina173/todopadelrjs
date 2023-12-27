import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

const NavBar = () => {
  return (
    <header>
      <h1>Todo Padel</h1>
      <nav>
        <ul>
          <li>Paletas</li>
          <li>Indumentaria</li>
          <li>Accesorios</li>
          <li>Contacto</li>
        </ul>
      </nav>
      <CartWidget />
    </header>
  );
};

export default NavBar;
