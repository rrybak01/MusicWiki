import './App.css';
import Sidebar  from './Components/Estructura/Sidebar';
import SearchBar  from './Components/Estructura/SearchBar';
import { SidebarData } from './Data/SidebarData';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import uuid from "react-uuid";


function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <SearchBar />
        <Switch>
          
          {SidebarData.map( (item) => {
              return (<Route path={item.link} key={uuid()} exact={item.defaultRoute}>{item.component}</Route>);
          })}
        
        </Switch>
      </div>
    </Router>

    
  );
}

export default App;
