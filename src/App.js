import './App.css';
import Sidebar  from './Components/Sidebar';
import { SidebarData } from './Components/Data/SidebarData';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import uuid from "react-uuid";
import SearchBar from './Components/SearchBar';


function App() {
  return (
    <Router>
      <div className="App">
        <SearchBar />
        <Sidebar />
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
