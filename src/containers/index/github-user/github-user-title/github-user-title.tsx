import * as React from 'react';
import './github-user-title.scss';

interface IGithubUserTitleProps {
    title: string;    
    total: number;
}

export class GithubUserTitle extends React.Component<IGithubUserTitleProps, {}> {
    public render() {
        const {title, total} = this.props;
        return (
            <h3 className="github-user-list-title">
                {title} <strong> ({total})</strong>
            </h3>
        );
    }
}
