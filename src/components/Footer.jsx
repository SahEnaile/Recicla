import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import "../components/navbarStyle.css";

function Footer() {
  return (
    <div className="footer-content">
      <div className="logo-footer">
        <h1>Ricicla</h1>
      </div>
      <div className="footer">
        <div className="contatos">
          <FaInstagram className="footer-icons " />
          <FaFacebook className="footer-icons " />
          <FaLinkedin className="footer-icons " />
        </div>
        <div className="footer-links">
          <ul>
            <h1>Lorem</h1>
            <li>lorem</li>
            <li>lorem</li>
            <li>lorem</li>
          </ul>
        </div>
        <div className="footer-links">
          <ul>
            <h1>Lorem</h1>
            <li>lorem</li>
            <li>lorem</li>
            <li>lorem</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Footer;
