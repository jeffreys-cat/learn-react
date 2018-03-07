import { ILink } from './header.model';
export const InitializedHeaderLinks: Array<ILink> = [
    {
        to: '/',
        name: 'Home',
        id: 1,
        checked: true
    },
    {
        to: '/about',
        name: 'About',
        id: 2,
        checked: false
    },
    {
        to: '/apples',
        name: 'Apples',
        id: 3,
        checked: false
    },
    {
        to: '/github-user',
        name: 'GayHub User',
        id: 4,
        checked: false
    }
];
