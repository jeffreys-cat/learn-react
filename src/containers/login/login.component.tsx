import * as React from 'react';
import './login.component.scss';
import { ILoginState, ILoginProps } from './login.model';
import { connect, Dispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import authActions from '../../actions/auth.action';

class Login extends React.Component<ILoginProps, ILoginState> {
    constructor(props: ILoginProps) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    // bind form
    private handleChange = (key) => {
        return (event: React.FormEvent<HTMLInputElement>) => {
            const target = event.target as HTMLInputElement;
            this.setState(
                {[key]: target.value}
            );
        };
    }

    public render() {
        return (
            <div className="login-wrap">
                <form className="login-form">
                    <h3>Login</h3>
                    <div className="form-group">
                        <label htmlFor="username">用户名</label>
                        <input type="text" className="input-material" name="username" placeholder="请输入用户名"
                               value={this.state.username} onChange={this.handleChange('username')}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">密码</label>
                        <input type="password" className="input-material" name="password" placeholder="请输入密码"
                               value={this.state.password} onChange={this.handleChange('password')}
                        />
                    </div>
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" defaultChecked={true}/> 记住密码
                        </label>
                    </div>
                    <a className="login-button center-block" onClick={this.props.authActions.login}>登录</a>
                </form>
            </div>
        );
    }
}

// Login
const loginDispatchToProps = (dispatch: Dispatch<any>, ownProps: any) => ({
    authActions: bindActionCreators(authActions, dispatch)
});

const loginStateToProps = (state: any): any => {
    return state;
};

export default connect(loginStateToProps, loginDispatchToProps)(Login);
