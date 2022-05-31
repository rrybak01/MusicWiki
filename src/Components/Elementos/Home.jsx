import React, { useEffect, useState, useCallback } from 'react';
import uuid from 'react-uuid';
import './Elementos.css';
import StandarCard from "../StandardCard/StdCard";
import CargarPlaylist from "./CargarPlaylist";
import { Link } from "react-router-dom";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import InfoCard from "../InfoCard/InfoCard";

export default function Home() {
  
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState("");
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
            <img src={item.picture_big} alt={item.title} />
          </Card>
        ))}
      </div>
    );
  
}


