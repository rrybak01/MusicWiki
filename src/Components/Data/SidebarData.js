import Inicio from '../Elementos/Inicio';
import Login from '../Login/Login';
import SearchBar from "../SearchBar/SearchBar";

export const SidebarData = [
      {
        
        link: '/',
        defaultRoute: true,
        title: '🏠 Inicio',
        component: <Inicio />,
        
      },
      {
        
        link: '/buscar',
        defaultRoute: true,
        title: '🔍 Buscar',
        component: <SearchBar />
        
      },
      {
        
        link: '/perfil',
        defaultRoute: true,
        title: '🙍‍♂️ Perfil',
        component: <Login />
        
      },
]