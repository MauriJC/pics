import React, { useState } from 'react'
import SearchBar from './components/SearchBar';
import searchImages from './api';
import ImageList from './components/ImageList';
import './App.css'


const App = () => {

  const [images,setImages]= useState([]);
  console.log(images)

  const handleSubmit = async (term)=>{
    //console.log('Do a search with',term);
    const result = await searchImages(term);
    //console.log(result);
    setImages(result);
  };

  return (
    <div className='container'>
      <SearchBar onSubmit={handleSubmit}></SearchBar>
      <ImageList images= {images}></ImageList>
    </div>
  )
}

export default App
