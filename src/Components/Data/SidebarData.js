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
        defaultRoute: true,
        title: 'Artistas',
        component: <Artistas />,
        
      },
      {
        
        link: '/canciones',
        defaultRoute: true,
        title: 'Canciones',
        component: <Canciones />,
        
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