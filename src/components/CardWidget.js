import React from 'react'

const CardWidget = () => {
  return (
    <div className='CounterSection'>
                  <button id="boton-carrito">
                    <span id="contadorCarrito">0</span>
                    <img src={process.env.PUBLIC_URL + "/img/carrito.png"} alt='carrito' className="bi me-2" width="40" height="40"></img>
                  </button>
      </div>
  )
}

export default CardWidget