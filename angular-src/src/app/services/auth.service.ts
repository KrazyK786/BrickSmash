import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {map} from 'rxjs/operators';

import { Data } from "../interfaces/data";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: any;
  user: any;

  constructor(
    private http:HttpClient
    // public jwtHelper: JwtHelperService
  ) { }

  registerUser(user) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post<Data>('http://localhost:8080/users/register', user, {
      headers: headers
    }).pipe(map(res => res));
  }
}
