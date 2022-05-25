import React from 'react';
import uuid from 'react-uuid';
import './Elementos.css';
import StandarCard from "../StandardCard/StdCard";
import CardInfo from "../InfoCard/InfoCard";

class Radio extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedItem: '',
      tableData: [],
    }
    this.changeSelected = this.changeSelected.bind(this);
    this.URL="https://cors-anywhere.herokuapp.com/https://api.deezer.com/radio";
  }

  changeSelected = async (itemEndpoint) => {
    const response = await fetch(this.URL + itemEndpoint);
    const responseData = await response.json();
    this.setState({
      selectedItem: responseData.data,
    });
  };

  async componentDidMount() {
    
    const response = await fetch(
      'https://cors-anywhere.herokuapp.com/https://api.deezer.com/radio'
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
              text={item.title}
              pic={item.picture_big}
              key={uuid()}
              onClick={() => this.changeSelected(item.title)}
            />
          ))}
        </div>
        <CardInfo title={this.state.selectedItem}/>
      </React.Fragment>
    );
  }
}

export default Radio;