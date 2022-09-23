import ItemCard from "../../components/ItemCard/ItemCard"

function BTSList({productos}) {
    
    return (
        productos.map((data) => 
        <ItemCard key={data.album_id} prod={data}/>
        )
    )
}

export default BTSList