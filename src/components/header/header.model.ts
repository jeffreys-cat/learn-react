export interface IHeaderProps extends React.Props<any> {
    clickhandle?: () => void;
}

export interface IHeaderState {
    actived: boolean;
}

export interface ILink {
    to: string;
    name: string;
    id: number;
    checked: boolean;
}
