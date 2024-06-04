import { Link } from "react-router-dom";
import "../components/navbarStyle.css";
import { CiUser } from "react-icons/ci";

function Navbar() {
  return (
    <header>
      <Link to="/">
        <div className="logo">
          <h1>Recicla</h1>
        </div>
      </Link>
      <ul className="links">
        <Link to="/produtos">
          <li>Produtos</li>
        </Link>
        <Link to="/fale-conosco">
          <li>Fale conosco</li>
        </Link>

        <Link to="/fale-conosco">
          <li>Localização</li>
        </Link>

        <Link to="/fale-conosco">
          <li style={{ fontSize: "22px" }}>
            <CiUser />
          </li>
        </Link>
      </ul>
    </header>
  );
}
export default Navbar;
