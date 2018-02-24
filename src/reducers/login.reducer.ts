import { authService } from './../utils/auth.service';
import { Action } from 'redux';
import { history } from '../utils/history';

export const loginReducer = (state: boolean = false, action: Action) => {
    switch (action.type) {
        case 'LOGIN':
            authService.login()
                .subscribe(
                    res => {
                        if (res.code === 0) {
                            localStorage.setItem('isLogined', 'true');
                            history.replace('/');
                        }
                        return;
                    }
                );
            return state = true;
        case 'LOGOUT':
            return;
        default:
            return state;
        }
};
