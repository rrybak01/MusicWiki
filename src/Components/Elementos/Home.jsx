import React, { useEffect, useState, useCallback } from 'react';
import uuid from 'react-uuid';
import './Elementos.css';
import StandarCard from "../StandardCard/StdCard";
import CargarPlaylist from "./CargarPlaylist";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

export default function Home(props) {
  
  const [data, setData] = useState([]);
  const playlists= "playlists";
  const URL=`https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/${playlists}`;
  

  const fetchMyAPI = async () => {
    let response = await fetch(URL)
    response = await response.json()
    setData(response.data)
  }

  useEffect(() => {
    fetchMyAPI()
  }, [])

  
    return (
      <div className="contenedor">
        {data.map((item) => (
          <Card key={uuid()} className="contenedorTarjeta" >
            <Link to="playlist" component={CargarPlaylist}/>
            <img src={item.picture_big} alt={item.title} />
          </Card>
        ))}
      </div>
    );
  
}


