import axios, { AxiosRequestConfig } from 'axios';
import { Observable } from 'rxjs';
import { IResult } from '../models/http.model';

/**
 * HttpClient
 */
class HttpClient {
    /**
     * @param url 
     * @param config 
     * @return Observable<IResult<any>>
     */
    get(url: string, config?: AxiosRequestConfig): Observable<IResult<any>> {
        return Observable.fromPromise(axios.get(url, config))
                    .map(response => response.data);
    }
    /**
     * @param url 
     * @param data 
     * @param config 
     * @return Observable<IResult<any>>
     */
    post(url: string, data?: any, config?: AxiosRequestConfig): Observable<IResult<any>> {
        return Observable.fromPromise(axios.post(url, data, config))
                    .map(response => response.data);
    }
}
// Export A HttpClient Instance
export const httpClient = new HttpClient();