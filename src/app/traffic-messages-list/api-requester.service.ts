import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Message } from './schemas.model';

@Injectable({
  providedIn: 'root'
})
export class ApiRequesterService {
  private baseURL: string = "https://api-dev.bvg.de/verkehrsmeldungen";
  private apiKey: string = "hnIBqrWwHFTByyWInsMxuD1vwzT5Gq86";

  constructor(private http: HttpClient) { }

  requestMessages() {
    // prepare querry Parameters
    let querryParameters = new HttpParams();
    querryParameters = querryParameters.append('apikey', this.apiKey);
    // searchParams = searchParams.append('custom', 'key');
    return this.http
      .get<{ [key: string]: Message }>(
        this.baseURL,
        {
          params: querryParameters
        }
      )
      // convert response data trough map 
      .pipe(
        map(responseData => {
          const msgArray: Message[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              msgArray.push(responseData[key]);
            }
          }
          return msgArray;
        })/* ,
        catchError(errorRes => {
          // Send to analytics server
          return throwError(errorRes);
        }) */
      );
  }
}
