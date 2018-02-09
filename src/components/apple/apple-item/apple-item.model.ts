// export interface IAppleItemState extends React.Props<any> {
//     apple?: IApple;
// }
export interface IAppleItemProps {
    apple: IApple;
    eatApple: (appleId: number) => void;
}
export interface IApple {
    id: number;
    weight: number;
    isEaten: boolean;
}