import * as React from 'react';
import './github-user.scss';
import { GithubUserSearch } from './github-user-search/github-user-search';
import { connect, Dispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchUsersAction } from './github-user.action';
import * as FontAwesomeIcon from '@fortawesome/react-fontawesome';
import * as faAngleRight from '@fortawesome/fontawesome-free-solid/faAngleRight';

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
        return data;
    }
    public render() {
        return (
            <div className="github-user">
                <GithubUserSearch searchUser={this.props.searchUserActions} />
                <section className="github-user-display">
                    <div className="github-user-list">
                        <h3 className="github-user-list-title">Users <em> (1234)</em></h3>
                        {this.getGithubUserList()}                        
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
