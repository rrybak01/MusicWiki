import Home from '../Elementos/Home';
import Artistas from '../Elementos/Artistas';
import Canciones from '../Elementos/Canciones';
import Albums from '../Elementos/Albums';
import Login from '../Login/Login';
import SearchBar from "../SearchBar/SearchBar";

export const SidebarData = [
    {
    
        link: '/',
        defaultRoute: true,
        title: 'Inicio',
        component: <Home />,
        
      },
    {
    
        link: '/artistas',
        defaultRoute: false,
        title: 'Artistas',
        component: <Artistas />,
        
      },
      {
        
        link: '/canciones',
        defaultRoute: false,
        title: 'Canciones',
        component: <Canciones />,
        
      },
      {
        
        link: '/albums',
        defaultRoute: false,
        title: 'Albums',
        component: <Albums />
        
      },
      {
        
        link: '/buscar',
        defaultRoute: false,
        title: 'Buscar',
        component: <SearchBar />
        
      },
      {
        
        link: '/perfil',
        defaultRoute: false,
        title: 'Perfil',
        component: <Login />
        
      },
]