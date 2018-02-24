import { IResult } from './../models/http.model';
import { Observable } from 'rxjs';
import { http } from './http';
interface IAuthResponse {
    token: string;
    userInfo: IUserInfo;
}
/**
 * @param username 用户名
 * @param age 年龄
 * @param cupSize Cup
 */
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
        return true;
    }
}

export const authService = new AuthService();