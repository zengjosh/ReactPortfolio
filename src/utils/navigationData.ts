import { NavItem } from '../types/navigation';

export const navigationItems: NavItem[] = [
  {
    label: 'About Me',
    path: '/'
  },
  {
    label: 'Resume Page',
    path: '/resume'
  },
  {
    label: 'Projects',
    path: '/projects'
  },
  {
    label: 'Career Exploration',
    children: [
      {
        label: 'COSMOS Robot Inventors',
        children: [
          {
            label: 'Week 1',
            path: '/cosmos-week1'
          },
          {
            label: 'Week 2',
            path: '/cosmos-week2'
          },
          {
            label: 'Week 3',
            path: '/cosmos-week3'
          },
          {
            label: 'Week 4',
            path: '/cosmos-week4'
          }
        ]
      },
      {
        label: 'Guest Speakers',
        path: '/guest-speakers'
      }
    ]
  },
  {
    label: 'Contacts',
    path: '/contacts'
  }
];