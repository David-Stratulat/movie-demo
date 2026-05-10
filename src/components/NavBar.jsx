import { Link } from "react-router-dom";
import "../css/NavBar.css";
import HamburgerMenu from "./Hamburger";

function NavBar() {
  return (
    <>
      <div className="desktop-nav">
        <nav className="navbar">
          <div className="navbar-brand">
            <Link to="/">MovieApp</Link>
          </div>

          <div className="navbar-links">
            <Link to="/favorites" className="nav-link">
              Favorites
            </Link>

            <Link to="/" className="nav-link">
              Home
            </Link>
          </div>
        </nav>
      </div>

      <div className="mobile-nav">
        <HamburgerMenu />
      </div>
    </>
  );
}

export default NavBar;