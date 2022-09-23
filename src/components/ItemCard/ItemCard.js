import { Link } from "react-router-dom";

function ItemCard( {prod} ) {
    return (
    <>
        <div className="col">
          <div className="card sombreadogeneral navcolor">
            <figure className="figureclass">
              <img src={process.env.PUBLIC_URL + [prod.img]} alt={prod.alt} className="bd-placeholder-img card-img-top" width="100%" height="100%"/>
              <div className="capa">
                <div key={prod.album_id}>
                    <Link to={`/GohanMusic/detail/${prod.id}`} className="linkalbum">
                        <div>
                            <p className="tituloalbum">{prod.album}</p>
                            <small className="precioalbum">{prod.precio}</small>
                        </div>
                    </Link>
                </div>
              </div>
            </figure>
          </div>
        </div>
    </>
    );
  };

  
  export default ItemCard;

  