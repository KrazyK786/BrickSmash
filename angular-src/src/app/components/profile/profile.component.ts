import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import {ActivatedRoute, Router, ParamMap, RouterEvent, NavigationEnd} from "@angular/router";
import {UserData} from "../../models/UserData";
import {CommentsService} from "../../services/comments/comments.service";
import {FriendsService} from "../../services/friends/friends.service";
import {filter, takeUntil} from "rxjs/operators";
import {Subject} from "rxjs";
import {Friend} from "../../models/Friend";
import {ProfileService} from "../../services/profile/profile.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:UserData;
  profile:UserData;
  comment: string;
  editingProfile: boolean;
  newProfile: string;

  rows: string;

  id: string;

  // TODO: What is this..?
  public destroyed = new Subject<any>();

  constructor(
    private authService:AuthService,
    private router:Router,
    private commentsService: CommentsService,
    private route: ActivatedRoute,
    private friendsService: FriendsService,
    private profileService: ProfileService
  ) {  }

  ngOnInit(): void {
    this.fetchData();

    // set profile variables?
    this.editingProfile = false;


    // re-fetch data on navigation
    this.router.events.pipe(
      filter((event: RouterEvent) => event instanceof NavigationEnd),
      takeUntil(this.destroyed)
    ).subscribe(() => {
        this.fetchData();
      });
  }

  ngOnDestroy(): void {
    this.destroyed.next();
    this.destroyed.complete();
  }

  fetchData(): void{
    // console.log(this.route.snapshot.paramMap.get('id'));
    this.id = this.route.snapshot.paramMap.get('id');
    // console.log(this.id);

    this.user = JSON.parse(localStorage.getItem('user'));

    // TODO: make get profile by id method on authservice?
    this.authService.getUserById(this.id).subscribe(profile => {
        this.profile = profile.user;

        this.newProfile = this.profile.profile;

        // grab rows for profile
        let rowCount = 1;
        let profileString = this.newProfile;

        for(let i = 0; i < profileString.length; i++){
          let char = profileString[i];

          if (char === '\n'){
            rowCount++;
          }
        }

        this.rows = String(rowCount);
        // console.log(this.rows);

      },
      error => {
        console.log(error);
        return false;
      });
  }

  addComment(): void{
    // TODO: implement browsing to other profile pages and adding comments to them

    // TODO: refactor test code
    this.commentsService.addComment(this.id, this.comment).subscribe( res => {
      if (res.success === true){
        // no user update needed; comment added to another user
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
        // update user data
        this.authService.updateUserData(res.user);
        this.user = res.user;
      }
    })
  }

  deleteFriend(): void{
    this.friendsService.deleteFriend(this.id).subscribe(res => {
      if (res.success === true){
        // update user data
        this.authService.updateUserData(res.user);
        this.user = res.user;
      }
    })
  }

  isMyProfile(): boolean{
    let self: string = String(this.user._id);
    let profileId: string = this.id;

    if (self === profileId){
      return true;
    }

    return false;
  }

  isFriend(): boolean{
    // console.log(this.user);

    let profileId: string = this.id;
    let friendsArr: Friend[] = this.user.friends;

    for (let i = 0; i < friendsArr.length; i++){
      // console.log(friendsArr[i]);
      let friendId: string = String(friendsArr[i]);
      if (friendId === profileId) return true;
    }

    return false;
    //
    // let friend: Friend = this.user.friends.find((tmpFriend) => {
    //   return tmpFriend._id === friendId;
    // });
    //
    // if (friend) return true
    // else return false;

  }

  editProfile(): void{
    this.editingProfile = true;
    // console.log(this.profile.profile);
  }

  submitEditProfile(): void{
    // console.log(this.newProfile);

    this.profileService.editProfile(this.newProfile).subscribe( res => {
      if (res.success === true){
        this.authService.updateUserData(res.user);
        this.user = res.user;
        this.profile = res.user;
      }
    })

    this.editingProfile = false;
  }

}
