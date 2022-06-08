import React from 'react';
import './Tarjeta.css';
import { API_URL_CANCIONES } from '../Data/Constants';
import Player from './Player';
import uuid from 'react-uuid';

class Inicio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    }
  }

  async componentDidMount() {
    const response = await fetch(API_URL_CANCIONES);
    const responseData = await response.json();
    this.setState({
      data: responseData.data,
    });
      
  }

  render() {
    return (
      <div className="contenedor">
        {this.state.data.map((item) => {
          return (
            <Player
              url={item.preview}
              imagen={item.album.cover_big}
              text={item.title}
              key={uuid()}
            />
          );
        })}
      </div>
    );
  }
}

export default Inicio;
