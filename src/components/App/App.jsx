import Axios from 'axios';
import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';

function App() {

  let [galleryList, setGalleryList] = useState([]);

  const renderList = () =>  {

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
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"/>
      </div>
    );
}

export default App;
