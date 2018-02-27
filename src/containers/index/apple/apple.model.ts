import { IApple } from './apple-item/apple-item.model';
// Props
export interface IAppleBasketProps extends React.Props<any> {
    appleBasket: IAppleBasketState;
    actions: any;
}
// State
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
// 摘苹果请求返回
export interface IPickAppleResponse {
    id: number;
    cupSize: string;
    age: number;
}