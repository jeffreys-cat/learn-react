import * as React from 'react';
import './github-user-search.scss';

export class GithubUserSearch extends React.Component<{}, {}> {
    public render() {
        return (
            <div className="github-user-search">
                <input className="input-material" placeholder="please input user name" />
                <button className="button-material xs">Search</button>
            </div>
        );
    }
}