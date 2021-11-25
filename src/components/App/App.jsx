import Axios from 'axios';
import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import GalleryList from '../GalleryList/GalleryList';

function App() {

  let [galleryList, setGalleryList] = useState([]);

  useEffect(() => {
    renderGallery()
  }, [])

  const renderGallery = () =>  {

    Axios({
      method: 'GET',
      url: '/gallery'
    })
    .then((response) => {
      setGalleryList(response.data)
    })
    .catch((error) => {
      console.log(error);
    })
  }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Goats</h1>
        </header>
        {/* <img src="images/goat_small.jpg"/> */}
        <GalleryList galleryList={galleryList} />
      </div>
      
    );
}

export default App;
