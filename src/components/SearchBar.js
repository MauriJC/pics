import React, { useState } from 'react'

const SearchBar = ({ onSubmit }) => {

  const [term,setTerm]= useState('');

  const handleFormSubmit = (e) =>{
    e.preventDefault();
    console.log('Submited')
    onSubmit('cars');
  }

  const handleChange = (e)=>{
    setTerm(e.target.value.replace(/[a-z]/, '')); // <= This is the way to use regular expresions
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit} action="">
        Confirm your search: {term}
        <input value={term} onChange={handleChange} type="text"  />
        {term.length<3 && 'Your term must be longer'}
      </form>

    </div>
  )
}

export default SearchBar
