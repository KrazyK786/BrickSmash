import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { ValidateService } from "./services/validate.service";
import { FlashMessagesModule } from "angular2-flash-messages";
import { AuthService } from "./services/auth.service";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HttpClientModule } from "@angular/common/http";
import { JwtHelperService, JwtModule } from "@auth0/angular-jwt";
import { AuthGuard } from "./guards/auth.guard";
import { BricksmashComponent } from './components/games/bricksmash/bricksmash.component';
import { TetrisComponent } from './components/games/tetris/tetris.component';
import { SearchComponent } from './components/search/search.component';


const appRoutes: Routes = [
  {path:'', component: HomeComponent},
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent},
  {path:'search', component: SearchComponent, canActivate:[AuthGuard]},
  {path:'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
  {path:'profile/:id', component: ProfileComponent, canActivate:[AuthGuard]},
  {path:'games/bricksmash', component: BricksmashComponent, canActivate:[AuthGuard]},
  {path:'games/tetris', component: TetrisComponent, canActivate:[AuthGuard]}
];

export function tokenGetter() {
  return localStorage.getItem("id_token");
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    BricksmashComponent,
    TetrisComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes, {
      onSameUrlNavigation: 'reload'
    }),
    FormsModule,
    FlashMessagesModule.forRoot(),
    HttpClientModule,
    JwtModule.forRoot({
      config:{
        tokenGetter: tokenGetter,
        // whitelistedDomains: ["localhost:3001"],
        whitelistedDomains: new Array(new RegExp('^null$')),
        blacklistedRoutes: ["example.com"]
      }
    })
  ],
  providers: [
    ValidateService,
    AuthService,
    AuthGuard,
    JwtModule,
    JwtHelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
