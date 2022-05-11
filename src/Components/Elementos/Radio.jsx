import React from 'react';
import uuid from 'react-uuid';
import './Elementos.css';
import StandarCard from "../StandardCard/StdCard";

class Radio extends React.Component {
  constructor() {
    super();
    this.state = {
      tableData: [],
    }
  }

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
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Radio;