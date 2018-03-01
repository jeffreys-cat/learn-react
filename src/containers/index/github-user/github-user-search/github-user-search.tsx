import * as React from 'react';
import './github-user-search.scss';

interface IGithubUserSearchProps {
    searchUser: (username: string) => void;
}
interface IGithubUserSearchState {
    username: string;
}

export class GithubUserSearch extends React.Component<IGithubUserSearchProps, IGithubUserSearchState> {
    constructor(props: any) {
        super(props);
        this.state = {
            username: ''
        };
    }

    // bind form
    private handleChange = (key) => {
        return (event: React.FormEvent<HTMLInputElement>) => {
            const target = event.target as HTMLInputElement;
            this.setState(
                {[key]: target.value}
            );
        };
    }

    public render() {
        return (
            <div className="github-user-search">
                <input className="input-material" placeholder="please input username"
                       value={this.state.username} onChange={this.handleChange('username')}
                 />
                <button className="button-material xs" onClick={() => this.props.searchUser(this.state.username)}>Search</button>
            </div>
        );
    }
}