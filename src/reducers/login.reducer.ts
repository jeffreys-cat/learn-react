import { Action } from 'redux';
import axios from 'axios';

export const loginReducer = (state: boolean = false, action: Action) => {
    switch (action.type) {
        case 'LOGIN':
            axios.get('http://localhost:8080/test/girls')
                .then(function (response: any) {
                    console.log(response);
                })
                .catch(function (error: any) {
                    console.log(error);
                });
            return state;
        case 'LOGOUT':
            return;
        default:
            return state;
        }
};
