import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import "./ItemDetail.css"
import "./ItemClass.css"
import { getItems } from "../../ItemsContext";

function ItemDetailContainer (){
    const [producto, setProducto] = useState({})
    const [loading, setloading] = useState(true)
    let {id} = useParams()

    useEffect(() => {
        getItems
        .then(resp => setProducto(resp.find(prod => prod.id === id)))
        .finally(() => setloading(false))
    }, [])
    console.log(producto)
return (
    <>
        { loading ? <h2> cargando...</h2>
        : <ItemDetail data={producto}/>
    }
    </>
)
}

export default ItemDetailContainer