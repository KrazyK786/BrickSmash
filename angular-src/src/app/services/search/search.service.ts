import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserData} from "../../models/UserData";
import {HighScoreResponse} from "../../models/HighScoreResponse";
import {map} from "rxjs/operators";
import {API_ENDPOINT} from "../../config/config";
// import {apiEndpoint} from "../../app.module";

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(
    private http: HttpClient
  ) { }

  searchUsers(searchTerm: string, type: string):Observable<UserData[]>{
    // console.log("Search term: " + searchTerm);
    // console.log("Search type: " + type);

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
      `${API_ENDPOINT}/users/searchUsers`,
      httpOptions
    )
      .pipe(
        map(res => res.sortedUsers)
      );
  }
}
