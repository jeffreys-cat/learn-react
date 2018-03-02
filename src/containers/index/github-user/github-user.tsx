import * as React from 'react';
import './github-user.scss';
import { GithubUserSearch } from './github-user-search/github-user-search';
import { connect, Dispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchUsersAction, getUserFollowersAction } from './redux/github-user.action';
import { GithubUserTitle } from './github-user-title/github-user-title';
import { GithubUserItem } from './github-user-item/github-user-item';

interface IGithubUserProps {
    searchUser: IGithubUserState;
    getUserFollowers: IGithubUserState;
    searchUserActions: any;
    getUserFollowersActions: any;
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
                    <GithubUserItem key={index} user={user} getUserFollowersAction={this.props.getUserFollowersActions} />
                ));
            });
        }
        return data;
    }
    private getUserFollowers() {
        const data = Array<JSX.Element>();
        if (this.props.getUserFollowers.loading) {
            data.push((
                <span key={0}>Loading...</span>
            ));
        } else {
            this.props.getUserFollowers.data.map((follower, index) => {
                data.push(
                    <GithubUserItem key={index} user={follower} getUserFollowersAction={this.props.getUserFollowersActions} />
                );
            });
        }
        return data;
    }
    public render() {
        const { searchUserActions, searchUser, getUserFollowers } = this.props;
        return (
            <div className="github-user">
                <GithubUserSearch searchUserAction={searchUserActions} />
                <section className="github-user-display">
                    <div className="github-user-list">
                        <GithubUserTitle total={searchUser.total} title="Users" />
                        {this.getGithubUserList()}
                    </div>
                    <div className="github-user-followers">
                        <GithubUserTitle total={getUserFollowers.total} title="Followers" />
                        {this.getUserFollowers()}
                    </div>
                </section>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    searchUser: state.searchUserReducer,
    getUserFollowers: state.getUserFollowersReducer
});
const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
    searchUserActions: bindActionCreators(searchUsersAction, dispatch),
    getUserFollowersActions: bindActionCreators(getUserFollowersAction, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(GithubUser); 
