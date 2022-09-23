import CardWidget from "./CardWidget/CardWidget";
import './NavBar.css';
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
      <>
        <header className="navbar navcolor border-bottom shadow navbartype fixed-top">
            <div className="container-fluid">
              <div></div>
              <div className="sidebarnav">
                <ul className="listasidebar">
                  <Link to={'/GohanMusic/'} className="links"><a>Home</a></Link>
                  <Link to={'GohanMusic/BTS'} className="links"><a>BTS</a></Link>
                  <Link to={'GohanMusic/Taylor-Swift'} className="links"><a>Taylor Swift</a></Link>
                  <Link to={'GohanMusic/Otros'} className="links"><a>Otros</a></Link>
                </ul>
              </div>
              <CardWidget />
            </div>
        </header>
      </>
    );
  };
  
  export default NavBar;