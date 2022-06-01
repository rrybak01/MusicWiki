import React from "react";
import "./Sidebar.css";
import {SidebarData} from "../Data/SidebarData";
import { Link } from 'react-router-dom';
import uuid from "react-uuid";

export default function Sidebar() {
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
                        className="elementosLista">
                            <Link
                                to={item.link}
                                className="sidebar-link"> 
                                <div id="titulo">{item.title}</div>
                            </Link>
                        </li>
                    )
                    })}
                    </div>
                    
                </ul>
            </div>
          );
}

/*onClick={()=>{window.location.pathname = item.link}}*/
