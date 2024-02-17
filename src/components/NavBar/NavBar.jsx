import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <Link to={"/"}>
        <img
          src="https://play-lh.googleusercontent.com/HmUJww9_g52pm6igFkDt3a7jrzxf9YESW12mZrJq1eFV7JF1oTkB66duhrkuk7QUbsk"
          alt="todo padel"
        />
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
