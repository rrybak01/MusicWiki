import React from 'react';
import { Icon } from "react-icons-kit";
import { ic_search } from "react-icons-kit/md";
import "../Elementos/Elementos.css";
import "./SearchBar.css";
import { Card } from "react-bootstrap";
import uuid from 'react-uuid';

export default class Busqueda extends React.Component{

    constructor(props){
        super(props);
        this.URL = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=eminem`;
        this.state = {
            data: [],
        };
        this.search = React.createRef();
        this.updateTable = this.updateTable.bind(this);
        this.updateTableAPI = this.updateTableAPI.bind(this);
    }
    
    async componentDidMount() {
        const response = await fetch(this.URL + "search?q=eminem")
        console.log(this.URL)
        response = await response.json()
        this.setState({
            data: response.data,
        })
    }

    updateTable = async () => {
        this.updateTableAPI('search?q=' + this.search);
    };
    
    updateTableAPI = async (endpointURL) => {
        const response = await fetch(this.URL + endpointURL);
        response = await response.json();
        this.setState({
            data: response.data,
        })
    };

    render() {
        
        return(
            <div className="contenedorSearchbar">
                
                <div className="searchbar">
                    <input
                    type="text"
                    reference={this.search}
                    className="search-term"
                    placeholder="Buscar"
                    />
                    <button type="submit" className="botonBuscar">
                    <Icon onClick={this.updateTable} className="search-icon" icon={ic_search} />
                    </button>
                
                </div>

                <div className="contenedor">
                {this.state.data.map((item) => (
                <Card key={uuid()} className="contenedorTarjeta" >
                    <img src={item.album.cover_big} alt={item.title} />
                </Card>
                ))}
                </div>
            </div>
        )
    }
}