import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";

import { Data } from "../../interfaces/data";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user: Data;

  constructor(
    private authService:AuthService
  ) { }

  ngOnInit(): void {
    this.authService.getProfile().subscribe(profile => {
        // console.log(profile);
        this.user = profile.user;
      },
      err => {
        return false;
      });
  }

}
