import CardWidget from "./CardWidget/CardWidget";
import './NavBar.css';
import { useContext } from "react";
import { ItemsContext } from "../../ItemsContext";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [items, setItems] = useContext(ItemsContext)
    let bts=items.filter(function(value) {
        return value.autor === 'BTS';
    })
    let ts=items.filter(function(value) {
        return value.autor === 'Taylor Swift';
    })
    let otros1=items.filter(function(value) {
      return value.autor !== 'Taylor Swift' ;
    })
    let otros2=otros1.filter(function(value) {
      return value.autor !== 'BTS' ;
    })

    return (
      <>
        <header className="navbar navcolor border-bottom shadow navbartype fixed-top">
            <div className="container-fluid">
              <div></div>
              <div className="sidebarnav">
                <ul className="listasidebar">
                  <Link to={"/GohanMusic/"} className="links">Home</Link>
                  <button onClick={() => setItems(bts)} className="links">BTS</button>
                  <button onClick={() => setItems(ts)} className="links">Taylor Swift</button>
                  <button onClick={() => setItems(otros2)} className="links">Otros</button>
                </ul>
              </div>
              <CardWidget />
            </div>
        </header>
      </>
    );
  };
  
  export default NavBar;