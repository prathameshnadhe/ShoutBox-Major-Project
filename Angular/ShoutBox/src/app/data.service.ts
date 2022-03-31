import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
 
  constructor(
      private httpClient:HttpClient
  ) { }

  registerUser(data:any){
    return this.httpClient.post('http://127.0.0.1:8000/api/register',data,{headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  });
  }

  loginUser(data:any){
    return this.httpClient.post('http://127.0.0.1:8000/api/login',data,{headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  });
  }
}
