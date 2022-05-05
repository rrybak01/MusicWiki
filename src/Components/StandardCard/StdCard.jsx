import React from "react";
import "./StdCard.css";
import { Link } from "react-router-dom";

const CardGenres = ({ text, pic, url }) => {
  return (
      <Link className="contenedorTarjeta" to={url}>
        <img src={pic} alt={text} />
        <div className="name-genre-center">{text}</div>
      </Link>
    
  );
};

export default CardGenres;
