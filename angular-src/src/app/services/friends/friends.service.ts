import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../../models/User";
import {API_ENDPOINT} from "../../config/config";

@Injectable({
  providedIn: 'root'
})
export class FriendsService {

  constructor(
    private http: HttpClient
  ) { }

  addFriend(friendId: string): Observable<User> {
    const id: number = JSON.parse(localStorage.getItem('user'))._id;

    const body = {
      id: id,
      friendId: friendId
    }

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

    console.log(`friend id is ${friendId}`);

    return this.http.put<User>(`${API_ENDPOINT}/users/addFriend`,
      body,
      httpOptions
    ).pipe();
  }

  deleteFriend(friendId: string): Observable<User> {
    const id: number = JSON.parse(localStorage.getItem('user'))._id;

    // const body = {
    //   id: id,
    //   friendId: friendId
    // }
    //
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json'
    //   })
    // }

    console.log(`friend id is ${friendId}`);

    return this.http.delete<User>(`${API_ENDPOINT}/users/deleteFriend/${id}/${friendId}`,
      ).pipe();
  }
}
