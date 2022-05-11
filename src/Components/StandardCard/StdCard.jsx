import React from "react";
import "./StdCard.css";
import { Link, useHistory } from "react-router-dom";
import CargarPlaylist from "../Elementos/CargarPlaylist";
import { Card } from "react-bootstrap";

const CardGenres = ({ text, pic, url }) => {
  let history = useHistory();

  function handleClick() {
    <Link to="playlist" />
  }
  return (
    <Card className="contenedorTarjeta" onClick={<CargarPlaylist />}>
        <img src={pic} alt={text} />
        <div className="name-genre-center">{text}</div>
        <Link to="playlist" />
    </Card>
      
      
    
  );
};

export default CardGenres;
