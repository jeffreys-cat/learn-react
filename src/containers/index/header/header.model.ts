export interface IHeaderProps extends React.Props<any> {
    clickHandle?: () => void;
}

export interface IHeaderState {
    actived: boolean;
}

export interface ILink {
    readonly to: string;
    readonly name: string;
    readonly id: number;
    checked: boolean;
}
