// HomeProps
export interface IHomeProps extends React.Props<any> {
    name: string;
    enthusiasmLevel: number;
    counterActions: ICounterActions;
    // onIncrement?: () => void;
    // onDecrement?: () => void;
}
// HomeState
export interface IHomeState {
    enthusiasmLevel: number;
}

export interface ICounterActions {
    onIncrement?: () => void;
    onDecrement?: () => void;
}
