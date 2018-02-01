import * as React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
// Interface & InitedData
import { IHeaderProps, ILink, IHeaderState } from './header.model';
import { InitedHeaderLinks } from './header.data';

export class Header extends React.Component<IHeaderProps, IHeaderState> {
    // constructor
    constructor(props: IHeaderProps) {
        super(props);
        this.state = {
            actived: false
        };
    }
    // toggle checked state
    private clickhandle(link: ILink): void {
        this.resetChecked();
        link.checked = !link.checked;
    }
    // reset checked state
    private resetChecked(): void {
        InitedHeaderLinks.map((link: ILink) => {
            link.checked = false;
        });
    }
    // render page
    public render() {
        const checkedStyle = {
            color: 'RGBA(97, 218, 251, 1.00)'
        };
        const normalStyle = {
            color: 'white'
        };
        const headerItems = InitedHeaderLinks.map((link: ILink) => (
            <li key={link.id.toString()} onClick={() => this.clickhandle(link)}>
                <Link to={link.to} style={link.checked ? checkedStyle : normalStyle}>{link.name}</Link>
            </li>
        ));
        return (
            <ul className="header">
                {headerItems}
            </ul>
        );
    }
}
