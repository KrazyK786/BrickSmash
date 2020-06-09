import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import {UserData} from "../../models/UserData";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:UserData;
  testDate: string;

  constructor(
    private authService:AuthService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.authService.getProfile().subscribe(profile => {
        this.user = profile.user;
        console.log(this.user);
        this.testDate = new Date(this.user.comments[2].date).toDateString();
        // console.log(typeof this.testDate);
        console.log(typeof this.user.comments[2].date);
      },
      err => {
        console.log(err);
        return false;
      });

  }

}
