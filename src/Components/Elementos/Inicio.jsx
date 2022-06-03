import React from 'react';
import './Tarjeta.css';
import { API_URL_CANCIONES } from '../Data/Constants';
import Player from './Player';
import uuid from 'react-uuid';

class Inicio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableData: [],
    }
  }

  async componentDidMount() {
    const response = await fetch(API_URL_CANCIONES);
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
