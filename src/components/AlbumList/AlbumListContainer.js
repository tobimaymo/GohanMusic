import './AlbumList.css'
import AlbumList from '../AlbumList/AlbumList'
import { useEffect, useState } from 'react';
import { getFetch } from '../../helpers/getFetch';


function AlbumListContainer() {

    const [ItemData, setItemData] = useState({})
    const [loading, setloading] = useState (true)

    useEffect (() => {
        getFetch
        .then((respuesta) => {
            return respuesta
        })
        .then((resp) => setItemData(resp))
        .catch(err => console.log(err))
        .finally(() => setloading(false))
    }, [])
    console.log(ItemData)
    
 return (
    <>
    <div className='bg-dark'>
        <div div className="album py-5 bg-dark" id="divMain">
            <div div className="container">
                <div div id="contenedor-productos">
                    {loading ? <span>cargando...</span>
                        :
			            <AlbumList productos={ItemData} />
                    }
                </div>
            </div>
        </div>
    </div>
    </>
 );
}

export default AlbumListContainer