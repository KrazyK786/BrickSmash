import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";

import { User } from "../../models/user";
import { UserData } from "../../models/UserData";
import {CommentsService} from "../../services/comments/comments.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user: UserData;

  constructor(
    private authService:AuthService,
    private commentsService: CommentsService
  ) { }

  ngOnInit(): void {
    this.authService.getProfile().subscribe(profile => {
        this.user = profile.user;
      },
      err => {
        return false;
      });
  }

  deleteComment(id: number): void {
    this.commentsService.deleteComment(id).subscribe(res => {
      if (res.success === true){
        this.user = res.user;
      }
    });
  }
}
