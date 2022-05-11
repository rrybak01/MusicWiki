import React from 'react';
import uuid from 'react-uuid';
import './Elementos.css';
import CardAlbum from "../CardAlbum/CardAlbum";

class Albums extends React.Component {
  constructor() {
    super();
    this.state = {
      tableData: [],
    }
  }

  async componentDidMount() {
    var myHeaders = new Headers();

    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
    
    const response = await fetch(
      'https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/albums',
      requestOptions
    );

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
          <CardAlbum
            album={item}
            key={uuid()}
          />
        ))}
      </div>
    </React.Fragment>
    );
  }
}

export default Albums;


