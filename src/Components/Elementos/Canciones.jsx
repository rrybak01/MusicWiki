import React from 'react';
import uuid from 'react-uuid';
import './Elementos.css';
import { API_URL_CANCIONES, BASE_API_URL } from '../Data/Constants';
import { Card } from 'react-bootstrap';

class Artistas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: '',
      tableData: [],
      isPlaying: false,
    }
    this.changeSelected = this.changeSelected.bind(this);
  }

  async componentDidMount() {
    const response = await fetch(API_URL_CANCIONES);
    const responseData = await response.json();
    this.setState({
      tableData: responseData.data,
      selectedItem: responseData.data[1],
    });
      
  }

  changeSelected = async (itemEndpoint) => {
    const response = await fetch(BASE_API_URL + itemEndpoint);
    const responseData = await response.json();
    this.setState({
      selectedItem: responseData,
    });
  };

  SoundPlay = (src) => {
    const sound = new Audio(src);

    sound.play();
  }

  render() {
    return (
      <div className="contenedor">
        {this.state.tableData.map((item) => {
          return (
            <div
              className="tarjetatt"
              key={uuid()}
              onClick={() => {this.SoundPlay(item.preview);}}
            >
              <img src={item.album.cover_big} alt={item.title} className="imagenTarjeta"></img>
              <p className="tituloTarjeta">{item.title}</p>
            </div>
          );
        })}

      </div>
    );
  }
}

export default Artistas;
