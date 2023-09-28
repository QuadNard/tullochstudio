import { Navigation, Info, Stats, Project, Profile } from '@/types/types';



export const navigations: Navigation[] = [
    { id: 1, name: 'Home', path: '/#home' },
    { id: 2, name: 'Projects', path: '/#projects' },
    { id: 3, name: 'Writings', path: '/#writings' },
    { id: 4, name: 'Contact', path: '/#contact' },
];

export const info: Info[] = [
    { title: ' Global low latency', description: ' Data is replicated to 8+ regions all over the world for the best latency for your users. Add/remove regions without downtime.'}
];

export const stats: Stats[] = [
    {
    title: 'Gobal' , 
    description: 'Data is replicated to 8+ regions all over the world for the best latency for your users. Add/remove regions without downtime.', 
    status: '12,000', 
    statusTwo: '12,0004', 
    statusThree: '12,00', 
    subTitle: 'Regions', 
    subTitleTwo: 'Edge', 
    subTitleThree: 'Requests' 
}
]

export const projects: Project[] = [
    {
      id: '1',
      img: '/imgs/profile.webp',
      title: 'Project 3',
      name: 'Davis',
    },
      {
      id: '2',
      img: '/imgs/profile.webp',
      title: 'Project 1',
      name: 'Davis',
    },
      {
      id: '3',
      img: '/imgs/profile.webp',
      title: 'Project 3',
      name: 'Davis',
    },
       {
      id: '4',
      img: '/imgs/profile.webp',
      title: 'Project 3',
      name: 'Davis',
    },
]

