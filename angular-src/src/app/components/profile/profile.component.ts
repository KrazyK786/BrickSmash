import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import {UserData} from "../../models/UserData";
import {CommentsService} from "../../services/comments/comments.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:UserData;
  comment: string;

  constructor(
    private authService:AuthService,
    private router:Router,
    private commentsService: CommentsService
  ) { }

  ngOnInit(): void {
    this.authService.getProfile().subscribe(profile => {
        this.user = profile.user;
        console.log(this.user);
        // this.testDate = new Date(this.user.comments[2].date).toDateString();
        // console.log(typeof this.testDate);
        // console.log(typeof this.user.comments[2].date);
      },
      err => {
        console.log(err);
        return false;
      });

  }

  addComment(): void{
    // TODO: implement browsing to other profile pages and adding comments to them

    // TODO: refactor test code
    this.commentsService.addComment(this.user.id, this.comment).subscribe( res => {
      if (res.success === true){
        this.user = res.user;
      }
    })

    console.log(this.comment);

    // reset input field
    this.comment = '';
  }

}
