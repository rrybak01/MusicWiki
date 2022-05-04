import React from "react";
import "./StdCard.css";
import { Link } from "react-router-dom";

const CardGenres = ({ text, pic }) => {
  return (
      <div className="contenedorTarjeta">
        <img src={pic} alt={text} />
        <div className="name-genre-center">{text}</div>
      </div>
    
  );
};

export default CardGenres;
