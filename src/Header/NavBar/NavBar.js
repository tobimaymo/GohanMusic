import CardWidget from "./CardWidget/CardWidget";
import SideBar from "./SideBar/SideBar";
import './NavBar.css';

const NavBar = () => {
    return (
      <div className="container">
        <header className="w-100 navbar navcolor py-3 mb-4 border-bottom shadow">
            <div className="container-fluid">
              <button className="navbar-toggler botonnav" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                <span><img src={process.env.PUBLIC_URL + "/img/menu.png"} width="40" height="40" alt="menu"/></span>
              </button>
              <span className="titulonav">Gohan´s Music Shop</span>
              <CardWidget />
              <SideBar />
            </div>
        </header>
    </div>
    );
  };
  
  export default NavBar;