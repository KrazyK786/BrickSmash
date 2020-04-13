import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {map} from 'rxjs/operators';
import { Observable } from "rxjs";
import { JwtHelperService } from "@auth0/angular-jwt";

import { User } from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: any;
  user: any;

  constructor(
    private http:HttpClient,
    public jwtHelper: JwtHelperService
  ) { }

  registerUser(user) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post<User>('http://localhost:8080/users/register', user, {
      headers: headers
    }).pipe(map(res => res));
  }

  authenticateUser(user){
    // let headers = new Headers();
    let headers = new HttpHeaders();
    headers.append('Content-Type','application/json');
    return this.http.post<User>('http://localhost:8080/users/authenticate', user, {
      headers:headers
    }).pipe(map(res => res));
  }

  getProfile(): Observable<User>{
    this.loadToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization':this.authToken
      })
    }
    return this.http.get<User>('http://localhost:8080/users/profile', httpOptions
    );
  }

  storeUserData(token, user){
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  loggedIn(): boolean {
    return !this.jwtHelper.isTokenExpired();
  }

  logout(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
}
