import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserData} from "../../models/UserData";
import {HighScoreResponse} from "../../models/HighScoreResponse";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(
    private http: HttpClient
  ) { }

  searchUsers(searchTerm: string, type: string): Observable<UserData[]>{
    // TODO: make httpOptions into classes? (reuse code)
    let params = new HttpParams();
    params = params.append('searchTerm', searchTerm);
    params = params.append('type', type);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      params: params
    }

    return this.http.get<HighScoreResponse>(
      `http://localhost:8080/users/searchUsers`,
      httpOptions
    )
      .pipe(
        map(res => res.sortedUsers)
      );
  }
}
