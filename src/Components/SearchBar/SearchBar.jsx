import React from 'react';
import { Icon } from "react-icons-kit";
import { ic_search } from "react-icons-kit/md";
import "./SearchBar.css";
import uuid from 'react-uuid';
import { BASE_API_URL, API_URL_SEARCH } from "../Data/Constants";

export default class Busqueda extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            selectedItem: '',
            data: [],
            search: "",
        };
        this.updateTable = this.updateTable.bind(this);
        this.updateTableAPI = this.updateTableAPI.bind(this);
    }
    
    async componentDidMount() {
        const response = await fetch(API_URL_SEARCH);
        const responseData = await response.json();
        this.setState({
          data: responseData.data,
          selectedItem: responseData.data[1],
        });
    }

    updateTable = async () => {
        this.updateTableAPI('search?q=' + this.state.search);
    };
    
    updateTableAPI = async (endpointURL) => {
        const response = await fetch(BASE_API_URL + endpointURL);
        const responseData = await response.json();
        this.setState({
          data: responseData.data,
          selectedItem: responseData.data[1],
        });
    };

    render() {
        
        return(
            <div className="contenedorSearchbar">
                
                <div className="searchbar">
                    <input
                    type="text"
                    className="search-term"
                    placeholder="Buscar"
                    onChange={(event) => this.setState({search: event.target.value})}
                    />
                    <button type="submit" className="botonBuscar" onClick={this.updateTable}>
                    <Icon className="search-icon" icon={ic_search} />
                    </button>
                
                </div>

                <div className="contenedor">
                    {this.state.data.map((item) => {
                        return (
                            <div
                                className="tarjetatt"
                                key={uuid()}
                                >
                                <img src={item.album.cover_big} alt={item.title} className="imagenTarjeta"></img>
            <p className="tituloTarjeta">{item.title}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        )
    }
}