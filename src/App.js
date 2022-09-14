import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from "./Header/NavBar/NavBar";
import Home from './Views/Home/Home'
import AlbumDetailContainer from './Views/AlbumDetail/AlbumDetailContainer'
import BTS from './Views/BTS/BTS'
import FooterBar from "./components/Footer/FooterBar";

function App (){

    return (
      <>
      <Router>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path={'/GohanMusic/'} element={<Home />} />
            <Route path={'/GohanMusic/detail/:id'} element={<AlbumDetailContainer />} />
            <Route path={'/GohanMusic/BTS'} element={<BTS />} />
            <Route path={'/GohanMusic/cart'} />
          </Routes>
        </div>
        <FooterBar />
      </Router>
      </>
    );
}

export default App;
