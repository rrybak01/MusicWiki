import React from 'react';
import uuid from 'react-uuid';
import './Elementos.css';
import StandarCard from "../StandardCard/StdCard";
import CargarPlaylist from "./CargarPlaylist";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedItem: '',
      tableData: [],
    };
  }

  async componentDidMount() {
    const response = await fetch(
      'https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/playlists'
    );

    const responseData = await response.json();

    this.setState({
      tableData: responseData.data,
      selectedItem: responseData.data,
    });
      
  }

  handleClick() {
    <Link to="playlist" component={CargarPlaylist}/>
  }

  render() {
    return (
      <div className="contenedor">
        {this.state.tableData.map((item) => (
          <Card key={uuid()} className="contenedorTarjeta" onClick={this.handleClick}>
            <Link to="playlist" component={CargarPlaylist}/>
            <img src={item.picture_big} alt={item.title} />
          </Card>
        ))}
      </div>
    );
  }
}

export default Home;
