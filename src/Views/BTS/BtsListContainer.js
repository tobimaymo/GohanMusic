import BTSList from './BTSList';
import { useEffect, useState } from 'react';
import { getFetch } from '../../helpers/getFetch';
import '../../components/AlbumList/AlbumList.css'


function BTSListContainer() {

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
    <div div className="albumBTS py-5 bg-dark" id="divMain">
        <div div className="container">
        <img src={process.env.PUBLIC_URL + "/img/BTSlogo.png"} width="384px" height="128px" className='tituloBTS'/>
            <div div id="contenedor-productos">
                {loading ? <span>cargando...</span>
                :
                    <BTSList productos={ItemData} />
                }
            </div>
        </div>
    </div>
    </>
 );
}

export default BTSListContainer