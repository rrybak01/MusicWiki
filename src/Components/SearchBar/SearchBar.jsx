import React, { useEffect, useState } from 'react';
import { Icon } from "react-icons-kit";
import { ic_search } from "react-icons-kit/md";
import "./SearchBar.css";
import uuid from 'react-uuid';
import { BASE_API_URL, API_URL_SEARCH } from "../Data/Constants";
import Player from '../Elementos/Player';

export default function SearchBar(){

    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    
    const fetchMyAPI = async () => {
        const response = await fetch(API_URL_SEARCH);
        const responseData = await response.json();
        setData(responseData.data);
    }
    
    useEffect(() => {
        fetchMyAPI()
    }, [])

    const updateTable = async () => {
        updateTableAPI('search?q=' + search);
    };
    
    const updateTableAPI = async (endpointURL) => {
        const response = await fetch(BASE_API_URL + endpointURL);
        const responseData = await response.json();
        setData(responseData.data);
    };
        
        return(
            <div className="contenedorSearchbar">
                
                <div className="searchbar">
                    <input
                    type="text"
                    className="search-term"
                    placeholder="Buscar"
                    onChange={(event) => setSearch(event.target.value)}
                    />
                    <button type="submit" className="botonBuscar" onClick={updateTable}>
                    <Icon className="search-icon" icon={ic_search} />
                    </button>
                
                </div>

                <div className="contenedor">
                    {data.map((item) => {
                        return (
                            <Player
                                url={item.preview}
                                imagen={item.album.cover_big}
                                text={item.title}
                                key={uuid()}
                            />
                        );
                    })}
                </div>
            </div>
        )
    
}