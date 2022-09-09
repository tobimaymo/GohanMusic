import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from "./Header/NavBar/NavBar";
import Home from './Views/Home/Home'
import AlbumDetail from './Views/AlbumDetail/AlbumDetail'

const App = () => {
    return (
      <>
      <Router>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path={'/GohanMusic/home'} element={<Home />} />
            <Route path={'/GohanMusic/detail/:id'} element={<AlbumDetail />} />
          </Routes>
        </div>
      </Router>
      </>
    );
}

export default App;
