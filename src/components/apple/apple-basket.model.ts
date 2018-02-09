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