import React from 'react'
import SearchBar from './components/SearchBar';

const App = () => {

  const handleSubmit = (term)=>{
    console.log('Do a search with',term);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit}></SearchBar>
    </div>
  )
}

export default App
