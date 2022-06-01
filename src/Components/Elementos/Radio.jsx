import React from 'react';
import uuid from 'react-uuid';
import './Elementos.css';
import InfoCard from "../InfoCard/InfoCard";
import { API_URL_RADIO } from '../Data/Constants';
import { Container, Table, Row, Col } from 'react-bootstrap';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

class Radio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: '',
      tableData: [],
    };
    this.favouritesList = [];
    this.brandInput = React.createRef();
    this.changeSelected = this.changeSelected.bind(this);
  }

  async componentDidMount() {
    const response = await fetch(
      'https://cors-anywhere.herokuapp.com/https://api.deezer.com/radio'
    );

    const responseData = await response.json();

    this.setState({
      tableData: responseData.data,
      selectedItem: responseData.data[0],
    });
  }

  changeSelected = async (itemEndpoint) => {
    const response = await fetch(API_URL_RADIO + itemEndpoint);
    const responseData = await response.json();
    this.setState({
      selectedItem: responseData,
    });
  };


  render() {
    return (
      <div className="main-site">
            <Col lg={8} md={6}>
              <Table responsive striped hover>
                <thead>
                  <tr>
                    <th>Marca</th>
                    <th>Modelo</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.tableData.map((item) => {
                    return (
                      <tr
                        key={uuid()}
                        onClick={() => this.changeSelected(item.id)}
                      >
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Col>
            
              <div className='contenedorCC'>
                <Card.Img variant="top" src={this.state.selectedItem.picture_big} />
                <Card.Body>
                  <Card.Title>
                    {this.state.selectedItem.id} {this.state.selectedItem.title}
                  </Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>
                    ID: {this.state.selectedItem.id}
                  </ListGroupItem>
                  <ListGroupItem>
                    Titulo: {this.state.selectedItem.title}
                  </ListGroupItem>
                </ListGroup>
              </div>
      </div>
    );
  }
}

export default Radio;