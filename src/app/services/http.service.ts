import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { catchError, map, timeout } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient,
    private router: Router) {}

  headers = new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded'
  });


  post(url, request) { 
    console.log(request);
    return this.http.post<any>(url, request.toString(), {headers: this.headers}).pipe(
      timeout(60000),
      map(this.extractData)
    );
  }
  

  get(url): Observable<any> {
    return this.http.get(url, { headers: this.headers}).pipe(
      timeout(60000),
      map(this.extractData)
    );
  }

  private extractData(res: HttpResponse<any>) {
    
    const body = res;
    return body || { };
  }
}