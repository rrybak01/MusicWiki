import './App.css';
import Sidebar  from './Components/SideBar/Sidebar';
import { SidebarData } from './Components/Data/SidebarData';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import uuid from "react-uuid";
import SearchBar from './Components/SearchBar/SearchBar';
import CargarPlaylist from "./Components/Elementos/CargarPlaylist";


function App() {
  return (
      <div className="App">
        
    <Router>
        <Sidebar />
        <Switch>
          
          {SidebarData.map( (item) => {
              return (<Route path={item.link} key={uuid()} exact={item.defaultRoute}>{item.component}</Route>);
          })}
          
          <Route path="/playlist" component={CargarPlaylist} />
          
        </Switch>
        </Router>
      </div>

    
  );
}

export default App;
