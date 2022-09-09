import React from 'react'
import './SideBar.css'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
<div className="offcanvas offcanvas-start colorsidebar" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
    <div className="offcanvas-header">
        <button className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div className="sidebarnav">
        <ul className="listasidebar">
            <Link to={'GohanMusic/home'} className="links"><a>Home</a></Link>
            <Link to={'GohanMusic/home'} className="links"><a>BTS</a></Link>
            <Link to={'GohanMusic/home'} className="links"><a>Taylor Swift</a></Link>
            <Link to={'GohanMusic/home'} className="links"><a>Harry Styles</a></Link>
            <Link to={'GohanMusic/home'} className="links"><a>Olivia Rodrigo</a></Link>
            <Link to={'GohanMusic/home'} className="links"><a>Billie Eilish</a></Link>
        </ul>
    </div>
</div>
  )
}

export default SideBar