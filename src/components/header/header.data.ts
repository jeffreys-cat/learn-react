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
        to: '/topics',
        name: 'Topics',
        id: 3,
        checked: false
    }
];
