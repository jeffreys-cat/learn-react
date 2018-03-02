import * as React from 'react';
import './github-user.scss';
import { GithubUserSearch } from './github-user-search/github-user-search';
import { connect, Dispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchUsersAction } from './redux/github-user.action';
import { GithubUserTitle } from './github-user-title/github-user-title';
import { GithubUserItem } from './github-user-item/github-user-item';

interface IGithubUserProps {
    searchUser: IGithubUserState;
    searchUserActions: any;
}

interface IGithubUserState {
    data: any[];
    error: string;
    loading: boolean;
    total: number;
}

class GithubUser extends React.Component<IGithubUserProps, IGithubUserState> {
    private getGithubUserList() {
        const data = Array<JSX.Element>();
        if (this.props.searchUser.loading) {
            data.push((
                <span key={0}>Loading...</span>
            ));
        } else {
            this.props.searchUser.data.map((user, index) => {
                data.push((
                    <GithubUserItem key={index} user={user} />
                ));
            });
        }
        return data;
    }
    public render() {
        return (
            <div className="github-user">
                <GithubUserSearch searchUser={this.props.searchUserActions} />
                <section className="github-user-display">
                    <div className="github-user-list">
                        <GithubUserTitle total={this.props.searchUser.total} title="Users" />
                        {this.getGithubUserList()}
                    </div>
                    <div className="github-user-followers">
                        <GithubUserTitle total={this.props.searchUser.total} title="Followers" />
                    </div>
                </section>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    searchUser: state.searchUserReducer
});
const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
    searchUserActions: bindActionCreators(searchUsersAction, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(GithubUser); 
