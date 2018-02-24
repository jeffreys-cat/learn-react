import { Action } from 'redux';
import { http } from '../utils/http';

export const loginReducer = (state: boolean = false, action: Action) => {
    switch (action.type) {
        case 'LOGIN':
            http.get('/test/girls')
                .subscribe(
                    res => {
                        // localStorage.setItem('isLogined', 'true');
                    },
                    (err) => console.error(err)
                );
            return state = true;
        case 'LOGOUT':
            return;
        default:
            return state;
        }
};
