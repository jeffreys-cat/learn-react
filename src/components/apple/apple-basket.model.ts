import { IApple } from './apple-item/apple-item.model';

export interface IAppleBasketProps extends React.Props<any> {
    appleBasket: IAppleBasketState;
    actions: any;
}

export interface IAppleBasketState {
    isPicking: boolean;
    newAppleId: number;
    apples: IApple[];
}

// 苹果的状态
export interface IAppleStatus {
    appleEaten: IAppleProps;
    appleNotEaten: IAppleProps;
}
// 苹果的属性
interface IAppleProps {
    amount: number;
    weight: number;
}