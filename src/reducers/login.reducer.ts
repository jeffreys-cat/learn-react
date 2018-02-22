import { Action } from 'redux';
import { httpClient } from '../utils/http';

export const loginReducer = (state: boolean = false, action: Action) => {
    switch (action.type) {
        case 'LOGIN':
            httpClient.get('http://localhost:8080/test/girls')
                .subscribe(
                    res => {
                        console.log(res);
                        localStorage.setItem('isLogined', 'true');
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
