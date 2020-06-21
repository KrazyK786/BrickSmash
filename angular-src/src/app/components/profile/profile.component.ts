import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import {ActivatedRoute, Router, ParamMap} from "@angular/router";
import {UserData} from "../../models/UserData";
import {CommentsService} from "../../services/comments/comments.service";
import {FriendsService} from "../../services/friends/friends.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:UserData;
  profile:UserData;
  comment: string;

  id: string;

  constructor(
    private authService:AuthService,
    private router:Router,
    private commentsService: CommentsService,
    private route: ActivatedRoute,
    private friendsService: FriendsService
  ) {  }

  ngOnInit(): void {
    // console.log(this.route.snapshot.paramMap.get('id'));
    this.id = this.route.snapshot.paramMap.get('id');
    // console.log(this.id);

    this.user = JSON.parse(localStorage.getItem('user'));

    // TODO: make get profile by id method on authservice?
    this.authService.getUserById(this.id).subscribe(profile => {
      this.profile = profile.user;
      // console.log('the profile is: ');
      // console.log(this.profile);
    },
      error => {
      console.log(error);
      return false;
      });

    // this.authService.getProfile().subscribe(profile => {
    //     this.user = profile.user;
    //     console.log(this.user);
    //     // this.testDate = new Date(this.user.comments[2].date).toDateString();
    //     // console.log(typeof this.testDate);
    //     // console.log(typeof this.user.comments[2].date);
    //   },
    //   err => {
    //     console.log(err);
    //     return false;
    //   });

  }

  addComment(): void{
    // TODO: implement browsing to other profile pages and adding comments to them

    // TODO: refactor test code
    this.commentsService.addComment(this.id, this.comment).subscribe( res => {
      if (res.success === true){
        this.user = res.user;
      }
    })

    // console.log(this.comment);

    // reset input field
    this.comment = '';
  }

  addFriend(): void{
    this.friendsService.addFriend(this.id).subscribe(res => {
      if (res.success === true){
        this.user = res.user;
      }
    })
  }

  removeFriend(): void{
    this.friendsService.deleteFriend(this.id).subscribe(res => {
      if (res.success === true){
        this.user = res.user;
      }
    })
  }

}
