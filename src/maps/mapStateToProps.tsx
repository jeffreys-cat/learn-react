export const counterStateToProps = (state: any): any => {
    return {
        enthusiasmLevel: state.counter
    };
};
