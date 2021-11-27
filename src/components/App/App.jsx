import Axios from 'axios';
import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import GalleryList from '../GalleryList/GalleryList';
import GalleryItem from '../GalleryItem/GalleryItem';


function App() {

  const [galleryList, setGalleryList] = useState([]);
  const [showLikes, setShowLikes] = useState(galleryList.likes);

  useEffect(() => {
    renderGallery()
  }, [])

  

  const renderGallery = () =>  {

    Axios({
      method: 'GET',
      url: '/gallery'
    })
    .then((response) => {
      setGalleryList(response.data);
    })
    .catch((error) => {
      console.log(error);
    })
  }

  const updateLikeCount = () =>  {

    Axios({
      method: 'PUT',
      url: `/gallery/likes/:id`,
      data: showLikes
    })
    .then((response) => {
      renderGallery();
      setShowLikes(response.likes);
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

