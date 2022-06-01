import './App.css';
import Sidebar  from './Components/SideBar/Sidebar';
import { SidebarData } from './Components/Data/SidebarData';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import uuid from "react-uuid";

function App() {
  return (
      <div className="App">
        
        <Router basename="/MusicWiki/">
        <Sidebar />
        <Switch>
          
          {SidebarData.map( (item) => {
              return (<Route path={item.link} key={uuid()} exact={item.defaultRoute}>{item.component}</Route>);
          })}
          
        </Switch>
        </Router>
      </div>

    
  );
}

export default App;
