// HomeProps
export interface HomeProps extends React.Props<any> {
    name: string;
    enthusiasmLevel: number;
    onIncrement?: () => void;
    onDecrement?: () => void;
}
// HomeState
export interface HomeState {
    enthusiasmLevel: number;
}
