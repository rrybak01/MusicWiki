import React from "react";
import "./CardAlbum.css";
import { Link } from "react-router-dom";

const CardAlbum = ({ album }) => {
  return (
    <div className="album">
      <img src={album.cover_medium} alt={album.title} className="card-album" />
      <p className="Album-Title">{album.title}</p>
    </div>
  );
};

export default CardAlbum;
