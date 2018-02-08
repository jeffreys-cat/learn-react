// export interface IAppleItemState extends React.Props<any> {
//     apple?: IApple;
// }
export interface IAppleItemProps {
    apple?: IApple;
    eatApple?: (appleId: number) => void;
}
interface IApple {
    id: number;
    weight: number;
}