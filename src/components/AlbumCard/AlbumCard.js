import { Link } from "react-router-dom";

const ItemListContainer = ( {data} ) => {
    return (
    <>
      <div className="producto">
        <div className="col">
          <div className="card sombreadogeneral">
            <figure className="figureclass">
              <img src={process.env.PUBLIC_URL + [data.img]} alt={data.alt} className="bd-placeholder-img card-img-top" width="100%" height="100%"/>
              <div className="capa">
                <div key={data.album_id}>
                    <Link to={`/GohanMusic/detail/${data.alt}`}>
                        <div>
                            <p className="tituloalbum">{data.album}</p>
                            <small className="precioalbum">{data.precio}</small>
                        </div>
                    </Link>
                </div>
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
    </>
    );
  };

  
  export default ItemListContainer;