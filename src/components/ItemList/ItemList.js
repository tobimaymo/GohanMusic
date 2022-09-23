import ItemCard from "../ItemCard/ItemCard"

function ItemList({productos}) {
    
    return (
        productos.map((data) => 
        <ItemCard key={data.album_id} prod={data}/>
        )
    )
}

export default ItemList