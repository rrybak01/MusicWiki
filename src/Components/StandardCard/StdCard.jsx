import React from "react";
import "./StdCard.css";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

class StandarCard extends React.Component {
  constructor(props) {
    super(props);
    this.text = props.text;
    this.onClickCard = props.onClickCard;
    this.pic = props.pic;
  }

  render() {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={this.pic} />
        <Card.Body>
          <Card.Title>
            {this.text}
          </Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>
            <button text="boton" onClick={this.onClickCard} />
          </ListGroupItem>
        </ListGroup>
      </Card>
    );
  }
}

export default StandarCard;
