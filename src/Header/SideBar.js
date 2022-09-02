import React from 'react'

const SideBar = () => {
  return (
<div className="offcanvas offcanvas-start colorsidebar" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
    <div className="offcanvas-header">
        <button className="btn-close btn-close-white " data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div className="sidebarnav">
        <ul className="listasidebar">
            <li className='activado'>
                <a href="#" >Home</a>
            </li>
            <li>
                <a href="#" >BTS</a>
            </li>
            <li>
                <a href="#" >Taylor Swift</a>
            </li>
            <li>
                <a href="#" >Harry Styles</a>
            </li>
            <li>
                <a href="#" >Olivia Rodrigo</a>
            </li>
        </ul>
    </div>
</div>
  )
}

export default SideBar