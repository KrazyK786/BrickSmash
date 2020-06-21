import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../../models/User";

@Injectable({
  providedIn: 'root'
})
export class FriendsService {

  constructor(
    private http: HttpClient
  ) { }

  addFriend(friendId: string): Observable<User> {
    const id: number = JSON.parse(localStorage.getItem('user')).id;

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

    return this.http.put<User>(`http://localhost:8080/users/addFriend`,
      body,
      httpOptions
    ).pipe();
  }

  deleteFriend(friendId: string): Observable<User> {
    const id: number = JSON.parse(localStorage.getItem('user')).id;

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

    return this.http.delete<User>(`http://localhost:8080/users/deleteFriend/${id}/${friendId}`,
      ).pipe();
  }
}
