import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <Link to={"/"}>
        <h1>Todo Padel</h1>
      </Link>

      <nav>
        <ul>
          <li>
            <NavLink to={"/categoria/2"}>Paletas</NavLink>
          </li>
          <li>
            <NavLink to={"/categoria/3"}>Indumentaria</NavLink>
          </li>
        </ul>
      </nav>
      <CartWidget />
    </header>
  );
};

export default NavBar;
