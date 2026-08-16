import { NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="site-footer">

      <div className="footer-overlay">

        <div className="footer-container">

          {/* =========================
              BRAND
          ========================= */}

          <div className="footer-brand">

            <h2>Veteran Valor Farm</h2>

            <p>
              Supporting veterans through agriculture,
              animals, and community.
            </p>

            {/* =========================
                BUTTONS
            ========================= */}

            <div className="footer-buttons">

              <NavLink
                to="/apply"
                className="footer-button"
              >
                Apply
              </NavLink>

              <a
                href="https://givemn.org/organization/veteran-valor-farm"
                className="footer-button"
              >
                Donate
              </a>

            </div>

            {/* =========================
                FACEBOOK
            ========================= */}

            <a
              href="https://www.facebook.com/veteranvalorfarm/"
              target="_blank"
              rel="noopener noreferrer"
              className="facebook-link"
            >
              <span className="facebook-icon">f</span>

              <span>
                Follow us on Facebook
              </span>
            </a>

          </div>


          {/* =========================
              NAVIGATION
          ========================= */}

          <div className="footer-navigation">

            <h3>Explore</h3>

            <NavLink to="/">
              Home
            </NavLink>

            <NavLink to="/about">
              About
            </NavLink>

            <NavLink to="/meet-us">
              Meet Us
            </NavLink>

            <NavLink to="/mission">
              Mission
            </NavLink>

            <NavLink to="/apply">
              Apply
            </NavLink>

            <NavLink to="/contact-us">
              Contact Us
            </NavLink>

          </div>

        </div>


        {/* =========================
            COPYRIGHT
        ========================= */}

        <div className="footer-bottom">

          © {new Date().getFullYear()} Veteran Valor Farm.
          All rights reserved.

        </div>

      </div>

    </footer>
  );
};

export default Footer;