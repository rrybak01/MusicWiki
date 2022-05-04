import React, { Component, useState } from 'react';
import "./SearchBar.css";
import { Icon } from "react-icons-kit";
import { ic_arrow_back, ic_search } from "react-icons-kit/md";

export class SearchBar extends Component {
  
  handleSearch(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className="contenedorSearchbar">
        <div className="searchbar">
            <input
              type="text"
              className="search-term"
              placeholder="Buscar"
            />
            <button type="submit" className="botonBuscar">
              <Icon className="search-icon" icon={ic_search} />
            </button>
        </div>
      </div>
    )
  }
}

export default SearchBar;