import AlbumCard from "../AlbumCard/AlbumCard"

function AlbumList({productos}) {
    
    return (
        productos.map((data) => 
        <AlbumCard key={data.album_id} data={data}/>
        )
    )
}

export default AlbumList