import BTSCard from "./BTSCard"

function BTSList({productos}) {
    
    return (
        productos.map((data) => 
        <BTSCard key={data.album_id} data={data}/>
        )
    )
}

export default BTSList