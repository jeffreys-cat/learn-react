import * as React from 'react';
import { Link } from 'react-router-dom';
import './header.component.scss';
import { IHeaderProps, ILink } from './header.model';
import { InitedHeaderLinks } from './header.data';

export class Header extends React.Component<{}, {}> {
    constructor(props: IHeaderProps) {
        super(props);
        this.state = {
            link: 'home'
        };
    }

    render() {
        return (
            <ul className="header">
                {InitedHeaderLinks.map((link: ILink, index: number) => (
                    <li key={index}><Link to={link.to}>{link.name}</Link></li>
                ))}
            </ul>
        );
    }
}
