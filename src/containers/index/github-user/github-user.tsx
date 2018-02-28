import * as React from 'react';
import './github-user.scss';
import { GithubUserSearch } from './github-user-search/github-user-search';
import { GithubUserList } from './github-user-list/github-user-list';

export class GithubUser extends React.Component<{}, {}> {
    public render() {
        return (
            <div className="github-user">
                <GithubUserSearch />
                <section className="github-user-display">
                    <GithubUserList />
                </section>
            </div>
        );
    }
}