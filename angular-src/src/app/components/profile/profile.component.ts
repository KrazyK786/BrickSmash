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

  constructor(
    private authService:AuthService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.authService.getProfile().subscribe(profile => {
        this.user = profile.user;
        // console.log(this.user);
      },
      err => {
        console.log(err);
        return false;
      });
  }

}
