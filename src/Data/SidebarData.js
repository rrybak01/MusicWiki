import { Home } from '../Components/Home';
import { Artistas } from '../Components/Artistas';
import { Canciones } from '../Components/Canciones';
import { Albums } from '../Components/Albums';
import { Icon } from "react-icons-kit";
import {ic_home} from 'react-icons-kit/md/ic_home';
import {ic_person} from 'react-icons-kit/md/ic_person';
import {ic_music_note} from 'react-icons-kit/md/ic_music_note';
import {ic_disc_full} from 'react-icons-kit/md/ic_disc_full';

export const SidebarData = [
  {
    
    link: '/',
    defaultRoute: true,
    title: 'Home',
    icon: <Icon icon={ic_home} />,
    component: <Home />,
    
  },
  {
    
    link: '/artistas',
    defaultRoute: false,
    title: 'Artistas',
    icon: <Icon icon={ic_person} />,
    component: <Artistas />,
    
  },
  {
    
    link: '/canciones',
    defaultRoute: false,
    title: 'Canciones',
    icon: <Icon icon={ic_music_note} />,
    component: <Canciones />,
    
  },
  {
    
    link: '/albums',
    defaultRoute: false,
    title: 'Albums',
    icon: <Icon icon={ic_disc_full} />,
    component: <Albums />
    
  },
];