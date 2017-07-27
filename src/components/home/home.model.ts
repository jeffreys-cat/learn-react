// HomeProps
export interface IHomeProps extends React.Props<any> {
    name: string;
    enthusiasmLevel: number;
    onIncrement?: () => void;
    onDecrement?: () => void;
}
// HomeState
export interface IHomeState {
    enthusiasmLevel: number;
}
