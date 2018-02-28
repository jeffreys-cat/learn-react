import * as React from 'react';
import './github-user.scss';
import { GithubUserSearch } from './github-user-search/github-user-search';

export class GithubUser extends React.Component<{}, {}> {
    public render() {
        return (
            <div className="github-user">
                <GithubUserSearch />
            </div>
        );
    }
}