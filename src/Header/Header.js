import React from 'react'

const Header = () => {
  return (
<div>
  <div className="headercontainer position-relative overflow-hidden text-center bg-light">
    <div className="headerimagen">
        <img src={process.env.PUBLIC_URL + "/img/midnights.gif"}/>
        <div className="centered">
          <p>Edicion Especial Disponible hasta el 7 de Septiembre</p>
        </div>
    </div>
  </div>

  <div className="container marketing">
    <div class="row">
      <div class="col-lg-4 midnightsalbum">
        <img src={process.env.PUBLIC_URL + "/img/midnightsjadegreen.png"}></img>
        <p className='copperplate fw-normal'>Midnights: Jade Green Edicion Vinilo</p>
        <div className="color-card card-body">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <button class="button-74">Añadir</button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4 midnightsalbum">
      <img src={process.env.PUBLIC_URL + "/img/mydnightsbloodmoon.png"}></img>
        <p class="copperplate fw-normal">Midnights: Blood Moon Edicion Vinilo</p>
        <div className="color-card card-body">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <button class="button-74">Añadir</button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4 midnightsalbum">
        <img src={process.env.PUBLIC_URL + "/img/midnightsmahogany.png"}></img>
        <p class="copperplate fw-normal cooperplate">Midnights: Mahogany Edicion Vinilo</p>
        <div className="color-card card-body">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <button class="button-74">Añadir</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Header