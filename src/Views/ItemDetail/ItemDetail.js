import ItemCount from '../../components/ItemCount/ItemCount';
import { useCartContext } from '../../context/CartContext';

function ItemDetail ({data}) {

  const {addToCart} = useCartContext()


    const onAdd = (cantidad)=> {
      const newItem = {
        ...data,
        cantidad
      }
      addToCart(newItem)
    }


  return (
    <div className={`${data.alt}`}>
      <div className="CardDetail">
        <div className="sombreadogeneral">
            <img src={process.env.PUBLIC_URL + [data.img]} alt={data.alt} className="bd-placeholder-img card-img-top"/>
        </div>
        <div className="infoAlbum copperplate">
          <small>{data.autor} presents</small>
          <p className="tituloDetail">{data.album}</p>
            <p className="descDetail">{data.descripcion}</p>
            <div className="d-flex justify-content-evenly align-items-center">
              <div>
                <ItemCount stock={data.stock} initial = {0} onAdd={onAdd}/>
              </div>
              <p className="precioDetail">{data.precio}</p>
          </div>
        </div>
      </div>
    </div>
  );
  
  
}

export default ItemDetail