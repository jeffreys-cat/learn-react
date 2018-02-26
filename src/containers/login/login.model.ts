export interface ILoginProps {
    authActions: IAuthActions;
}

export interface ILoginState {
    username: string;
    password: string;
}
interface IAuthActions {
    login: () => void;
}