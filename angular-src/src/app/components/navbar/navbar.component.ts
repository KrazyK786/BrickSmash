import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import { FlashMessagesService } from "angular2-flash-messages";
import {UserData} from "../../models/UserData";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user: UserData;
  id: string;

  constructor(
    public authService:AuthService,
    private router:Router,
    private flashMessage:FlashMessagesService
  ) { }

  ngOnInit(): void {
    // double check if anyone is logged in
    if (JSON.parse(localStorage.getItem('user'))){
      this.id = JSON.parse(localStorage.getItem('user')).id;
    }
    // console.log(this.user._id);
    // console.log(this.id);

  }

  getLoggedInIdAndRoute(): void{
    this.id = JSON.parse(localStorage.getItem('user')).id;
    this.router.navigate((['/profile', this.id]));
  }

  onLogoutClick(){
    this.authService.logout();
    // authService.logout();
    this.flashMessage.show('You have been logged out!',{
      cssClass: 'alert-success',
      timeout:3000
    });
    this.router.navigate(['/login']);
    return false;
  }

}
