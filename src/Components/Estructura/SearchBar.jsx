import React, { Component } from 'react'
import { Container, Nav, NavDropdown, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import { SidebarData } from '../../Data/SidebarData';
import { Link } from 'react-router-dom';
import "./SearchBar.css";
import { Icon } from "react-icons-kit";
import { ic_arrow_back, ic_search } from "react-icons-kit/md";

export class SearchBar extends Component {
  render() {
    return (
      <div className="searchbar">
        <div className="wrap">
          <form className="search">
            <input
              type="text"
              className="search-term"
              placeholder="Buscar"
            />
            <button type="submit" className="search-button">
              <Icon className="search-icon" icon={ic_search} />
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default SearchBar;