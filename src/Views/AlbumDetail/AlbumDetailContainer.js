import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFetch } from "../../helpers/getFetch";
import AlbumDetail from "./AlbumDetail";
import "./AlbumDetail.css"
import "./AlbumClass.css"

function ItemDetailContainer (){
    const [producto, setProducto] = useState({})
    const [loading, setloading] = useState(true)
    let {id} = useParams()

    useEffect(() => {
        getFetch
        .then(resp => setProducto(resp.find(prod => prod.id === id)))
        .finally(() => setloading(false))
    }, [])
    console.log(producto)
return (
    <>
        { loading ? <h2> cargando...</h2>
        : <AlbumDetail data={producto}/>
    }
    </>
)
}

export default ItemDetailContainer