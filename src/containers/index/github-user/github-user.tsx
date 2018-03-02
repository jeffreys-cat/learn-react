import * as React from 'react';
import './github-user.scss';
import { GithubUserSearch } from './github-user-search/github-user-search';
import { connect, Dispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchUsersAction } from './redux/github-user.action';
import * as FontAwesomeIcon from '@fortawesome/react-fontawesome';
import * as faAngleRight from '@fortawesome/fontawesome-free-solid/faAngleRight';
import { GithubUserTitle } from './github-user-title/github-user-title';

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
                    <li key={index} className="github-user-list-user-item">
                        <div>
                            <img src={user.avatar_url} className="github-user-list-user-item-img" />
                            <span>{user.login}</span>
                        </div>
                        <FontAwesomeIcon icon={faAngleRight} className="github-user-list-arrow" />
                    </li>
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
