import { IResult } from './../models/http.model';
import { Observable } from 'rxjs';
import { http } from './http';
/**
 * AuthService
 */
class AuthService {
    login(): Observable<IResult<any>> {
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