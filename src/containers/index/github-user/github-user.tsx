import * as React from 'react';
import './github-user.scss';
import { GithubUserSearch } from './github-user-search/github-user-search';
import { GithubUserList } from './github-user-list/github-user-list';
import { connect, Dispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchUsersAction } from './github-user.action';

interface IGithubUserProps {
    searchUser: IGithubUserState;
    searchUserActions: any;
}

interface IGithubUserState {
    users: any;
}

class GithubUser extends React.Component<IGithubUserProps, IGithubUserState> {
    public render() {
        return (
            <div className="github-user">
                <GithubUserSearch searchUser={this.props.searchUserActions} />
                <section className="github-user-display">
                    <GithubUserList />
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
