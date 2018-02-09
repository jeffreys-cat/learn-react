import * as React from 'react';
import './apple-basket.scss';
import { AppleItem } from './apple-item/apple-item';
import { bindActionCreators } from 'redux';
import actions from '../../actions/apple.action';
import { connect, Dispatch } from 'react-redux';
import { IApple } from './apple-item/apple-item.model';
import { IAppleBasketProps, IAppleStatus } from './apple-basket.model';

class Apples extends React.Component<IAppleBasketProps, {}> {
    private calculate(): IAppleStatus {
        const status: IAppleStatus = {
            appleEaten: {
                amount: 0,
                weight: 0
            },
            appleNotEaten: {
                amount: 0,
                weight: 0
            }
        };
        this.props.appleBasket.apples.forEach((apple) => {
            const selector = apple.isEaten ? 'appleEaten' : 'appleNotEaten';
            status[selector].amount += 1;
            status[selector].weight += apple.weight;
        });
        return status;
    }
    private getAppleItem(apples: IApple[]) {
        const data = Array<JSX.Element>();
        apples.forEach(apple => {
            if (!apple.isEaten) {
                data.push( <AppleItem apple={apple} eatApple={this.props.actions.eatApple} key={apple.id}/> );
            }
        });

        if (!data.length) {
            data.push(
                <div className="empty-tip" key="empty">苹果篮子空空如也</div>
            );
        }

        return data;
    }
    public render() {
        const appleBasket = this.props.appleBasket;

        const status: IAppleStatus = this.calculate();

        return (
            <div className="apple-basket">
                <div className="title">苹果篮子</div>
                <div className="stats">
                    <div className="section">
                        <div className="head">当前</div>
                        <div className="content">{status.appleNotEaten.amount}个苹果，{status.appleNotEaten.weight}克</div>
                    </div>
                    <div className="section">
                        <div className="head">已吃掉</div>
                        <div className="content">{status.appleEaten.amount}个苹果，{status.appleEaten.weight}克</div>
                    </div>
                </div>
                <div className="appleList">
                    {this.getAppleItem(appleBasket.apples)}
                </div>
                <div className="btn-div">
                    <button className={appleBasket.isPicking ? 'disabled' : ''} onClick={this.props.actions.pickApple} >摘苹果</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        appleBasket: state.appleBasketReducer
    };
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
    actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Apples);