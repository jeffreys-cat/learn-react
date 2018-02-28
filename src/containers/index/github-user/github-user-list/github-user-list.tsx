import * as React from 'react';
import './github-user-list.scss';
import * as FontAwesomeIcon from '@fortawesome/react-fontawesome';
import * as faAngleRight from '@fortawesome/fontawesome-free-solid/faAngleRight';

export class GithubUserList extends React.Component<{}, {}> {
    users: any[] = [1];

    public render() {
        const userItems = this.users.map((user, index) => (
            <li key={index.toString()} className="github-user-list-user-item">
                <div>
                    <img src={require('../../../../assets/imgs/apple.png')} className="github-user-list-user-item-img" />
                    <span>username</span>
                </div>
                <FontAwesomeIcon icon={faAngleRight} className="github-user-list-arrow" />
            </li>
        ));

        return (
            <div className="github-user-list">
                <h3 className="github-user-list-title">Users <em> (1234)</em></h3>
                {/* <small></small> */}
                <ul>
                    {userItems}
                </ul>
            </div>
        );
    }
}