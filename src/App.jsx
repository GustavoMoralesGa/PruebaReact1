import React from "react";
import MyApi from "./components/MyApi"
import Header from "./components/Header";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';

import { SetState, useState } from 'react';


function App() {
  const [searchTerm, setSearchTerm] = useState(localStorage.getItem('searchTerm') || '');
  const [sortValue, setSortValue] = useState(localStorage.getItem('sortValue') || '');

  const handleSearchUpdate = (e) => {
    const { value } = e?.target;
    localStorage.setItem('searchTerm', value)
    setSearchTerm(value);
  }

  const handleSortUpdate = (e) => {
    const { value } = e?.target;
    localStorage.setItem('sortValue', value);
    setSortValue(value);
  }

  return (
    <div className="App">
      <Header 
        handleSearchUpdate={ handleSearchUpdate }
        searchValue={ searchTerm }
        handleSortUpdate={ handleSortUpdate }
        sortValue={ sortValue }
      />
      <MyApi 
        searchValue={ searchTerm }
        sortValue={ sortValue }
      />
      <Footer />
    </div>
  )
}

export default App;