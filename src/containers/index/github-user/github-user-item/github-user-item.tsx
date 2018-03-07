import * as React from 'react';
import * as FontAwesomeIcon from '@fortawesome/react-fontawesome';
import * as faAngleRight from '@fortawesome/fontawesome-free-solid/faAngleRight';
import './github-user-item.scss';

interface IGithubUserItemProps {
    user: any;
    getUserFollowersAction: (username: string, page: number) => void;
}

export class GithubUserItem extends React.Component<IGithubUserItemProps, {}> {
    public render() {
        const {user} = this.props;
        return (
            <li className="github-user-list-user-item" onClick={() => this.props.getUserFollowersAction(user.login, 1)}>
                <div>
                    <img src={user.avatar_url} className="github-user-list-user-item-img" />
                    <span>{user.login}</span>
                </div>
                <FontAwesomeIcon icon={faAngleRight} className="github-user-list-arrow" />
            </li>
        );
    }
}