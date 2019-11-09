import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  email:any;
  baseUrl = "http://127.0.0.1:8000/api/";
  token: any;

  constructor(private router:Router,private http:HttpClient) { }
  getToken(token) {
    this.token = token;
  }

  sendToken() {
    return this.token;
  }

  postData(url, data) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Access-Control-Allow-Origin': '*',
        'Authorization': 'Bearer '+this.token
      })
    };
    return this.http.post(this.baseUrl+url+'/', data, httpOptions);
  }

}

