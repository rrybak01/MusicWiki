import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import "./InfoCard.css";

class InfoCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='contenedorCC'>
        <Card.Img variant="top" src={this.props.item.picture_big} />
        <Card.Body>
          <Card.Title>
            {this.props.item.id} {this.props.item.name}
          </Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>
            ID: {this.props.item.id}
          </ListGroupItem>
          <ListGroupItem>
            Titulo: {this.props.item.name}
          </ListGroupItem>
        </ListGroup>
      </div>
    );
  }
}

export default InfoCard;
