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
    return this.http.delete<User>(`users/deleteComment/${commentId}`
    ).pipe();
  }

  // TODO: refactor test code (recipientId
  addComment(recipientId: string, comment: string): Observable<User> {
    const userId: number = JSON.parse(localStorage.getItem('user'))._id;

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

    return this.http.put<User>(`users/addComment`,
      body,
      httpOptions
    ).pipe();
  }
}
