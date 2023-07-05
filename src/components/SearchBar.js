import React, { useState } from 'react';
import './SearchBar.css'

const SearchBar = ({ onSubmit }) => {

  const [term,setTerm]= useState('');

  const handleFormSubmit = (e) =>{
    e.preventDefault();
    //console.log('Submited')
    onSubmit(term);
  }

  const handleChange = (e)=>{
    //setTerm(e.target.value.replace(/[a-z]/, '')); // <= This is the way to use regular expresions
    setTerm(e.target.value);
  }

  return (
    <div className='search-bar'>
      <form onSubmit={handleFormSubmit} action="">
        <label htmlFor="">Your search:</label> 
        <input value={term} onChange={handleChange} type="text"  />
        {term.length<3 && 'Your term must be longer'}
      </form>

    </div>
  )
}

export default SearchBar
