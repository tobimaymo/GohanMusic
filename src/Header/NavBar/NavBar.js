import CardWidget from "./CardWidget/CardWidget";
import './NavBar.css';
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
      <>
        <header className="navbar navcolor border-bottom shadow navbartype fixed-top">
            <div className="container-fluid">
              <button className="navbar-toggler botonnav" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                <span><img src={process.env.PUBLIC_URL + "/img/menu.png"} width="40" height="40" alt="menu"/></span>
              </button>
              <div className="sidebarnav">
                <ul className="listasidebar">
                  <Link to={'/GohanMusic/'} className="links"><a>Home</a></Link>
                  <Link to={'GohanMusic/BTS'} className="links"><a>BTS</a></Link>
                  <Link to={'GohanMusic/Taylor-Swift'} className="links"><a>Taylor Swift</a></Link>
                  <Link to={'GohanMusic/Harry-Styles'} className="links"><a>Harry Styles</a></Link>
                  <Link to={'GohanMusic/Olivia-Rodrigo'} className="links"><a>Olivia Rodrigo</a></Link>
                  <Link to={'GohanMusic/Billie-Eilish'} className="links"><a>Billie Eilish</a></Link>
                </ul>
              </div>
              <CardWidget />
            </div>
        </header>
      </>
    );
  };
  
  export default NavBar;