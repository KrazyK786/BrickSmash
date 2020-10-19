import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthService} from "../auth.service";
import {Observable} from "rxjs";
import {User} from "../../models/User";
import {catchError, map} from "rxjs/operators";
import {HighScoreResponse} from "../../models/HighScoreResponse";
import {UserData} from "../../models/UserData";

@Injectable({
  providedIn: 'root'
})
export class GameService {

  authToken: any;

  constructor(
    private http: HttpClient,
    private authService: AuthService
    ) { }

  updateScore(scoreToUpdate: string, score: number): Observable<User> {
    const userId: number = JSON.parse(localStorage.getItem('user'))._id;
    const body = {
      userId: userId,
      score: score
    }

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }

    console.log(`I'm about to update your score`);

    // let headers = new HttpHeaders();
    // headers.append('Content-Type', 'application/json');
    // `http://localhost:8080/users/update-${scoreToUpdate}-score`
    return this.http.put<User>(`users/update-${scoreToUpdate}-score`,
      body,
      httpOptions
    ).pipe(
      // catchError((err, user){
      //   console.log(err, user);
      // })
    );

    // return this.http.post('users/update-' + scoreToUpdate + '-score', body, {
    //   headers: headers
    // }); //.pipe(map(res => res));
  }

  getHighScores(game: string): Observable<UserData[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }

    // TODO: update url to take parameter
    return this.http.get<HighScoreResponse>(`users/games/highScores/${game}`,
      httpOptions)
      .pipe(
        map(res => res.sortedUsers)
      );
  }
}
