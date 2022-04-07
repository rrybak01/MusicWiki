import React from "react";
import { Nav, NavLink} from 'react-bootstrap';
import './Sidebar.css';
import { SidebarData } from '../../Data/SidebarData';
import { Link } from 'react-router-dom';
import uuid from "react-uuid";

class Sidebar extends React.Component {

  render(){
    return(
      <div className="Sidebar">
        <ul className='lista'>
          <div className="Sidebar-header">
            MusicWiki
          </div>
          <Nav>
            {SidebarData.map((item) => {
              return (
                <li 
                  key={uuid()} 
                  className="elementosLista"
                >
                  <Link
                    to={item.link}
                    className="sidebar-link"> 
                      <div id="icono">{item.icon}</div>
                      <div id="titulo">{item.title}</div>
                  </Link>
                  
                </li>
              );
            })}
          </Nav>
        </ul>
      </div>
    )
  } 
}

export default Sidebar;