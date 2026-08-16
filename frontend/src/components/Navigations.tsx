import { NavLink } from "react-router-dom";
import "./Navigations.css";

function Navigations() {
  return (
    <nav className="main-nav">
      <NavLink to="/" className="nav-link">
        Home
      </NavLink>
      <NavLink to="/apply" className="nav-link">
        Apply for Residency
      </NavLink>

      <NavLink to="/give-mn" className="nav-link">
        GiveMN
      </NavLink>
       <NavLink to="/mission" className="nav-link">
        Mission
      </NavLink>
      <NavLink to="/meet-us" className="nav-link">
        Meet Us
      </NavLink>

     

      <NavLink to="/about" className="nav-link">
        About VVF
      </NavLink>
  

  

      <NavLink to="/ContactUs" className="nav-link">
        Contact Us
      </NavLink>
    </nav>
  );
}

export default Navigations;