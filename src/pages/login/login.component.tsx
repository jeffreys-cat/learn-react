import * as React from 'react';
import './login.component.scss';

class Login extends React.Component<{}, {}> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <div className="login-wrap">
                <form className="login-form">
                    <h3>Login</h3>
                    <div className="form-group">
                        <label htmlFor="username">用户名</label>
                        <input type="text" className="input-material" name="username" placeholder="请输入用户名"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">密码</label>
                        <input type="password" className="input-material" name="password" placeholder="请输入密码"/>
                    </div>
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" defaultChecked={true}/> 记住密码
                        </label>
                    </div>
                    <a className="login-button center-block">登录</a>
                </form>
            </div>
        );
    }
}

export default Login;
