import React from 'react';
import uuid from 'react-uuid';
import './Elementos.css';
import StandarCard from "../StandardCard/StdCard";
import { API_URL_ARTISTAS, BASE_API_URL } from '../Data/Constants';
import { Card } from 'react-bootstrap';
import InfoCard from "../InfoCard/InfoCard";

class Artistas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: '',
      tableData: [],
    }
    this.changeSelected = this.changeSelected.bind(this);
  }

  async componentDidMount() {
    const response = await fetch(API_URL_ARTISTAS);
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

  render() {
    return (
      <div className="contenedor">
        {this.state.tableData.map((item) => {
          return (
            <Card
              className="contenedorTarjeta"
              key={uuid()}
              onClick={() => this.changeSelected(item.type+"/"+item.id)}
            >
              <img src={item.picture_big} alt={item.name}></img>
              <div className="name-genre-center">{item.name}</div>
            </Card>
          );
        })}

        <InfoCard item={this.state.selectedItem}/>

      </div>
    );
  }
}

export default Artistas;
