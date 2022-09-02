import ItemData from "./ItemData";

const ItemListContainer = (props) => {
    return (
      <div className="producto ">
        <div className="col">
          <div className="card sombreadogeneral">
            <figure className="figureclass">
              <img src={process.env.PUBLIC_URL + [props.img]} alt={props.alt} className="bd-placeholder-img card-img-top" width="100%" height="100%"/>
              <div className="capa">
                <p>
                  <p className="tituloalbum">{props.album}</p>
                  <p className="descripcionalbum">{props.descripcion}</p>
                  <small className="precioalbum">{props.precio}</small>
                </p>
              </div>
            </figure>
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
            
    );
  };
  const itemsNames = ItemData.map((item) => {
    return `Nombre: ${item.album} - Precio: $${item.precio}`;
  });
  console.log(itemsNames);
  
  export default ItemListContainer;