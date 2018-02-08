import * as React from 'react';
import './apple-basket.scss';
import { AppleItem } from './apple-item/apple-item';
// import { IAppleBasketProps } from './apple-basket.model';

export class Apples extends React.Component<{}, {}> {
    constructor(props: any) {
        super(props);
    }
    public render() {
        return (
            <div className="apple-basket">
                <div className="title">苹果篮子</div>
                <div className="stats">
                    <div className="section">
                        <div className="head">当前</div>
                        <div className="content">0个苹果，0克</div>
                    </div>
                    <div className="section">
                        <div className="head">已吃掉</div>
                        <div className="content">2个苹果，480克</div>
                    </div>
                </div>
                <div className="appleList">
                    <AppleItem/>
                    <div className="empty-tip">苹果篮子空空如也</div>
                </div>
                <div className="btn-div">
                    <button>摘苹果</button>
                </div>
            </div>
        );
    }
}