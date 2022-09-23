import React from 'react'
import { useCartContext } from '../../context/CartContext'
import './Cart.css'
export const Cart = () => {
  const {cart} = useCartContext()
  return (
    <div div className="album py-5 bg-dark cartText" id="divMain">
    <div id="contenedor-productos" className='cartList'>
       {cart.map(items =>
        <div>
          <img src={process.env.PUBLIC_URL + [items.img]} alt={items.alt} className="bd-placeholder-img card-img-top imgCart" width="200px" height="250px"/>
          <p>Album: {items.album} precio: {items.precio} cantidad: {items.cantidad}</p>
        </div>)}
    </div>
    </div>
  )
}