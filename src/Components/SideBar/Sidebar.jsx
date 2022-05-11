import React from "react";
import "./Sidebar.css";
import {SidebarData} from "../Data/SidebarData";
import { NavLink } from 'react-router-dom';
import uuid from "react-uuid";

class Sidebar extends React.Component {
    render(){
        return (
            <div className="Sidebar">
                <div className="Sidebar-header">
                    MusicWiki
                </div>
                <ul className="lista">
                    
                    <div>
                    {SidebarData.map((item) => {
                    return(
                        <li key={uuid()}
                        className="elementosLista"
                        onClick={()=>{window.location.pathname = item.link}}>
                            <NavLink
                                to={item.link}
                                className="sidebar-link"
                                activeClassName="active"
                                exact={item.defaultRoute}> 
                                <div id="titulo">{item.title}</div>
                            </NavLink>
                        </li>
                    )
                    })}
                    </div>
                    
                </ul>
            </div>
          );
    }
  
}

export default Sidebar;