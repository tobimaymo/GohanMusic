import React from "react";
import "./styles.css";
import NavBar from "./Header/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import FooterBar from "./components/FooterBar";
import Header from "./Header/Header";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      counter: 0,
    };
    this.handlerCounterUp = this.handlerCounterUp.bind(this);
  }
  handlerCounterUp() {
    this.setState({ counter: this.state.counter + 1})
  }
  render() {
    return (
      <div className="App">
        <NavBar>
        </NavBar>
        <main>
          <Header />
          <div className="album py-5 bg-light" id="divMain">
            <div className="container">
              <div id="contenedor-productos">
                  <ItemListContainer 
                    album='Proof'
                    alt='proof'
                    img='/img/proof.png'
                    precio='$8000'
                    />
                    <ItemListContainer 
                    album='Harry´s House'
                    alt='harryshouse'
                    img='/img/harryhouse.jpeg'
                    precio='$8000'
                    />
                    <ItemListContainer 
                    album='Red (Taylor´s Version)'
                    alt='redtv'
                    img='/img/redtv.jpg'
                    precio='$8000'
                    />
                    <ItemListContainer 
                    album='BUTTER'
                    alt='butter'
                    descripcion=''
                    img='/img/butter.jpg'
                    precio='$2500'
                    />
                    <ItemListContainer 
                    album='SOUR'
                    alt='sour'
                    img='/img/sour.jpg'
                    precio='$7500'
                    />
                    <ItemListContainer 
                    album='Fearless (Taylor´s Version)'
                    alt='fearlesstv'
                    img='/img/fearlesstv.jpg'
                    precio='$7500'
                    />
                    <ItemListContainer 
                    album='Evermore'
                    alt='evermore'
                    img='/img/evermore.jpg'
                    precio='$7500'
                    />
                    <ItemListContainer 
                    album='BE'
                    alt='be'
                    img='/img/be.jpg'
                    precio='$6000'
                    />
                    <ItemListContainer 
                    album='DYNAMITE'
                    alt='dynamite'
                    img='/img/dynamite.jpg'
                    precio='$2000'
                    />
                    <ItemListContainer 
                    album='Folklore'
                    alt='folklore'
                    img='/img/folklore.jpg'
                    precio='$6500'
                    />
                    <ItemListContainer 
                    album='MAP OF THE SOUL: 7'
                    alt='mapofthesoul7'
                    img='/img/mots7.jpg'
                    precio='$5500'
                    />
                    <ItemListContainer 
                    album='Fine Line'
                    alt='fineline'
                    img='/img/fineline.jpg'
                    precio='$5500'
                    />
                    <ItemListContainer 
                    album='Lover'
                    alt='lover'
                    img='/img/lover.jpg'
                    precio='$5500'
                    />
                    <ItemListContainer 
                    album='MAP OF THE SOUL: Persona'
                    alt='mapofthesoulpersona'
                    img='/img/motsp.jpg'
                    precio='$5000'
                    />
                    <ItemListContainer 
                    album='LOVE YOURSELF 結: "ANSWER"'
                    alt='loveyourselfanswer'
                    img='/img/lya.jpg'
                    precio='$4500'
                    />
                    <ItemListContainer 
                    album='LOVE YOURSELF 轉: "TEAR"'
                    alt='loveyourselftear'
                    img='/img/lyt.jpg'
                    precio='$5000'
                    />
                    <ItemListContainer 
                    album='LOVE YOURSELF 承: "HER"'
                    alt='loveyourselfher'
                    img='/img/lyh.jpg'
                    precio='$4000'
                    />
                    <ItemListContainer 
                    album='Reputation'
                    alt='reputation'
                    img='/img/rep.jpg'
                    precio='$5500'
                    />
                    <ItemListContainer 
                    album='Harry Styles'
                    alt='harrystylesalbum'
                    img='/img/hsa.jpg'
                    precio='$5000'
                    />
                    <ItemListContainer 
                    album='YOU NEVER WALK ALONE'
                    alt='ynwa'
                    img='/img/ynwa.jpg'
                    precio='$4000'
                    />
                    <ItemListContainer 
                    album='Wings'
                    alt='wings'
                    img='/img/wings.jpg'
                    precio='$4000'
                    />
                    <ItemListContainer 
                    album='The most beautiful moments in life: "Young Forever"'
                    alt='tmbmilyf'
                    img='/img/tmbmilptyf.jpg'
                    precio='$4000'
                    />
                    <ItemListContainer 
                    album='The most beautiful moments in life pt 2'
                    alt='tmbmilpt2'
                    img='/img/tmbmilpt2.jpg'
                    precio='$4000'
                    />
                    <ItemListContainer 
                    album='The most beautiful moments in life pt 1'
                    alt='tmbmilpt1'
                    img='/img/tmbmilpt1.jpg'
                    precio='$4000'
                    />
                    <ItemListContainer 
                    album='1989'
                    alt='1989'
                    img='/img/1989.jpg'
                    precio='$4000'
                    />
                    <ItemListContainer 
                    album='DARK AND WILD'
                    alt='darkandwild'
                    img='/img/dandw.jpg'
                    precio='$4000'
                    />
                    <ItemListContainer 
                    album='SKOOL LUV AFFAIR'
                    alt='skoolluvaffair'
                    img='/img/ska.jpg'
                    precio='$4000'
                    />
                    <ItemListContainer 
                    album='O!RUL8,2?'
                    alt='orul82?'
                    img='/img/ORL82.jpg'
                    precio='$4000'
                    />
                    <ItemListContainer 
                    album='2 COOL 4 SKOOL'
                    alt='2cool4skool'
                    img='/img/2c4s.jpg'
                    precio='$4000'
                    />
                    <ItemListContainer 
                    album='Red'
                    alt='red'
                    img='/img/red.jpg'
                    precio='$4500'
                    />
                    <ItemListContainer 
                    album='Speak Now'
                    alt='speaknow'
                    img='/img/speakn.jpg'
                    precio='$4500'
                    />
                    <ItemListContainer 
                    album='Fearless'
                    alt='fearless'
                    img='/img/fearless.jpg'
                    precio='$4000'
                    />
                    <ItemListContainer 
                    album='Taylor Swift'
                    alt='tsalbum'
                    img='/img/ts.jpg'
                    precio='$3000'
                    />
              </div>
            </div>
          </div>
        </main>
        <FooterBar />
      </div>
    );
  }
}

export default App;
