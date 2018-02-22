import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { IResult } from '../models/http.model';

class HttpClient {
    get(url: string, config?: AxiosRequestConfig): Observable<AxiosResponse<IResult<any>>> {
        const observable = Observable.fromPromise(axios.get(url, config));
        return observable;
    }

    post(url: string, data?: any, config?: AxiosRequestConfig) {
        return axios.post(url, data, config);
    }
}
export const httpClient = new HttpClient();