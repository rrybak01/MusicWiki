import Home from '../Home';
import Artistas from '../Artistas';
import Canciones from '../Canciones';
import Albums from '../Albums';
import Radio from '../Radio';
import Perfil from '../Perfil';

export const SidebarData = [
    {
    
        link: '/',
        defaultRoute: true,
        title: 'Home',
        component: <Home />,
        
      },
      {
    
        link: '/radio',
        defaultRoute: false,
        title: 'Radio',
        component: <Radio />,
        
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
        
        link: '/perfil',
        defaultRoute: false,
        title: 'Perfil',
        component: <Perfil />
        
      },
]