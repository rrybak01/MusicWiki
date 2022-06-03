import React from 'react';
import uuid from 'react-uuid';
import './Tarjeta.css';
import {API_URL_ALBUMS} from "../Data/Constants";
import Player from './Player';

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
      <div className="contenedor">
        {this.state.tableData.map((item) => (
          <Player 
            imagen={item.cover_big}
            text={item.title}
            key={uuid()}
          />
        ))}
      </div>
    );
  }
}

export default Albums;


