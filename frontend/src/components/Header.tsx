import { NavLink } from "react-router-dom";
import Navigations from "./Navigations";
import logo from "../assets/Imagenes/logo.png";
import "./Header.css";

interface HeaderProps {
  isHome: boolean;
}

const Header = ({ isHome }: HeaderProps) => {
  return (
    <header
      className={`site-header ${
        isHome ? "site-header-home" : "site-header-page"
      }`}
    >
      <div className="header-container">

        <NavLink to="/" className="site-logo">
          <img
            src={logo}
            alt="Veteran Valor Farm"
            className="logo-image"
          />

          <span className="logo-text">
            Veteran Valor Farm
          </span>
        </NavLink>

        <Navigations />

      </div>
    </header>
  );
};

export default Header;