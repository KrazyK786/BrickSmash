import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {map} from 'rxjs/operators';
import { Observable } from "rxjs";
import { JwtHelperService } from "@auth0/angular-jwt";

import { User } from "../models/user";
import {API_ENDPOINT} from "../config/config";


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
    return this.http.post<User>(`${API_ENDPOINT}/users/register`, user, {
      headers: headers
    }).pipe(map(res => res));
  }

  authenticateUser(user){
    // let headers = new Headers();
    let headers = new HttpHeaders();
    headers.append('Content-Type','application/json');
    return this.http.post<User>(`${API_ENDPOINT}/users/authenticate`, user, {
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
    return this.http.get<User>(`${API_ENDPOINT}/users/profile`, httpOptions
    );
  }

  // TODO: make new api endpoint for user by id?
  getUserById(id: string): Observable<User> {
    // this.loadToken();

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        // 'Authorization':this.authToken
      })
    }

    console.log('The id of the profile is: '+ id);
    return this.http.get<User>(`${API_ENDPOINT}/users/profile/${id}`, httpOptions
    );
  }

  storeUserData(token, user){
    // let decodedToken = this.jwtHelper.decodeToken(token);
    localStorage.setItem('id_token', token);
    // localStorage.setItem('id_token', decodedToken);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    // this.authToken = decodedToken;
    this.user = user;
  }

  updateUserData(user){
    localStorage.setItem('user', JSON.stringify(user));
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

  getLocalId(): string {
    return JSON.parse(localStorage.getItem('user'))._id;
  }
}
