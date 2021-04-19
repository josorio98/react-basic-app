import React from 'react';
import './search-bar-style.css';
 const SearchBar = () =>{

    return (
      <div className ='search-bar-container'>
        <div className ='search-input'>
        <input type = 'text' placeholder ='Search...'/> <br/>
        </div>

        <div>
          <input  type = 'checkbox'/> only show product in stock
        </div>
          
      </div>  
    );
}

export default SearchBar;