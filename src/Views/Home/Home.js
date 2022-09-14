import React from 'react'
import Header from "../../Header/Principal/Header";
import AlbumListContainer from '../../components/AlbumList/AlbumListContainer';

const Home = () => {
  return (
    <>
    <main className='bg-dark'>
        <Header />
        <AlbumListContainer />
    </main>
    </>
  )
}

export default Home