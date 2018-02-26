import * as React from 'react';
import './apple-item.scss';
import { IAppleItemProps } from './apple-item.model';

export class AppleItem extends React.Component<IAppleItemProps, {}> {
    constructor(props: IAppleItemProps) {
        super(props);
    }

    public render() {
        const { apple } = this.props;
        return (
            <div className="apple-item">
                <div className="apple">
                    <img src={require('../../../../assets/imgs/apple.png')} alt="apple"/>
                </div>
                <div className="info">
                    <div className="name">红苹果 - {apple.id}号</div>
                    <div className="weight">{apple.weight}克</div>
                </div>
                <div className="btn-div">
                    <button onClick={() => this.props.eatApple(apple.id)}> 吃掉 </button>
                </div>
            </div>
        );
    }
}