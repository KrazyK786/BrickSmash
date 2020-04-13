import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";

import { User } from "../../models/user";
import { UserData } from "../../models/UserData";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user: UserData;

  constructor(
    private authService:AuthService
  ) { }

  ngOnInit(): void {
    this.authService.getProfile().subscribe(profile => {
        this.user = profile.user;
      },
      err => {
        return false;
      });
  }

}
