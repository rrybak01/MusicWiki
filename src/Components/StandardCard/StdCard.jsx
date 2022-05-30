import React from "react";
import "./StdCard.css";
import { Card } from "react-bootstrap";

const CardGenres = ({ text, pic, /*url*/ }) => {
  
  return (
    <Card className="contenedorTarjeta">
        <img src={pic} alt={text} />
        <div className="name-genre-center">{text}</div>
    </Card>
  );
};

export default CardGenres;
