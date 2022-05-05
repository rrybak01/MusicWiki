import React from 'react';
import uuid from 'react-uuid';
import './Elementos.css';
import StandarCard from "./StandardCard/StdCard";
import CargarPlaylist from "./CargarPlaylist";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { Container, Form, Button, Row, Col, FloatingLabel } from 'react-bootstrap';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedItem: '',
      tableData: [],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  async componentDidMount() {
    const response = await fetch(
      'https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/playlists'
    );

    const responseData = await response.json();

    this.setState({
      tableData: responseData.data,
      selectedItem: responseData.data,
    });
      
  }

  handleClick(e){
    console.log("Funciona");
  }

  render() {
    return (
      <React.Fragment>
      <div className="contenedor">
        {this.state.tableData.map((item) => (
          <StandarCard
            pic={item.picture_big}
            url={"/playlist"}
            key={uuid()}
          >
          <Switch>
            <Route path="/playlist" component={CargarPlaylist}></Route>
          </Switch>
          </StandarCard>
        ))}
      </div>
    </React.Fragment>
    );
  }
}

export default Home;
