import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from "./Header/NavBar/NavBar";
import Home from './Views/Home/Home'
import ItemDetailContainer from './Views/ItemDetail/ItemDetailContainer'

import FooterBar from "./components/Footer/FooterBar";
import { useEffect, useState } from 'react';
import { AlbumsProvider, getItems } from "./ItemsContext";

import { CartContext } from "./context/CartContext";
import { Cart } from "./components/Cart/Cart";

function App (){
  const [ItemData, setItemData] = useState({})
  // const [loading, setloading] = useState (true)

    useEffect (() => {
        getItems
        .then((respuesta) => {
            return respuesta
        })
        .then((resp) => setItemData(resp))
        .catch(err => console.log(err))
        // .finally(() => setloading(false))
    }, [])
    console.log(ItemData)

    return (
      <CartContext>
      <AlbumsProvider>
      <Router>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path={'/GohanMusic/'} element={<Home ItemData={ItemData}/>} />
            <Route path={'/GohanMusic/detail/:id'} element={<ItemDetailContainer />} />
            <Route path={'/GohanMusic/cart'} element={<Cart/>} />
          </Routes>
        </div>
        <FooterBar />
      </Router>
      </AlbumsProvider>
    </CartContext>
    );
}

export default App;
