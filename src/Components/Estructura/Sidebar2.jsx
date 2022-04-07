import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./Sidebar.css";
import { SidebarData } from '../../Data/SidebarData';

export default function Sidebar2() {
  return (
    <Router>
      <div className="Sidebar">
        <div className="Sidebar-header">
            <Link to="/">MusicWiki</Link>
        </div>
        <nav>
          <ul className="Lista">
            {SidebarData.map( (item, index) => {
                return (<li><Link to={item.link}>{item.icon}{item.title}</Link></li>)
            })}
          </ul>
        </nav>

        <Switch>
          
          {SidebarData.map( (item) => {
              return (<Route path={item.componente} />);
          })}
          
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
    return <h2>Home</h2>;
  }
  
  function Artistas() {
    return <h2>Artistas</h2>;
  }
  
  function Canciones() {
    return <h2>Canciones</h2>;
  }
  function Albums() {
    return <h2>Albums</h2>;
  }