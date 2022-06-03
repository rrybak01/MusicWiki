import Inicio from '../Elementos/Inicio';
import Albums from '../Elementos/Albums';
import Login from '../Login/Login';
import SearchBar from "../SearchBar/SearchBar";

export const SidebarData = [
      {
        
        link: '/inicio',
        defaultRoute: true,
        title: 'Inicio',
        component: <Inicio />,
        
      },
      {
        
        link: '/albums',
        defaultRoute: true,
        title: 'Albums',
        component: <Albums />
        
      },
      {
        
        link: '/buscar',
        defaultRoute: true,
        title: 'Buscar',
        component: <SearchBar />
        
      },
      {
        
        link: '/perfil',
        defaultRoute: true,
        title: 'Perfil',
        component: <Login />
        
      },
]