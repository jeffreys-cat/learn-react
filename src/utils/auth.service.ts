import { IResult } from './../models/http.model';
import { Observable } from 'rxjs';
import { http } from './http';

interface IAuthResponse {
    token: string;
    userInfo: IUserInfo;
}
interface IUserInfo {
    username: string;
    age: number;
    cupSize: string;
}
/**
 * AuthService
 */
class AuthService {
    login(): Observable<IResult<IAuthResponse>> {
        return http.post('/test/girls', {
            username: '',
            password: ''
        });
    }

    logout(): void {
        //
    }

    checkLogin(): boolean {
        if (localStorage.getItem('isLogined') === 'true') {
            return true;
        } else {
            return false;
        }
    }
}

export const authService = new AuthService();