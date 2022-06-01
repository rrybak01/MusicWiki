import React from 'react';
import uuid from 'react-uuid';
import './Elementos.css';
import "./Card.css";
import {API_URL_ALBUMS} from "../Data/Constants";

class Albums extends React.Component {
  constructor() {
    super();
    this.state = {
      tableData: [],
    }
  }

  async componentDidMount() {
    const response = await fetch(API_URL_ALBUMS);

    const responseData = await response.json();

    this.setState({
      tableData: responseData.data,
    });
      
  }

  render() {
    return (
      <React.Fragment>
      <div className="contenedor">
        {this.state.tableData.map((item) => (
          <div className="tarjetatt" key={uuid()}>
            <img src={item.cover_big} alt={item.title} className="imagenTarjeta" />
            <p className="tituloTarjeta">{item.title}</p>
          </div>
        ))}
      </div>
    </React.Fragment>
    );
  }
}

export default Albums;


