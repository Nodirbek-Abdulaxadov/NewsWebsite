import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http: HttpClient) { }

  newsApiurl = 'https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=88e8c22817da47258e4a90696db56995';

  topHeading() : Observable<any> {
    return this._http.get(this.newsApiurl);
  }
}
