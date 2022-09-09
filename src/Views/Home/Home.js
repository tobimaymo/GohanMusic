import React from 'react'
import FooterBar from "../../components/Footer/FooterBar";
import Header from "../../Header/Principal/Header";
import AlbumList from "../../components/AlbumList/AlbumList";

const Home = () => {
  return (
    <>
    <main>
        <Header />
        <AlbumList />
    </main>
    <FooterBar />
    </>
  )
}

export default Home