import ItemCard from "../../components/ItemCard/ItemCard"

function TSList({productos}) {
    
    return (
        productos.map((data) => 
        <ItemCard key={data.album_id} prod={data}/>
        )
    )
}

export default TSList