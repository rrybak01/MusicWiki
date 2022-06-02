import React from 'react';
import uuid from 'react-uuid';
import './Elementos.css';
import { API_URL_ARTISTAS, BASE_API_URL } from '../Data/Constants';
import { Card } from 'react-bootstrap';
import InfoCard from "../InfoCard/InfoCard";

class Artistas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableData: [],
    }
  }

  async componentDidMount() {
    const response = await fetch(API_URL_ARTISTAS);
    const responseData = await response.json();
    this.setState({
      tableData: responseData.data,
      selectedItem: responseData.data[1],
    });
      
  }

  render() {
    return (
      <div className="contenedor">
        {this.state.tableData.map((item) => {
          return (
            <div
              className="tarjetatt"
              key={uuid()}
              onClick={() => this.changeSelected(item.type+"/"+item.id)}
            >
              <img src={item.picture_big} alt={item.name} className="imagenTarjeta"></img>
              <p className="tituloTarjeta">{item.name}</p>
            </div>
          );
        })}

      </div>
    );
  }
}

export default Artistas;
