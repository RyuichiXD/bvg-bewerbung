import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Message } from './schemas.model';

@Injectable({
  providedIn: 'root'
})
export class ApiRequesterService {
  private readonly baseURL: string = "https://api-dev.bvg.de/verkehrsmeldungen";
  private readonly apiKey: string = "api-key";

  constructor(private http: HttpClient) { }

  requestMessages() {
    // TODO: add paramter for additional querys 
    // prepare querry Parameters
    let queryParameters = new HttpParams();
    queryParameters = queryParameters.append('apikey', this.apiKey);

    return this.http
      .get<{ [key: string]: Message }>(
        this.baseURL,
        {
          params: queryParameters
        }
      )
      // convert response data trough map 
      .pipe(
        map(responseData => {
          const msgArray: Message[] = [];
          for (const key in responseData) {
            // check if key in response is a valid property
            if (responseData.hasOwnProperty(key)) {
              msgArray.push(responseData[key]);
            }
          }
          return msgArray;
        })
      );
  }
}
