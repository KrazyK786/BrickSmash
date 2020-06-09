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
    const httpOptions = {
      // headers: new HttpHeaders({
      //   'Content-Type'
      // })
    }
    return this.http.delete<User>(`http://localhost:8080/users/deleteComment/${commentId}`
    ).pipe();
  }
}
