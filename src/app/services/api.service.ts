import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  private url = 'character'

  constructor(private http: HttpClient) { 

  }

 
  getAllcharacters(): Observable<any> {
    return this.http.get<any>(environment.baseUrl + this.url);
  } 

}
