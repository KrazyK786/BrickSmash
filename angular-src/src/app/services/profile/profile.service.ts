import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../../models/User";
import {API_ENDPOINT} from "../../config/config";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    private http: HttpClient
  ) { }

  editProfile(newProfile: string): Observable<User>{
    const userId: number = JSON.parse(localStorage.getItem('user'))._id;

    const body = {
      userId: userId,
      profile: newProfile
    }

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }

    return this.http.put<User>(`${API_ENDPOINT}/users/edit-profile`,
      body,
      httpOptions
    ).pipe();
  }
}
