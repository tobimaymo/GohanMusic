import './AlbumList.css'
import AlbumCard from '../AlbumCard/AlbumCard'


const AlbumList = () => {
    const ItemData = [
        {
        album_id:'31',
        autor:'BTS',
        album:'Proof',
        alt:'proof',
        img:'/img/proof.png',
        precio:'$8000'
        },
        {
        album_id:'30',
        autor:'Harry Styles',
        album:'Harry´s House',
        alt:'harryshouse',
        img:'/img/harryhouse.jpeg',
        precio:'$8000'
        },
        {
        album_id:'29',
        autor:'Taylor Swift',
        album:'Red (Taylor´s Version)',
        alt:'redtv',
        img:'/img/redtv.jpg',
        precio:'$8000'
        },
        {
        album_id:'28',
        autor:'BTS',
        album:'BUTTER',
        alt:'butter',
        img:'/img/butter.jpg',
        precio:'$2500'
        },
        {
        album_id:'27',
        autor:'Olivia Rodrigo',
        album:'SOUR',
        alt:'sour',
        img:'/img/sour.jpg',
        precio:'$7500'
        },
        {
        album_id:'26',
        autor:'Taylor Swift',
        album:'Fearless (Taylor´s Version)',
        alt:'fearlesstv',
        img:'/img/fearlesstv.jpg',
        precio:'$7500'
        },
        {
        album_id:'25',
        autor:'Taylor Swift',
        album:'Evermore',
        alt:'evermore',
        img:'/img/evermore.jpg',
        precio:'$7500'
        },
        {
        album_id:'24',
        autor:'BTS',
        album:'BE',
        alt:'be',
        img:'/img/be.jpg',
        precio:'$6000'
        },
        {
        album_id:'23',
        autor:'BTS',
        album:'DYNAMITE',
        alt:'dynamite',
        img:'/img/dynamite.jpg',
        precio:'$2000'
        },
        {
        album_id:'22',
        autor:'Taylor Swift',
        album:'Folklore',
        alt:'folklore',
        img:'/img/folklore.jpg',
        precio:'$6500'
        },
        {
        album_id:'21',
        autor:'BTS',
        album:'MAP OF THE SOUL: 7',
        alt:'mapofthesoul7',
        img:'/img/mots7.jpg',
        precio:'$5500'
        },
        {
        album_id:'20',
        autor:'Harry Styles',
        album:'Fine Line',
        alt:'fineline',
        img:'/img/fineline.jpg',
        precio:'$5500'
        },
        {
        album_id:'19',
        autor:'Taylor Swift',
        album:'Lover',
        alt:'lover',
        img:'/img/lover.jpg',
        precio:'$5500'
        },
        {
        album_id:'18',
        autor:'BTS',
        album:'MAP OF THE SOUL: Persona',
        alt:'mapofthesoulpersona',
        img:'/img/motsp.jpg',
        precio:'$5000'
        },
        {
        album_id:'17',
        autor:'BTS',
        album:'LOVE YOURSELF 結: "ANSWER"',
        alt:'loveyourselfanswer',
        img:'/img/lya.jpg',
        precio:'$4500'
        },
        {
        album_id:'16',
        autor:'BTS',
        album:'LOVE YOURSELF 轉: "TEAR"',
        alt:'loveyourselftear',
        img:'/img/lyt.jpg',
        precio:'$5000'
        },
        {
        album_id:'15',
        autor:'BTS',
        album:'LOVE YOURSELF 承: "HER"',
        alt:'loveyourselfher',
        img:'/img/lyh.jpg',
        precio:'$4000'
        },
        {
        album_id:'14',
        autor:'Taylor Swift',
        album:'Reputation',
        alt:'reputation',
        img:'/img/rep.jpg',
        precio:'$5500'
        },
        {
        album_id:'13',
        autor:'Harry Styles',
        album:'Harry Styles',
        alt:'harrystylesalbum',
        img:'/img/hsa.jpg',
        precio:'$5000'
        },
        {
        album_id:'12',
        autor:'BTS',
        album:'YOU NEVER WALK ALONE',
        alt:'ynwa',
        img:'/img/ynwa.jpg',
        precio:'$4000'
        },
        {
        album_id:'11',
        autor:'BTS',
        album:'Wings',
        alt:'wings',
        img:'/img/wings.jpg',
        precio:'$4000'
        },
        {
        album_id:'10',
        autor:'BTS',
        album:'The most beautiful moments in life: "Young Forever"',
        alt:'tmbmilyf',
        img:'/img/tmbmilptyf.jpg',
        precio:'$4000'
        },
        {
        album_id:'9',
        autor:'BTS',
        album:'The most beautiful moments in life pt 2',
        alt:'tmbmilpt2',
        img:'/img/tmbmilpt2.jpg',
        precio:'$4000'
        },
        {
        album_id:'8',
        autor:'BTS',
        album:'The most beautiful moments in life pt 1',
        alt:'tmbmilpt1',
        img:'/img/tmbmilpt1.jpg',
        precio:'$4000'
        },
        {
        album_id:'7',
        autor:'Taylor Swift',
        album:'1989',
        alt:'1989',
        img:'/img/1989.jpg',
        precio:'$4000'
        },
        {
        album_id:'6',
        autor:'BTS',
        album:'DARK AND WILD',
        alt:'darkandwild',
        img:'/img/dandw.jpg',
        precio:'$4000'
        },
        {
        album_id:'5',
        autor:'BTS',
        album:'SKOOL LUV AFFAIR',
        alt:'skoolluvaffair',
        img:'/img/ska.jpg',
        precio:'$4000'
        },
        {
        album_id:'4',
        autor:'BTS',
        album:'O!RUL8,2?',
        alt:'orul82?',
        img:'/img/ORL82.jpg',
        precio:'$4000'
        },
        {
        album_id:'3',
        autor:'BTS',
        album:'2 COOL 4 SKOOL',
        alt:'2cool4skool',
        img:'/img/2c4s.jpg',
        precio:'$4000'
        },
        {
        album_id:'2',
        autor:'Taylor Swift',
        album:'Speak Now',
        alt:'speaknow',
        img:'/img/speakn.jpg',
        precio:'$4500'
        },
        {
        album_id:'1',
        autor:'Taylor Swift',
        album:'Taylor Swift',
        alt:'tsalbum',
        img:'/img/ts.jpg',
        precio:'$3000'
        },
    ]
 return (
    <div className="album py-5 bg-light" id="divMain">
        <div className="container">
            <div id="contenedor-productos">
			{ItemData.map((user) => {
				return (
                    <div>
                        <div key={user.album_id}>
							<AlbumCard data={user} />
                        </div>
                    </div>
				);
            
			})}
            </div>
		</div>
    </div>
 );
}

// const itemsNames = ItemData.map((item) => {
// return `Nombre: ${item.album} - Precio: $${item.precio} - Alt: ${item.alt} - Img: ${item.img}`;
// });

export default AlbumList