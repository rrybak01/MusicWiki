import React from 'react';
import uuid from 'react-uuid';
import './Elementos.css';
import StandarCard from "../StandardCard/StdCard";

class Canciones extends React.Component {
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
      'https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/tracks',
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
          <StandarCard
            text={item.title_short}
            pic={item.album.cover_big}
            url={"/playlist"}
            key={uuid()}
          />
        ))}
      </div>
    </React.Fragment>
    );
  }
}

export default Canciones;
