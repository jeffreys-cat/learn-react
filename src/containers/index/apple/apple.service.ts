import { IResult } from './../../../models/http.model';
import { Observable } from 'rxjs';
import { http } from '../../../utils/http';
import { IPickAppleResponse } from './apple.model';

class AppleService {
    // 摘苹果
    pickApple(): Observable<IResult<IPickAppleResponse>> {
        return http.get('/test/girls');
    }
}

export const appleService = new AppleService();