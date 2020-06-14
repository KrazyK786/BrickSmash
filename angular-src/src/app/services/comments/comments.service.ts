import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import { Comment } from "../../models/Comment";
import {User} from "../../models/User";

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(
    private http: HttpClient
  ) { }

  deleteComment(commentId: number): Observable<User> {
    return this.http.delete<User>(`http://localhost:8080/users/deleteComment/${commentId}`
    ).pipe();
  }

  // TODO: refactor test code (recipientId
  addComment(recipientId: string, comment: string): Observable<User> {
    const userId: number = JSON.parse(localStorage.getItem('user')).id;

    const body = {
      toId: recipientId,
      userId: userId,
      commentBody: comment
    }

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }

    console.log('Recipient id: ' + recipientId);

    return this.http.put<User>(`http://localhost:8080/users/addComment`,
      body,
      httpOptions
    ).pipe();
  }
}
