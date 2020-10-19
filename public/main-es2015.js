(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/__ivy_ngcc__/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class AppComponent {
    constructor() {
        this.title = 'BrickSmassshhhhh';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, consts: [[1, "container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "flash-messages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["*[_ngcontent-%COMP%] {\r\n  font-family: \"Press Start 2P\", cursive;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQ0FBc0M7QUFDeEMiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlByZXNzIFN0YXJ0IDJQXCIsIGN1cnNpdmU7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: tokenGetter, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenGetter", function() { return tokenGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/__ivy_ngcc__/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/__ivy_ngcc__/fesm2015/auth0-angular-jwt.js");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _components_games_bricksmash_bricksmash_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/games/bricksmash/bricksmash.component */ "./src/app/components/games/bricksmash/bricksmash.component.ts");
/* harmony import */ var _components_games_tetris_tetris_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/games/tetris/tetris.component */ "./src/app/components/games/tetris/tetris.component.ts");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/search/search.component */ "./src/app/components/search/search.component.ts");

























const appRoutes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"] },
    { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_11__["RegisterComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"] },
    { path: 'search', component: _components_search_search_component__WEBPACK_IMPORTED_MODULE_20__["SearchComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_17__["AuthGuard"]] },
    { path: 'dashboard', component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__["DashboardComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_17__["AuthGuard"]] },
    { path: 'profile/:id', component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_14__["ProfileComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_17__["AuthGuard"]] },
    { path: 'games/bricksmash', component: _components_games_bricksmash_bricksmash_component__WEBPACK_IMPORTED_MODULE_18__["BricksmashComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_17__["AuthGuard"]] },
    { path: 'games/tetris', component: _components_games_tetris_tetris_component__WEBPACK_IMPORTED_MODULE_19__["TetrisComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_17__["AuthGuard"]] }
];
function tokenGetter() {
    return localStorage.getItem("id_token");
}
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _services_validate_service__WEBPACK_IMPORTED_MODULE_4__["ValidateService"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
        _guards_auth_guard__WEBPACK_IMPORTED_MODULE_17__["AuthGuard"],
        _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_16__["JwtModule"],
        _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_16__["JwtHelperService"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes, {
                onSameUrlNavigation: 'reload'
            }),
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__["FlashMessagesModule"].forRoot(),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"],
            _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_16__["JwtModule"].forRoot({
                config: {
                    tokenGetter: tokenGetter,
                    whitelistedDomains: ["localhost:3001"],
                    blacklistedRoutes: ["example.com"]
                }
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
        _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"],
        _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
        _components_register_register_component__WEBPACK_IMPORTED_MODULE_11__["RegisterComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
        _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__["DashboardComponent"],
        _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_14__["ProfileComponent"],
        _components_games_bricksmash_bricksmash_component__WEBPACK_IMPORTED_MODULE_18__["BricksmashComponent"],
        _components_games_tetris_tetris_component__WEBPACK_IMPORTED_MODULE_19__["TetrisComponent"],
        _components_search_search_component__WEBPACK_IMPORTED_MODULE_20__["SearchComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__["FlashMessagesModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_16__["JwtModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                    _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"],
                    _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                    _components_register_register_component__WEBPACK_IMPORTED_MODULE_11__["RegisterComponent"],
                    _components_home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
                    _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__["DashboardComponent"],
                    _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_14__["ProfileComponent"],
                    _components_games_bricksmash_bricksmash_component__WEBPACK_IMPORTED_MODULE_18__["BricksmashComponent"],
                    _components_games_tetris_tetris_component__WEBPACK_IMPORTED_MODULE_19__["TetrisComponent"],
                    _components_search_search_component__WEBPACK_IMPORTED_MODULE_20__["SearchComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes, {
                        onSameUrlNavigation: 'reload'
                    }),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__["FlashMessagesModule"].forRoot(),
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"],
                    _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_16__["JwtModule"].forRoot({
                        config: {
                            tokenGetter: tokenGetter,
                            whitelistedDomains: ["localhost:3001"],
                            blacklistedRoutes: ["example.com"]
                        }
                    })
                ],
                providers: [
                    _services_validate_service__WEBPACK_IMPORTED_MODULE_4__["ValidateService"],
                    _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
                    _guards_auth_guard__WEBPACK_IMPORTED_MODULE_17__["AuthGuard"],
                    _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_16__["JwtModule"],
                    _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_16__["JwtHelperService"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_comments_comments_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/comments/comments.service */ "./src/app/services/comments/comments.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






function DashboardComponent_div_0_tr_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Add some friends!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a1) { return ["/profile", a1]; };
function DashboardComponent_div_0_tr_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const friend_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, friend_r12._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](friend_r12.username);
} }
function DashboardComponent_div_0_tr_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "'No Comment' :P");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_0_tr_40_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_0_tr_40_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const comment_r13 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r14.deleteComment(comment_r13._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, comment_r13.date));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](comment_r13.body);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](comment_r13.user.username);
} }
const _c1 = function () { return ["/games/bricksmash"]; };
const _c2 = function () { return ["/games/tetris"]; };
function DashboardComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "BrickSmash");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Tetris");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "High Scores");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Friends");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, DashboardComponent_div_0_tr_25_Template, 3, 0, "tr", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, DashboardComponent_div_0_tr_26_Template, 4, 4, "tr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Feed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Comment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "User");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, DashboardComponent_div_0_tr_39_Template, 3, 0, "tr", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, DashboardComponent_div_0_tr_40_Template, 11, 5, "tr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Welcome to your Dashboard ", ctx_r7.user.name, "! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r7.user.name, "'s Arcade Library");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("BrickSmash: ", ctx_r7.user.games.bricksmash.highscore, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Tetris: ", ctx_r7.user.games.tetris.highscore, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.user.friends.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.user.friends);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.user.comments.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.user.comments);
} }
class DashboardComponent {
    constructor(authService, commentsService) {
        this.authService = authService;
        this.commentsService = commentsService;
    }
    ngOnInit() {
        this.authService.getProfile().subscribe(profile => {
            this.user = profile.user;
            console.log(profile);
        }, err => {
            return false;
        });
    }
    deleteComment(id) {
        this.commentsService.deleteComment(id).subscribe(res => {
            if (res.success === true) {
                this.user = res.user;
                console.log(res.user);
            }
        });
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_comments_comments_service__WEBPACK_IMPORTED_MODULE_2__["CommentsService"])); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "page-header"], [1, "jumbotron", "text-center"], [1, "btn", "btn-primary", 3, "routerLink"], [1, "btn", "btn-secondary", 3, "routerLink"], [1, "row"], [1, "col-md-3"], [4, "ngFor", "ngForOf"], [1, "col-md-6"], [2, "font-style", "italic"], [3, "routerLink"], [3, "click"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DashboardComponent_div_0_Template, 41, 12, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]], styles: ["th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\r\n  padding: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRoLCB0ZCB7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard',
                templateUrl: './dashboard.component.html',
                styleUrls: ['./dashboard.component.css']
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _services_comments_comments_service__WEBPACK_IMPORTED_MODULE_2__["CommentsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/games/bricksmash/bricksmash.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/games/bricksmash/bricksmash.component.ts ***!
  \*********************************************************************/
/*! exports provided: BricksmashComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BricksmashComponent", function() { return BricksmashComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models_Paddle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/Paddle */ "./src/app/models/Paddle.ts");
/* harmony import */ var _models_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/constants */ "./src/app/models/constants.ts");
/* harmony import */ var _models_Ball__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/Ball */ "./src/app/models/Ball.ts");
/* harmony import */ var _models_Brick__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../models/Brick */ "./src/app/models/Brick.ts");
/* harmony import */ var _services_games_bricksmash_bricksmash_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/games/bricksmash/bricksmash.service */ "./src/app/services/games/bricksmash/bricksmash.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_games_game_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/games/game.service */ "./src/app/services/games/game.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");











const _c0 = ["brickSmashCanvas"];
const _c1 = function (a1) { return ["/profile", a1]; };
function BricksmashComponent_tr_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c1, user_r42._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r42.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r42.games.bricksmash.highscore);
} }
function BricksmashComponent_input_24_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BricksmashComponent_input_24_Template_input_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r43.startGame(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BricksmashComponent_input_25_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BricksmashComponent_input_25_Template_input_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r45.pause(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r40.pauseButtonClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r40.pauseButtonText);
} }
function BricksmashComponent_input_26_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BricksmashComponent_input_26_Template_input_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r47.gameOver(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class BricksmashComponent {
    constructor(bricksmashService, authService, gameService) {
        this.bricksmashService = bricksmashService;
        this.authService = authService;
        this.gameService = gameService;
        this.moves = {
            [_models_constants__WEBPACK_IMPORTED_MODULE_2__["KEY"].RIGHT]: (paddle) => {
                paddle.rightPressed = true;
                paddle.leftPressed = false;
            },
            [_models_constants__WEBPACK_IMPORTED_MODULE_2__["KEY"].LEFT]: (paddle) => {
                paddle.leftPressed = true;
                paddle.rightPressed = false;
            }
        };
    }
    keyEvent(event) {
        if (this.gameStarted) {
            if (this.moves[event.code]) {
                event.preventDefault();
                this.moves[event.code](this.paddle);
            }
            // console.log(event.code);
            this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
            // this.paddle.draw();
            this.paddle.update();
        }
    }
    // hacky 'debugging' for x/y coordinates
    onMouseUp(e) {
        console.log(e);
    }
    onMouseMove(e) {
        if (this.gameStarted) {
            // e.preventDefault();
            // TODO: resolve mouse movement with page layout
            let relativeX = e.x - this.ctx.canvas.offsetLeft;
            if (relativeX > 0 && relativeX < this.ctx.canvas.width) {
                this.paddle.x = relativeX - this.paddle.width / 2;
            }
            // let relativeX = e.x - this.ctx.canvas.width;
            // if (relativeX > 0 && relativeX < this.ctx.canvas.width) {
            //   this.paddle.x = relativeX - this.paddle.width / 2;
            // }
            // let relativeX = e.clientX - this.ctx.canvas.offsetLeft;
            // if (relativeX > 0 && relativeX < this.ctx.canvas.width) {
            //   this.paddle.x = relativeX - this.paddle.width / 2;
            // }
            // console.log(e);
        }
    }
    ngOnInit() {
        // TODO: use local storage?
        this.authService.getProfile().subscribe(profile => {
            console.log(profile);
            this.user = profile.user;
            // set highscore on page load
            // this.highScore = this.user.bricksmashscore;
            this.highScore = this.user.games.bricksmash.highscore;
        }, err => {
            console.log(err);
            return false;
        });
        this.gameService.getHighScores('bricksmash').subscribe(resArray => {
            console.log(resArray);
            this.highscoreUserArray = resArray;
        });
        this.initBrickSmash();
        // this.resetGame();
        // this.x = this.ctx.canvas.width/2;
        // this.y = this.ctx.canvas.height-30;
    }
    initBrickSmash() {
        // Get the 2D context that we draw on
        this.ctx = this.canvas.nativeElement.getContext('2d');
        this.resetGame();
        // this.initBricks();
        // Calculate size of canvas from constants..?
    }
    // initialize objects for game (maybe move to init method to draw canvas before start?
    startGame() {
        this.resetGame();
        this.paddle = new _models_Paddle__WEBPACK_IMPORTED_MODULE_1__["Paddle"](this.ctx);
        this.ball = new _models_Ball__WEBPACK_IMPORTED_MODULE_3__["Ball"](this.ctx);
        this.bricks = this.initBricks();
        // this.drawBricks();
        // if game already running, canc
        if (this.requestId) {
            cancelAnimationFrame(this.requestId);
        }
        this.gameStarted = true;
        this.animate();
        // if (this.paused){
        //   this.paused = false;
        //   this.animate();
        // }
        //
        // else {
        //   this.paddle = new Paddle(this.ctx);
        //   this.ball = new Ball(this.ctx);
        //   this.bricks = this.initBricks();
        //   // this.drawBricks();
        //
        //   // if game already running, canc
        //   if (this.requestId){
        //     cancelAnimationFrame(this.requestId);
        //   }
        //   this.gameStarted = true;
        //
        //   this.animate();
        //
        // }
        // console.log("now were cooking with oil!");
    }
    animate() {
        if (this.paused) {
            return;
        }
        this.updateBall();
        if (this.gameStarted === false) {
            return;
        }
        this.updateBricks();
        this.drawBrickSmash();
        // requestAnimationFrame(this.animate.bind(this));
        this.requestId = requestAnimationFrame(this.animate.bind(this));
    }
    pause() {
        this.paused = !this.paused;
        if (this.paused) {
            this.pauseButtonText = 'Play';
            this.pauseButtonClass = 'btn btn-success';
            cancelAnimationFrame(this.requestId);
            return;
        }
        else {
            this.pauseButtonText = 'Pause';
            this.pauseButtonClass = 'btn btn-warning';
            this.animate();
        }
    }
    resetGame() {
        this.score = 0;
        // // Development purposes
        // this.lives = 0;
        this.lives = 3;
        this.paused = false;
        this.pauseButtonText = 'Pause';
        this.pauseButtonClass = 'btn btn-warning';
        // this.highScore = this.user.bricksmashscore;
        // if (!this.highScore){
        //   this.highScore = 0;
        // }
    }
    // Reset game
    respawn() {
        this.ball.spawn();
        // this.paddle = new Paddle(this.ctx);
        this.paddle.spawn();
        // this.paused = true;
        this.pause();
        cancelAnimationFrame(this.requestId);
        // this.bricks = this.initBricks();
    }
    updateBall() {
        // this.bricksmashService.screenCollision(this.ball, this.ctx);
        // this.bricksmashService.paddleCollision(this.ball, this.paddle, this.ctx);
        this.bricksmashService.paddleCollision(this.ball, this.paddle, this.ctx);
        // update lives
        if (this.bricksmashService.screenCollision(this.ball, this.ctx)) {
            this.lives--;
            console.log('lives: ' + this.lives);
            if (this.lives === -1) {
                this.lives = 0;
                this.gameOver();
                // return;
            }
            else {
                this.respawn();
                // return;
            }
            // return;
        }
    }
    updateBricks() {
        for (let i = 0; i < this.bricks.length; i++) {
            let tmpBrick = this.bricks[i];
            if (this.bricksmashService.brickCollision(tmpBrick, this.ball)) {
                this.score += 1;
                tmpBrick.status = 0;
            }
        }
    }
    drawBrickSmash() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        this.paddle.draw();
        this.ball.draw();
        this.drawBricks();
    }
    initBricks() {
        let tmpBricks = [];
        let brickRowCount = 3;
        let brickColumnCount = 5;
        for (let c = 0; c < brickColumnCount; c++) {
            // let tmpBricks = [c];
            for (let r = 0; r < brickRowCount; r++) {
                const brickWidth = 75;
                const brickHeight = 20;
                const brickPadding = 10;
                const brickOffsetTop = 30;
                const brickOffsetLeft = 30;
                let brickX = (c * (brickWidth + brickPadding)) + brickOffsetLeft;
                let brickY = (r * (brickHeight + brickPadding)) + brickOffsetTop;
                let newBrick = new _models_Brick__WEBPACK_IMPORTED_MODULE_4__["Brick"](this.ctx, brickX, brickY);
                tmpBricks.push(newBrick);
                // tmpBricks.push(new Brick(this.ctx, brickX, brickY));
            }
        }
        return tmpBricks;
    }
    drawBricks() {
        this.bricks.forEach((brick) => {
            if (brick.status === 1) {
                brick.draw();
            }
        });
    }
    gameOver() {
        this.gameStarted = false;
        cancelAnimationFrame(this.requestId);
        // update highscore
        if (this.score > this.highScore) {
            this.gameService.updateScore('bricksmash', this.score).subscribe(res => {
                // console.log(res);
                if (res.success === true) {
                    // TODO: add this.authService.updateUserData(res.user) ?
                    // this.highScore = res.user.bricksmashscore;
                    this.highScore = res.user.games.bricksmash.highscore;
                }
            });
        }
        // this.highScore = this.score > this.highScore ? this.score : this.highScore;
        this.ctx.fillStyle = 'black';
        this.ctx.fillRect(0, this.ctx.canvas.height / 3, this.ctx.canvas.width, this.ctx.canvas.height / 3);
        // this.ctx.fillRect(1, 3, 8, 1.2);
        this.ctx.font = '25px "Press Start 2P", Arial';
        // this.ctx.font = '50px Arial';
        // this.ctx.font = '1px Arial';
        this.ctx.fillStyle = 'red';
        this.ctx.fillText('GAME OVER', this.ctx.canvas.width / 5, this.ctx.canvas.height / 2);
        // this.ctx.fillText('GAME OVER', 1.8, 4);
        console.log('Game over');
        // return;
    }
}
BricksmashComponent.ɵfac = function BricksmashComponent_Factory(t) { return new (t || BricksmashComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_games_bricksmash_bricksmash_service__WEBPACK_IMPORTED_MODULE_5__["BricksmashService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_games_game_service__WEBPACK_IMPORTED_MODULE_7__["GameService"])); };
BricksmashComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BricksmashComponent, selectors: [["app-bricksmash"]], viewQuery: function BricksmashComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.canvas = _t.first);
    } }, hostBindings: function BricksmashComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function BricksmashComponent_keydown_HostBindingHandler($event) { return ctx.keyEvent($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"])("mouseup", function BricksmashComponent_mouseup_HostBindingHandler($event) { return ctx.onMouseUp($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"])("mousemove", function BricksmashComponent_mousemove_HostBindingHandler($event) { return ctx.onMouseMove($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    } }, decls: 27, vars: 7, consts: [[1, "grid"], [1, "left-column"], [4, "ngFor", "ngForOf"], ["width", "480", "height", "320", 1, "gameCanvas"], ["brickSmashCanvas", ""], [1, "right-column"], [1, "wrapper", "scoreboard"], [1, "wrapper"], ["class", "btn btn-success", "type", "button", "value", "Play", "id", "startButton", 3, "click", 4, "ngIf"], ["type", "button", "id", "pauseButton", 3, "class", "value", "click", 4, "ngIf"], ["class", "btn btn-danger", "type", "button", "value", "Quit", "id", "stopButton", 3, "click", 4, "ngIf"], [3, "routerLink"], ["type", "button", "value", "Play", "id", "startButton", 1, "btn", "btn-success", 3, "click"], ["type", "button", "id", "pauseButton", 3, "value", "click"], ["type", "button", "value", "Quit", "id", "stopButton", 1, "btn", "btn-danger", 3, "click"]], template: function BricksmashComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "High Scores");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "User");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Score");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, BricksmashComponent_tr_10_Template, 6, 5, "tr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "canvas", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Bricksmash");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, BricksmashComponent_input_24_Template, 1, 0, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, BricksmashComponent_input_25_Template, 1, 4, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, BricksmashComponent_input_26_Template, 1, 0, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.highscoreUserArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Score: ", ctx.score, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Lives: ", ctx.lives, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("High Score: ", ctx.highScore, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.gameStarted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.gameStarted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.gameStarted);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLinkWithHref"]], styles: ["table[_ngcontent-%COMP%] {\r\n  border-collapse: separate;\r\n  border-spacing: 5px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.wrapper[_ngcontent-%COMP%] {\r\n  \r\n\r\n  padding: 20px;\r\n}\r\n#pauseButton[_ngcontent-%COMP%] {\r\n  margin-right: 10px;\r\n}\r\n#stopButton[_ngcontent-%COMP%] {\r\n  margin-left: 10px;\r\n}\r\n\r\n.left-column[_ngcontent-%COMP%]{\r\n  \r\n}\r\n.grid[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  \r\n  grid-template-columns: auto auto auto;\r\n  \r\n  padding: 10px;\r\n  -moz-column-gap: 1%;\r\n       column-gap: 1%;\r\n}\r\n\r\n\r\n\r\n\r\n.right-column[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  \r\n}\r\n.gameCanvas[_ngcontent-%COMP%] {\r\n  border: solid 2px;\r\n  background: #eeeeee;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nYW1lcy9icmlja3NtYXNoL2JyaWNrc21hc2guY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNO0FBQ04sNENBQTRDO0FBQzVDLElBQUk7QUFFSixPQUFPO0FBQ1AsZ0JBQWdCO0FBQ2hCLHVCQUF1QjtBQUN2Qiw0Q0FBNEM7QUFDNUMseUJBQXlCO0FBQ3pCLG9CQUFvQjtBQUNwQixrQkFBa0I7QUFDbEIsSUFBSTtBQUVKO0VBQ0UseUJBQXlCO0VBQ3pCLG1CQUFtQjtBQUNyQjtBQUVBLFdBQVc7QUFDWCxxQkFBcUI7QUFDckIsbUJBQW1CO0FBQ25CLHVCQUF1QjtBQUN2QixJQUFJO0FBRUo7RUFDRSxzQkFBc0I7O0VBRXRCLGFBQWE7QUFDZjtBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFFQSxxQ0FBcUM7QUFDckM7RUFDRSxpQkFBaUI7QUFDbkI7QUFHQTtFQUNFLGFBQWE7RUFDYiw0Q0FBNEM7RUFDNUMscUNBQXFDO0VBQ3JDLDhCQUE4QjtFQUM5QixhQUFhO0VBQ2IsbUJBQWM7T0FBZCxjQUFjO0FBQ2hCO0FBRUEsVUFBVTtBQUNWLG1CQUFtQjtBQUNuQix3Q0FBd0M7QUFDeEMsSUFBSTtBQUVKO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw4QkFBOEI7RUFDOUIsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9nYW1lcy9icmlja3NtYXNoL2JyaWNrc21hc2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiB7Ki9cclxuLyogIGZvbnQtZmFtaWx5OiBcIlByZXNzIFN0YXJ0IDJQXCIsIGN1cnNpdmU7Ki9cclxuLyp9Ki9cclxuXHJcbi8qdGVzdCovXHJcbi8qLmdhbWVDYW52YXMgeyovXHJcbi8qICAhKmRpc3BsYXk6IGdyaWQ7KiEqL1xyXG4vKiAgISpncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMyMHB4IDIwMHB4OyohKi9cclxuLyogIGJhY2tncm91bmQ6ICNlZWVlZWU7Ki9cclxuLyogIGRpc3BsYXk6IGJsb2NrOyovXHJcbi8qICBtYXJnaW46IGF1dG87Ki9cclxuLyp9Ki9cclxuXHJcbnRhYmxlIHtcclxuICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xyXG4gIGJvcmRlci1zcGFjaW5nOiA1cHg7XHJcbn1cclxuXHJcbi8qY2FudmFzIHsqL1xyXG4vKiAgYmFja2dyb3VuZDojZWVlOyovXHJcbi8qICBkaXNwbGF5OmJsb2NrOyovXHJcbi8qICAhKm1hcmdpbjowIGF1dG87KiEqL1xyXG4vKn0qL1xyXG5cclxuLndyYXBwZXIge1xyXG4gIC8qdGV4dC1hbGlnbjogY2VudGVyOyovXHJcblxyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbiNwYXVzZUJ1dHRvbiB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4jc3RvcEJ1dHRvbiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi8qVE9ETzogQWRkIHBhZGRpbmcgdG8gb3RoZXIgZGl2cy4uPyovXHJcbi5sZWZ0LWNvbHVtbntcclxuICAvKnBhZGRpbmc6IDEwcHg7Ki9cclxufVxyXG5cclxuXHJcbi5ncmlkIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIC8qZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMDBweCAzMjBweCAyMDBweDsqL1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvIGF1dG87XHJcbiAgLypncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjsqL1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgY29sdW1uLWdhcDogMSU7XHJcbn1cclxuXHJcbi8qLmdyaWQgeyovXHJcbi8qICBkaXNwbGF5OiBncmlkOyovXHJcbi8qICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMyMHB4IDIwMHB4OyovXHJcbi8qfSovXHJcblxyXG4ucmlnaHQtY29sdW1uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIC8qd2lkdGg6IDMwMHB4OyovXHJcbn1cclxuXHJcbi5nYW1lQ2FudmFzIHtcclxuICBib3JkZXI6IHNvbGlkIDJweDtcclxuICBiYWNrZ3JvdW5kOiAjZWVlZWVlO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BricksmashComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-bricksmash',
                templateUrl: './bricksmash.component.html',
                styleUrls: ['./bricksmash.component.css']
            }]
    }], function () { return [{ type: _services_games_bricksmash_bricksmash_service__WEBPACK_IMPORTED_MODULE_5__["BricksmashService"] }, { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }, { type: _services_games_game_service__WEBPACK_IMPORTED_MODULE_7__["GameService"] }]; }, { canvas: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['brickSmashCanvas', { static: true }]
        }], keyEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window: keydown', ['$event']]
        }], onMouseUp: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:mouseup', ['$event']]
        }], onMouseMove: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:mousemove', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/components/games/tetris/tetris.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/games/tetris/tetris.component.ts ***!
  \*************************************************************/
/*! exports provided: TetrisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TetrisComponent", function() { return TetrisComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/constants */ "./src/app/models/constants.ts");
/* harmony import */ var _models_Piece__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/Piece */ "./src/app/models/Piece.ts");
/* harmony import */ var _services_games_tetris_tetris_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/games/tetris/tetris.service */ "./src/app/services/games/tetris/tetris.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_games_game_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/games/game.service */ "./src/app/services/games/game.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");









const _c0 = ["board"];
const _c1 = ["next"];
const _c2 = function (a1) { return ["/profile", a1]; };
function TetrisComponent_tr_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r55 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c2, user_r55._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r55.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r55.games.bricksmash.highscore);
} }
function TetrisComponent_input_32_Template(rf, ctx) { if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TetrisComponent_input_32_Template_input_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r56.play(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TetrisComponent_input_33_Template(rf, ctx) { if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TetrisComponent_input_33_Template_input_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r58.pause(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r53.pauseButtonClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r53.pauseButtonText);
} }
function TetrisComponent_input_34_Template(rf, ctx) { if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TetrisComponent_input_34_Template_input_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r61); const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r60.gameOver(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class TetrisComponent {
    constructor(tetrisService, authService, gameService) {
        this.tetrisService = tetrisService;
        this.authService = authService;
        this.gameService = gameService;
        this.moves = {
            [_models_constants__WEBPACK_IMPORTED_MODULE_1__["KEY"].LEFT]: (p) => (Object.assign(Object.assign({}, p), { x: p.x - 1 })),
            [_models_constants__WEBPACK_IMPORTED_MODULE_1__["KEY"].RIGHT]: (p) => (Object.assign(Object.assign({}, p), { x: p.x + 1 })),
            [_models_constants__WEBPACK_IMPORTED_MODULE_1__["KEY"].DOWN]: (p) => (Object.assign(Object.assign({}, p), { y: p.y + 1 })),
            [_models_constants__WEBPACK_IMPORTED_MODULE_1__["KEY"].SPACE]: (p) => (Object.assign(Object.assign({}, p), { y: p.y + 1 })),
            [_models_constants__WEBPACK_IMPORTED_MODULE_1__["KEY"].UP]: (p) => this.tetrisService.rotate(p)
        };
    }
    keyEvent(event) {
        if (event.code === _models_constants__WEBPACK_IMPORTED_MODULE_1__["KEY"].ESC) {
            this.gameOver();
        }
        //event.keyCode is deprecated
        if (this.moves[event.code]) {
            // If the key exists in our moves stop the event from bubbling
            event.preventDefault();
            // Get the next state of the piece
            let p = this.moves[event.code](this.piece);
            // console.log('p: ');
            // console.log(p);
            // console.log('this');
            // console.log(this.piece);
            // Hard drop
            if (event.code === _models_constants__WEBPACK_IMPORTED_MODULE_1__["KEY"].SPACE) {
                while (this.tetrisService.valid(p, this.board)) {
                    this.points += _models_constants__WEBPACK_IMPORTED_MODULE_1__["POINTS"].HARD_DROP; // Points for every drop
                    this.piece.move(p);
                    p = this.moves[event.code](this.piece);
                }
            }
            else if (this.tetrisService.valid(p, this.board)) {
                // Move the piece
                this.piece.move(p);
                if (event.code === _models_constants__WEBPACK_IMPORTED_MODULE_1__["KEY"].DOWN) {
                    this.points += _models_constants__WEBPACK_IMPORTED_MODULE_1__["POINTS"].SOFT_DROP; // Points if we move down
                }
            }
            // Clear the old position before drawing
            this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
            // Draw the new position
            this.piece.draw();
        }
    }
    ngOnInit() {
        this.authService.getProfile().subscribe(profile => {
            console.log(profile);
            this.user = profile.user;
            // set highscore on page load
            this.highScore = this.user.games.tetris.highscore;
        }, err => {
            console.log(err);
            return false;
        });
        this.gameService.getHighScores('tetris').subscribe(resArray => {
            console.log(resArray);
            this.highscoreUserArray = resArray;
        });
        this.initBoard();
        this.initNext();
        this.resetGame();
        // this.highScore = 0;
        // Scale so we don't need to give size on every draw
        this.ctx.scale(_models_constants__WEBPACK_IMPORTED_MODULE_1__["BLOCK_SIZE"], _models_constants__WEBPACK_IMPORTED_MODULE_1__["BLOCK_SIZE"]);
    }
    initBoard() {
        // Get the 2D context that we draw on
        this.ctx = this.canvas.nativeElement.getContext('2d');
        // Calculate size of canvas from constants.
        this.ctx.canvas.width = _models_constants__WEBPACK_IMPORTED_MODULE_1__["COLS"] * _models_constants__WEBPACK_IMPORTED_MODULE_1__["BLOCK_SIZE"];
        this.ctx.canvas.height = _models_constants__WEBPACK_IMPORTED_MODULE_1__["ROWS"] * _models_constants__WEBPACK_IMPORTED_MODULE_1__["BLOCK_SIZE"];
    }
    initNext() {
        this.ctxNext = this.canvasNext.nativeElement.getContext('2d');
        // Calculate size of canvas from constants.
        // The + 2 is to allow for space to add the drop shadow to
        this.ctxNext.canvas.width = 4 * _models_constants__WEBPACK_IMPORTED_MODULE_1__["BLOCK_SIZE"] + 2;
        this.ctxNext.canvas.height = 4 * _models_constants__WEBPACK_IMPORTED_MODULE_1__["BLOCK_SIZE"];
        this.ctxNext.scale(_models_constants__WEBPACK_IMPORTED_MODULE_1__["BLOCK_SIZE"], _models_constants__WEBPACK_IMPORTED_MODULE_1__["BLOCK_SIZE"]);
    }
    drawBoard() {
        this.board.forEach((row, y) => {
            row.forEach((value, x) => {
                if (value > 0) {
                    this.ctx.fillStyle = _models_constants__WEBPACK_IMPORTED_MODULE_1__["COLORS"][value];
                    this.ctx.fillRect(x, y, 1, 1);
                    // this.add3D(x, y, value);
                }
            });
        });
        // this.addOutlines();
    }
    drawPiece() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        this.piece.draw();
        this.drawBoard();
    }
    play() {
        this.gameStarted = true;
        this.resetGame();
        this.next = new _models_Piece__WEBPACK_IMPORTED_MODULE_2__["Piece"](this.ctx);
        this.piece = new _models_Piece__WEBPACK_IMPORTED_MODULE_2__["Piece"](this.ctx);
        this.next.drawNext(this.ctxNext);
        // console.table(this.board);
        // set current time
        this.time.start = performance.now();
        // If we have an old game running a game, then cancel the old
        if (this.requestId) {
            cancelAnimationFrame(this.requestId);
        }
        this.animate();
    }
    animate(now = 0) {
        // Update elapsed time
        this.time.elapsed = now - this.time.start;
        // If elapsed time has passed time for current level
        if (this.time.elapsed > this.time.level) {
            // Reset start time
            this.time.start = now;
            this.drop();
            if (!this.drop()) {
                this.gameOver();
                return;
            }
        }
        this.drawPiece();
        this.requestId = requestAnimationFrame(this.animate.bind(this));
    }
    drop() {
        // set p as if down key was pressed
        let p = this.moves[_models_constants__WEBPACK_IMPORTED_MODULE_1__["KEY"].DOWN](this.piece);
        if (this.tetrisService.valid(p, this.board)) {
            // Move the piece
            this.piece.move(p);
        }
        else {
            // add piece to gameboard to lock it in
            this.freeze();
            //
            this.clearLines();
            // check if the piece is at the top of the board
            if (this.piece.y === 0) {
                // Game over
                return false;
            }
            // this.piece = new Piece(this.ctx);
            this.piece = this.next;
            this.next = new _models_Piece__WEBPACK_IMPORTED_MODULE_2__["Piece"](this.ctx);
            this.next.drawNext(this.ctxNext);
        }
        return true;
    }
    freeze() {
        this.piece.shape.forEach((row, y) => {
            row.forEach((value, x) => {
                if (value > 0) {
                    this.board[y + this.piece.y][x + this.piece.x] = value;
                }
            });
        });
    }
    clearLines() {
        let lines = 0;
        this.board.forEach((row, y) => {
            // If every value is greater than 0
            if (row.every(value => value !== 0)) {
                lines++;
                // Remove the row
                this.board.splice(y, 1);
                // Add a zero filled array at the top, causing the board to 'move down'
                this.board.unshift(Array(_models_constants__WEBPACK_IMPORTED_MODULE_1__["COLS"]).fill(0));
            }
        });
        if (lines > 0) {
            // Calculate points form cleared lines and level
            this.points += this.tetrisService.getLinesClearedPoints(lines, this.level);
            this.lines += lines;
            // If we have reached the lines per level
            if (this.lines >= _models_constants__WEBPACK_IMPORTED_MODULE_1__["LINES_PER_LEVEL"]) {
                // Goto next level
                this.level++;
                // Remove lines so we start working for the next level
                this.lines -= _models_constants__WEBPACK_IMPORTED_MODULE_1__["LINES_PER_LEVEL"];
                // Increase speed of game
                this.time.level = _models_constants__WEBPACK_IMPORTED_MODULE_1__["LEVEL"][this.level];
            }
        }
    }
    // Initialize game
    resetGame() {
        this.points = 0;
        this.lines = 0;
        this.level = 0;
        this.board = this.tetrisService.getEmptyBoard();
        this.time = { start: 0, elapsed: 0, level: _models_constants__WEBPACK_IMPORTED_MODULE_1__["LEVEL"][this.level] };
        this.paused = false;
        this.pauseButtonText = 'Pause';
        this.pauseButtonClass = 'btn btn-warning';
        // this.addOutlines();
    }
    // getEmptyBoard(): number[][] {
    //   return Array.from({ length: ROWS }, () => Array(COLS).fill(0));
    // }
    gameOver() {
        this.gameStarted = false;
        cancelAnimationFrame(this.requestId);
        // update highscore
        if (this.points > this.highScore) {
            this.gameService.updateScore('tetris', this.points).subscribe(res => {
                // console.log(res);
                if (res.success === true) {
                    this.highScore = res.user.games.tetris.highscore;
                }
            });
        }
        // this.highScore = this.points > this.highScore ? this.points : this.highScore;
        this.highScore = this.points > this.highScore ? this.points : this.highScore;
        this.ctx.fillStyle = 'black';
        this.ctx.fillRect(1, 3, 8, 1.2);
        this.ctx.font = '1px Arial';
        this.ctx.fillStyle = 'red';
        this.ctx.fillText('GAME OVER', 1.8, 4);
    }
    pause() {
        this.paused = !this.paused;
        if (this.paused) {
            this.pauseButtonText = 'Play';
            this.pauseButtonClass = 'btn btn-success';
            cancelAnimationFrame(this.requestId);
            return;
        }
        else {
            this.pauseButtonText = 'Pause';
            this.pauseButtonClass = 'btn btn-warning';
            this.animate();
        }
    }
}
TetrisComponent.ɵfac = function TetrisComponent_Factory(t) { return new (t || TetrisComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_games_tetris_tetris_service__WEBPACK_IMPORTED_MODULE_3__["TetrisService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_games_game_service__WEBPACK_IMPORTED_MODULE_5__["GameService"])); };
TetrisComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TetrisComponent, selectors: [["app-tetris"]], viewQuery: function TetrisComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.canvas = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.canvasNext = _t.first);
    } }, hostBindings: function TetrisComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function TetrisComponent_keydown_HostBindingHandler($event) { return ctx.keyEvent($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 35, vars: 8, consts: [[1, "grid"], [1, "left-column"], [4, "ngFor", "ngForOf"], ["id", "board", 1, "game-board"], ["board", ""], [1, "right-column"], [1, "next"], ["next", ""], [1, "button-container"], ["class", "btn btn-success", "type", "button", "value", "Play", "id", "startButton", 3, "click", 4, "ngIf"], ["type", "button", "id", "pauseButton", 3, "class", "value", "click", 4, "ngIf"], ["class", "btn btn-danger", "type", "button", "value", "Quit", "id", "stopButton", 3, "click", 4, "ngIf"], [3, "routerLink"], ["type", "button", "value", "Play", "id", "startButton", 1, "btn", "btn-success", 3, "click"], ["type", "button", "id", "pauseButton", 3, "value", "click"], ["type", "button", "value", "Quit", "id", "stopButton", 1, "btn", "btn-danger", 3, "click"]], template: function TetrisComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "High Scores");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "User");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Score");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TetrisComponent_tr_10_Template, 6, 5, "tr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "canvas", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Tetris");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "High Score:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Next Block:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "canvas", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, TetrisComponent_input_32_Template, 1, 0, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, TetrisComponent_input_33_Template, 1, 4, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, TetrisComponent_input_34_Template, 1, 0, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.highscoreUserArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Score: ", ctx.points, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Lines: ", ctx.lines, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Level: ", ctx.level, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.highScore);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.gameStarted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.gameStarted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.gameStarted);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"]], styles: ["table[_ngcontent-%COMP%] {\r\n  border-collapse: separate;\r\n  border-spacing: 5px;\r\n}\r\n\r\n.left-column[_ngcontent-%COMP%]{\r\n  padding: 10px;\r\n}\r\n.grid[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  \r\n  grid-template-columns: auto auto auto;\r\n  padding: 10px;\r\n}\r\n\r\n\r\n\r\n\r\n.right-column[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  width: 300px;\r\n}\r\n.game-board[_ngcontent-%COMP%] {\r\n  border: solid 2px;\r\n  background: #eeeeee;\r\n}\r\n.button-container[_ngcontent-%COMP%] {\r\n  \r\n  \r\n  \r\n}\r\n#pauseButton[_ngcontent-%COMP%] {\r\n  margin-right: 10px;\r\n}\r\n#stopButton[_ngcontent-%COMP%] {\r\n  margin-left: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nYW1lcy90ZXRyaXMvdGV0cmlzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTTtBQUNOLDRDQUE0QztBQUM1QyxJQUFJO0FBRUosV0FBVztBQUNYLHlCQUF5QjtBQUN6QixJQUFJO0FBRUo7RUFDRSx5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCO0FBRUEscUNBQXFDO0FBQ3JDO0VBQ0UsYUFBYTtBQUNmO0FBR0E7RUFDRSxhQUFhO0VBQ2IsNENBQTRDO0VBQzVDLHFDQUFxQztFQUNyQyxhQUFhO0FBQ2Y7QUFFQSxVQUFVO0FBQ1YsbUJBQW1CO0FBQ25CLHdDQUF3QztBQUN4QyxJQUFJO0FBRUo7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDhCQUE4QjtFQUM5QixZQUFZO0FBQ2Q7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsa0NBQWtDO0FBQ3BDO0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUVBLG1DQUFtQztBQUNuQywrQkFBK0I7QUFDL0IsSUFBSTtBQUVKLG9DQUFvQztBQUNwQywyQkFBMkI7QUFDM0IsSUFBSTtBQUVKLG9DQUFvQztBQUNwQywrQkFBK0I7QUFDL0IsSUFBSTtBQUVKLHlEQUF5RDtBQUN6RCwrQkFBK0I7QUFDL0IsSUFBSTtBQUVKLDhCQUE4QjtBQUM5Qix5QkFBeUI7QUFDekIsNEJBQTRCO0FBQzVCLHFCQUFxQjtBQUNyQixzQkFBc0I7QUFDdEIsNkJBQTZCO0FBQzdCLElBQUkiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2dhbWVzL3RldHJpcy90ZXRyaXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiB7Ki9cclxuLyogIGZvbnQtZmFtaWx5OiAnUHJlc3MgU3RhcnQgMlAnLCBjdXJzaXZlOyovXHJcbi8qfSovXHJcblxyXG4vKi5ib2FyZCB7Ki9cclxuLyogIGJhY2tncm91bmQ6ICNlZWVlZWU7Ki9cclxuLyp9Ki9cclxuXHJcbnRhYmxlIHtcclxuICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xyXG4gIGJvcmRlci1zcGFjaW5nOiA1cHg7XHJcbn1cclxuXHJcbi8qVE9ETzogQWRkIHBhZGRpbmcgdG8gb3RoZXIgZGl2cy4uPyovXHJcbi5sZWZ0LWNvbHVtbntcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG5cclxuLmdyaWQge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgLypncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwMHB4IDMyMHB4IDIwMHB4OyovXHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG8gYXV0bztcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4vKi5ncmlkIHsqL1xyXG4vKiAgZGlzcGxheTogZ3JpZDsqL1xyXG4vKiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMjBweCAyMDBweDsqL1xyXG4vKn0qL1xyXG5cclxuLnJpZ2h0LWNvbHVtbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB3aWR0aDogMzAwcHg7XHJcbn1cclxuXHJcbi5nYW1lLWJvYXJkIHtcclxuICBib3JkZXI6IHNvbGlkIDJweDtcclxuICBiYWNrZ3JvdW5kOiAjZWVlZWVlO1xyXG59XHJcblxyXG4uYnV0dG9uLWNvbnRhaW5lciB7XHJcbiAgLypkaXNwbGF5OiBmbGV4OyovXHJcbiAgLypmbGV4LWRpcmVjdGlvbjogcm93OyovXHJcbiAgLypqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47Ki9cclxufVxyXG5cclxuI3BhdXNlQnV0dG9uIHtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbiNzdG9wQnV0dG9uIHtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5cclxuLyouYnV0dG9uLWNvbnRhaW5lciAucGxheS1idXR0b24geyovXHJcbi8qICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGNhZjUwOyovXHJcbi8qfSovXHJcblxyXG4vKi5idXR0b24tY29udGFpbmVyIC5yZXNldC1idXR0b24geyovXHJcbi8qICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7Ki9cclxuLyp9Ki9cclxuXHJcbi8qLmJ1dHRvbi1jb250YWluZXIgLnBhdXNlLWJ1dHRvbiB7Ki9cclxuLyogIGJhY2tncm91bmQtY29sb3I6ICM0Y2FmNTA7Ki9cclxuLyp9Ki9cclxuXHJcbi8qLmJ1dHRvbi1jb250YWluZXIgLmJ1dHRvbi1jb250YWluZXIgLmJ1dHRvbi1kaXNhYmxlZCB7Ki9cclxuLyogIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7Ki9cclxuLyp9Ki9cclxuXHJcbi8qLmJ1dHRvbi1jb250YWluZXIgLmJ1dHRvbiB7Ki9cclxuLyogICEqZm9udC1zaXplOiAxNnB4OyohKi9cclxuLyogICEqcGFkZGluZzogMTVweCAzMHB4OyohKi9cclxuLyogIGN1cnNvcjogcG9pbnRlcjsqL1xyXG4vKiAgISp3aWR0aDogMTQwcHg7KiEqL1xyXG4vKiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7Ki9cclxuLyp9Ki9cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TetrisComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tetris',
                templateUrl: './tetris.component.html',
                styleUrls: ['./tetris.component.css']
            }]
    }], function () { return [{ type: _services_games_tetris_tetris_service__WEBPACK_IMPORTED_MODULE_3__["TetrisService"] }, { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }, { type: _services_games_game_service__WEBPACK_IMPORTED_MODULE_5__["GameService"] }]; }, { canvas: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['board', { static: true }]
        }], canvasNext: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['next', { static: true }]
        }], keyEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window: keydown', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



const _c0 = function () { return ["/register"]; };
const _c1 = function () { return ["/login"]; };
class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 26, vars: 4, consts: [[1, "jumbotron", "text-center"], [1, "lead"], [1, "btn", "btn-primary", 3, "routerLink"], [1, "btn", "btn-secondary", 3, "routerLink"], [1, "row"], [1, "col-md-4"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "The Arcade Library");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Welcome to The Arcade Library!! Low-tech fun in a high-tech world :)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Express Backend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "A rock solid Node.js/Express server using Mongoose to organize models and query the database");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Angular-CLI");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Angular-CLI to generate components, services and more. Local dev server and easy compilation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "JWT Tokens");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Full featured authentication using JSON web tokens. Login and store user data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/__ivy_ngcc__/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






class LoginComponent {
    constructor(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    ngOnInit() {
    }
    onLoginSubmit() {
        const user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(data => {
            if (data.success) {
                this.authService.storeUserData(data.token, data.user);
                this.flashMessage.show('You are now logged in!', {
                    cssClass: 'alert-success',
                    timeout: 5000
                });
                this.router.navigate(['dashboard']);
            }
            else {
                this.flashMessage.show(data.msg, {
                    cssClass: 'alert-danger',
                    timeout: 5000
                });
                this.router.navigate(['login']);
            }
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 12, vars: 2, consts: [[1, "page-header"], [3, "submit"], [1, "form-group"], ["type", "text", "name", "username", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "password", "name", "password", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", "value", "Login", 1, "btn", "btn-primary"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function LoginComponent_Template_form_submit_2_listener() { return ctx.onLoginSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_6_listener($event) { return ctx.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_10_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/__ivy_ngcc__/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






const _c0 = function () { return ["/dashboard"]; };
function NavbarComponent_li_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Dashboard ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "(current)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
const _c1 = function (a1) { return ["/profile", a1]; };
function NavbarComponent_li_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Profile ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "(current)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c1, ctx_r1.authService.getLocalId()));
} }
const _c2 = function () { return ["/login"]; };
function NavbarComponent_li_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Login ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "(current)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c2));
} }
const _c3 = function () { return ["/register"]; };
function NavbarComponent_li_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Register ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "(current)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c3));
} }
function NavbarComponent_li_17_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_li_17_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.onLogoutClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c4 = function () { return ["/search"]; };
class NavbarComponent {
    constructor(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    ngOnInit() {
        // double check if anyone is logged in
        if (JSON.parse(localStorage.getItem('user'))) {
            this.id = JSON.parse(localStorage.getItem('user')).id;
        }
        // console.log(this.user._id);
        // console.log(this.id);
    }
    getLoggedInIdAndRoute() {
        this.id = JSON.parse(localStorage.getItem('user')).id;
        this.router.navigate((['/profile', this.id]));
    }
    onLogoutClick() {
        this.authService.logout();
        // authService.logout();
        this.flashMessage.show('You have been logged out!', {
            cssClass: 'alert-success',
            timeout: 3000
        });
        this.router.navigate(['/login']);
        return false;
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 18, vars: 7, consts: [[1, "navbar", "navbar-expand-md", "navbar-dark", "bg-dark"], ["href", "#", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarsExampleDefault", "aria-controls", "navbarsExampleDefault", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarsExampleDefault", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto", "navbar-left"], [1, "nav-item", "active"], [1, "nav-link", 3, "routerLink"], [1, "sr-only"], [1, "navbar-nav", "navbar-right"], ["class", "nav-item active", 4, "ngIf"], ["class", "nav-item", 4, "ngIf"], [1, "nav-item"], ["href", "#", 1, "nav-link", 3, "click"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "The Arcade Library");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Search ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "(current)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, NavbarComponent_li_13_Template, 5, 2, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, NavbarComponent_li_14_Template, 5, 3, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, NavbarComponent_li_15_Template, 5, 2, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, NavbarComponent_li_16_Template, 5, 2, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, NavbarComponent_li_17_Template, 3, 0, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.loggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.loggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.authService.loggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.authService.loggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.loggedIn());
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.css']
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_comments_comments_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/comments/comments.service */ "./src/app/services/comments/comments.service.ts");
/* harmony import */ var _services_friends_friends_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/friends/friends.service */ "./src/app/services/friends/friends.service.ts");
/* harmony import */ var _services_profile_profile_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/profile/profile.service */ "./src/app/services/profile/profile.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");












function ProfileComponent_div_0_p_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r17.profile.profile);
} }
function ProfileComponent_div_0_ng_template_19_button_0_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_div_0_ng_template_19_button_0_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r25.editProfile(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Edit Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_0_ng_template_19_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ProfileComponent_div_0_ng_template_19_ng_template_1_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r27.submitEditProfile(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "textarea", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileComponent_div_0_ng_template_19_ng_template_1_Template_textarea_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r29.newProfile = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("rows", ctx_r24.rows);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r24.newProfile);
} }
function ProfileComponent_div_0_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProfileComponent_div_0_ng_template_19_button_0_Template, 2, 0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileComponent_div_0_ng_template_19_ng_template_1_Template, 5, 2, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r18.editingProfile)("ngIfElse", _r23);
} }
function ProfileComponent_div_0_form_20_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ProfileComponent_div_0_form_20_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r30.addComment(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Comment:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileComponent_div_0_form_20_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r32.comment = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r19.comment);
} }
function ProfileComponent_div_0_button_21_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_div_0_button_21_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r33.addFriend(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add to Friends!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_0_button_22_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_div_0_button_22_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r35.deleteFriend(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Remove Friend");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "High Scores");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "About Me");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ProfileComponent_div_0_p_18_Template, 2, 1, "p", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ProfileComponent_div_0_ng_template_19_Template, 3, 2, "ng-template", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ProfileComponent_div_0_form_20_Template, 6, 1, "form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ProfileComponent_div_0_button_21_Template, 2, 0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ProfileComponent_div_0_button_22_Template, 2, 0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r16.profile.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Username: ", ctx_r16.profile.username, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Email: ", ctx_r16.profile.email, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("BrickSmash: ", ctx_r16.profile.games.bricksmash.highscore, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Tetris: ", ctx_r16.profile.games.tetris.highscore, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r16.editingProfile);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16.isMyProfile());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r16.isMyProfile());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r16.isFriend() && !ctx_r16.isMyProfile());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16.isFriend() && !ctx_r16.isMyProfile());
} }
class ProfileComponent {
    constructor(authService, router, commentsService, route, friendsService, profileService) {
        this.authService = authService;
        this.router = router;
        this.commentsService = commentsService;
        this.route = route;
        this.friendsService = friendsService;
        this.profileService = profileService;
        // TODO: What is this..?
        this.destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    ngOnInit() {
        this.fetchData();
        // set profile variables?
        this.editingProfile = false;
        // re-fetch data on navigation
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((event) => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroyed)).subscribe(() => {
            this.fetchData();
        });
    }
    ngOnDestroy() {
        this.destroyed.next();
        this.destroyed.complete();
    }
    fetchData() {
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
            for (let i = 0; i < profileString.length; i++) {
                let char = profileString[i];
                if (char === '\n') {
                    rowCount++;
                }
            }
            this.rows = String(rowCount);
            // console.log(this.rows);
        }, error => {
            console.log(error);
            return false;
        });
    }
    addComment() {
        // TODO: implement browsing to other profile pages and adding comments to them
        // TODO: refactor test code
        this.commentsService.addComment(this.id, this.comment).subscribe(res => {
            if (res.success === true) {
                // no user update needed; comment added to another user
                // TODO: why did I do this? is it necessary?
                // this.user = res.user;
            }
        });
        // console.log(this.comment);
        // reset input field
        this.comment = '';
    }
    addFriend() {
        this.friendsService.addFriend(this.id).subscribe(res => {
            if (res.success === true) {
                // update user data
                this.authService.updateUserData(res.user);
                this.user = res.user;
            }
        });
    }
    deleteFriend() {
        this.friendsService.deleteFriend(this.id).subscribe(res => {
            if (res.success === true) {
                // update user data
                this.authService.updateUserData(res.user);
                this.user = res.user;
            }
        });
    }
    isMyProfile() {
        let self = String(this.user._id);
        let profileId = this.id;
        if (self === profileId) {
            return true;
        }
        return false;
    }
    isFriend() {
        // console.log(this.user);
        let profileId = this.id;
        let friendsArr = this.user.friends;
        for (let i = 0; i < friendsArr.length; i++) {
            // console.log(friendsArr[i]);
            let friendId = String(friendsArr[i]);
            if (friendId === profileId)
                return true;
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
    editProfile() {
        this.editingProfile = true;
        // console.log(this.profile.profile);
    }
    submitEditProfile() {
        // console.log(this.newProfile);
        this.profileService.editProfile(this.newProfile).subscribe(res => {
            if (res.success === true) {
                this.authService.updateUserData(res.user);
                this.user = res.user;
                this.profile = res.user;
            }
        });
        this.editingProfile = false;
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_comments_comments_service__WEBPACK_IMPORTED_MODULE_5__["CommentsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_friends_friends_service__WEBPACK_IMPORTED_MODULE_6__["FriendsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_profile_profile_service__WEBPACK_IMPORTED_MODULE_7__["ProfileService"])); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "page-header"], [1, "list-group"], [1, "list-group-item"], [3, "ngIf"], [3, "ngSubmit", 4, "ngIf"], [3, "click", 4, "ngIf"], [3, "click", 4, "ngIf", "ngIfElse"], ["elseBlock", ""], [3, "click"], [3, "ngSubmit"], ["name", "newProfile", 3, "rows", "ngModel", "ngModelChange"], ["type", "text", "name", "comment", 3, "ngModel", "ngModelChange"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProfileComponent_div_0_Template, 23, 10, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.profile);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"]], styles: [".list-group-item[_ngcontent-%COMP%]{\r\n  white-space: pre-wrap;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\ntextarea[_ngcontent-%COMP%]{\r\n  box-sizing: border-box;\r\n  width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxhQUFhO0FBQ2IsMkJBQTJCO0FBQzNCLElBQUk7QUFFSjtFQUNFLHFCQUFxQjtBQUN2QjtBQUVBLG9CQUFvQjtBQUNwQixvQ0FBb0M7QUFDcEMsaUNBQWlDO0FBQ2pDLDRCQUE0QjtBQUM1QixxQkFBcUI7QUFDckIsSUFBSTtBQUNKO0VBR0Usc0JBQXNCO0VBQ3RCLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiNuUHJvZmlsZXsqL1xyXG4vKiAgd2hpdGUtc3BhY2U6IHByZS13cmFwOyovXHJcbi8qfSovXHJcblxyXG4ubGlzdC1ncm91cC1pdGVte1xyXG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcclxufVxyXG5cclxuLyouYm94c2l6aW5nQm9yZGVyeyovXHJcbi8qICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7Ki9cclxuLyogIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDsqL1xyXG4vKiAgYm94LXNpemluZzogYm9yZGVyLWJveDsqL1xyXG4vKiAgISp3aWR0aDogMTAwJTsqISovXHJcbi8qfSovXHJcbnRleHRhcmVhe1xyXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile',
                templateUrl: './profile.component.html',
                styleUrls: ['./profile.component.css']
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services_comments_comments_service__WEBPACK_IMPORTED_MODULE_5__["CommentsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _services_friends_friends_service__WEBPACK_IMPORTED_MODULE_6__["FriendsService"] }, { type: _services_profile_profile_service__WEBPACK_IMPORTED_MODULE_7__["ProfileService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/__ivy_ngcc__/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");







class RegisterComponent {
    constructor(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() {
    }
    onRegisterSubmit() {
        const user = {
            name: this.name,
            username: this.username,
            email: this.email,
            password: this.password
        };
        // Required Fields
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Validate email
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessage.show('Please use a valid email', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Register User
        this.authService.registerUser(user).subscribe(data => {
            if (data.success) {
                this.flashMessage.show('You are now registered and can log in', { cssClass: 'alert-success', timeout: 3000 });
                this.router.navigate(['/login']);
            }
            else {
                this.flashMessage.show('Something went wrong :( ', { cssClass: 'alert-danger', timeout: 3000 });
                this.router.navigate(['/register']);
            }
        });
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_validate_service__WEBPACK_IMPORTED_MODULE_1__["ValidateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 20, vars: 4, consts: [[1, "page-header"], [3, "submit"], [1, "form-group"], ["type", "text", "name", "name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "username", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "email", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "password", "name", "password", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", "value", "Submit", 1, "btn", "btn-primary"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function RegisterComponent_Template_form_submit_2_listener() { return ctx.onRegisterSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_6_listener($event) { return ctx.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_10_listener($event) { return ctx.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_14_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_18_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-register',
                templateUrl: './register.component.html',
                styleUrls: ['./register.component.css']
            }]
    }], function () { return [{ type: _services_validate_service__WEBPACK_IMPORTED_MODULE_1__["ValidateService"] }, { type: angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"] }, { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/search/search.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/search/search.component.ts ***!
  \*******************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_search_search_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/search/search.service */ "./src/app/services/search/search.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






function SearchComponent_h3_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Results");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SearchComponent_thead_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Bricksmash");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Tetris");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a1) { return ["/profile", a1]; };
function SearchComponent_tr_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "View Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r65 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r65.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r65.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r65.games.bricksmash.highscore);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r65.games.tetris.highscore);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, user_r65._id));
} }
class SearchComponent {
    constructor(searchService) {
        this.searchService = searchService;
    }
    ngOnInit() {
        // set type to all to match 'chekced'
        this.type = 'all';
        // initialize search term
        this.searchTerm = '';
    }
    submitSearch() {
        // set search term to return all if blank
        if (this.searchTerm.trim() === '') {
            this.searchTerm = '.*';
        }
        this.searchService.searchUsers(this.searchTerm, this.type).subscribe(resArray => {
            console.log(resArray);
            this.returnedUsers = resArray;
        });
        // check if searchTerm was .* and reset to empty string
        if (this.searchTerm === '.*') {
            this.searchTerm = '';
        }
        // console.log("Search value:" + this.searchValue);
    }
}
SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_search_search_service__WEBPACK_IMPORTED_MODULE_1__["SearchService"])); };
SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchComponent, selectors: [["app-search"]], decls: 28, vars: 4, consts: [[1, "grid"], [1, "searchContainer"], [3, "ngSubmit"], [1, "searchBox"], ["name", "searchValue", "type", "text", 3, "ngModel", "ngModelChange"], ["type", "submit"], [1, "radioOptions"], [1, "options"], ["type", "radio", "name", "type", 3, "click"], ["type", "radio", "name", "type", "checked", "", 3, "click"], [1, "resultsBox"], [4, "ngIf"], [4, "ngFor", "ngForOf"], [3, "routerLink"]], template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SearchComponent_Template_form_ngSubmit_2_listener() { return ctx.submitSearch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "User Search: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SearchComponent_Template_input_ngModelChange_6_listener($event) { return ctx.searchTerm = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchComponent_Template_input_click_13_listener() { return ctx.type = "name"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Username ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchComponent_Template_input_click_17_listener() { return ctx.type = "username"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "All ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchComponent_Template_input_click_21_listener() { return ctx.type = "all"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, SearchComponent_h3_23_Template, 2, 0, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, SearchComponent_thead_25_Template, 11, 0, "thead", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, SearchComponent_tr_27_Template, 12, 7, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchTerm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.returnedUsers);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.returnedUsers);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.returnedUsers);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]], styles: [".grid[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  \r\n  \r\n  \r\n  \r\n  padding: 10px;\r\n  -moz-column-gap: 1%;\r\n       column-gap: 1%;\r\n  text-align: center;\r\n}\r\n\r\n.radioOptions[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  \r\n  grid-template-columns: 1fr 1fr 1fr;\r\n  \r\n  \r\n}\r\n\r\n.options[_ngcontent-%COMP%] {\r\n  padding: 10px;\r\n}\r\n\r\ninput[_ngcontent-%COMP%] {\r\n  margin-left: 5px;\r\n}\r\n\r\n.resultsBox[_ngcontent-%COMP%] {\r\n  \r\n}\r\n\r\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\r\n  padding: 10px;\r\n  text-align: left;\r\n}\r\n\r\ntable[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\n.searchBox[_ngcontent-%COMP%] {\r\n  padding: 10px;\r\n}\r\n\r\nlabel[_ngcontent-%COMP%] {\r\n  padding: 5px;\r\n}\r\n\r\ntr[_ngcontent-%COMP%] {\r\n  \r\n  padding: 15px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsNENBQTRDO0VBQzVDLHlDQUF5QztFQUN6QywrQkFBK0I7RUFDL0IsOEJBQThCO0VBQzlCLGFBQWE7RUFDYixtQkFBYztPQUFkLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IseUNBQXlDO0VBQ3pDLGtDQUFrQztFQUNsQyx5QkFBeUI7RUFDekIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxhQUFhO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmlkIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIC8qZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMDBweCAzMjBweCAyMDBweDsqL1xyXG4gIC8qZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG8gYXV0bzsqL1xyXG4gIC8qZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvOyovXHJcbiAgLypncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjsqL1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgY29sdW1uLWdhcDogMSU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ucmFkaW9PcHRpb25zIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIC8qZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG8gYXV0bzsqL1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XHJcbiAgLypncmlkLWNvbHVtbi1nYXA6IDEwcHg7Ki9cclxuICAvKmdyaWQtY29sdW1uOiAxLzE7Ki9cclxufVxyXG5cclxuLm9wdGlvbnMge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG59XHJcblxyXG4ucmVzdWx0c0JveCB7XHJcbiAgLypncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG87Ki9cclxufVxyXG5cclxudGgsIHRkIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnNlYXJjaEJveCB7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxubGFiZWwge1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxudHIge1xyXG4gIC8qYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlOyovXHJcbiAgcGFkZGluZzogMTVweDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-search',
                templateUrl: './search.component.html',
                styleUrls: ['./search.component.css']
            }]
    }], function () { return [{ type: _services_search_search_service__WEBPACK_IMPORTED_MODULE_1__["SearchService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate() {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/models/Ball.ts":
/*!********************************!*\
  !*** ./src/app/models/Ball.ts ***!
  \********************************/
/*! exports provided: Ball */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ball", function() { return Ball; });
class Ball {
    constructor(ctx) {
        this.ctx = ctx;
        this.spawn();
    }
    spawn() {
        this.x = this.ctx.canvas.width / 2;
        this.y = this.ctx.canvas.height - 30;
        this.velocity = {
            x: 2,
            y: -2
        };
        // this.velocity = {
        //   x: Math.random() * (5 - 2) + 2,
        //   y: -Math.random() * (5 - 2) - 2
        // };
        this.radius = 10;
        this.color = 'orange';
        this.mass = 1;
        // this.lives = 3;
        // this.score = 0;
    }
    draw() {
        // draw circle
        this.ctx.beginPath();
        this.ctx.fillStyle = this.color;
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.closePath();
        // this.ctx.beginPath();
        // this.ctx.fillStyle = this.color;
        // this.ctx.fill();
        // this.ctx.arc(this.x, this.y, this.radius,0, Math.PI*2);
        // this.ctx.closePath();
    }
    update() {
        // if (this.score === bricks.length){
        //
        //   alert("YOU WIN, CONGRATULATIONS!!");
        //   document.location.reload();
        // } else{
        //   this.draw();
        //
        // }
        // collision detection with screen
        if (this.x - this.radius <= 0 || this.x + this.radius >= this.ctx.canvas.width) {
            this.velocity.x = -this.velocity.x;
            // this.x = -this.x;
        }
        if (this.y - this.radius <= 0 || this.y + this.radius >= this.ctx.canvas.height) {
            this.velocity.y = -this.velocity.y;
            // this.y = -this.y;
        }
        // // handle lives
        // else if (this.y + this.velocity.y > this.ctx.canvas.height - this.radius){
        //   if (this.x > paddle.paddleX && this.x < paddle.paddleX + paddle.paddleWidth && (this.y + this.velocity.y > this.ctx.canvas.height - this.radius - paddle.paddleHeight || this.y + this.velocity.y < this.radius + paddle.paddleHeight)){//if ball hits paddle, reverse direction
        //     // adjust angle of ball coming off paddle by modifying x value
        //     this.velocity.x = this.velocity.x * paddleCollision(this, paddle);
        //
        //     // reflect y velocity
        //     this.velocity.y = -this.velocity.y;
        //   }
        //   else{
        //     this.lives--;
        //     if (this.lives == -1){ // updated logic from '!lives' to allow lives to hit 0 before game over is given
        //       alert("GAME OVER"); //if ball hits bottom of screen, alert GAME OVER
        //       document.location.reload();
        //     }
        //     else{
        //       this.x = canvas.width / 2;
        //       this.y = canvas.height - 30;
        //       this.velocity = {
        //         x: Math.random() * (5-2) + 2,
        //         y: -Math.random() * (5-2) - 2
        //       };
        //       paddle.paddleX = (canvas.width - paddle.paddleWidth) / 2;
        //     }
        //   }
        // }
        //
        //
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        this.draw();
    }
}


/***/ }),

/***/ "./src/app/models/Brick.ts":
/*!*********************************!*\
  !*** ./src/app/models/Brick.ts ***!
  \*********************************/
/*! exports provided: Brick */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Brick", function() { return Brick; });
class Brick {
    constructor(ctx, x, y) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.spawn();
    }
    //testingggg
    // this.velocity = {
    //   x: Math.random() * (5-2) + 2,
    //   y: -Math.random() * (5-2) - 2
    // };
    spawn() {
        this.color = 'green';
        this.status = 1;
        this.height = 20;
        this.width = 75;
        this.brickPadding = 10;
        this.brickOffsetTop = 30;
        this.brickOffsetLeft = 30;
    }
    draw() {
        this.ctx.beginPath();
        this.ctx.rect(this.x, this.y, this.width, this.height);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.closePath();
    }
    update() {
        if (this.status == 1) {
            this.draw();
        }
        // collisionDetection(this,ball);
    }
}


/***/ }),

/***/ "./src/app/models/Paddle.ts":
/*!**********************************!*\
  !*** ./src/app/models/Paddle.ts ***!
  \**********************************/
/*! exports provided: Paddle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Paddle", function() { return Paddle; });
class Paddle {
    constructor(ctx) {
        this.ctx = ctx;
        this.spawn();
    }
    spawn() {
        this.color = 'blue';
        this.height = 10;
        this.width = 75;
        this.x = (this.ctx.canvas.width - this.width) / 2;
        this.rightPressed = false;
        this.leftPressed = false;
        //testingggg
        this.velocity = {
            x: Math.random() * (5 - 2) + 2,
            y: -Math.random() * (5 - 2) - 2
        };
    }
    draw() {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.ctx.canvas.height - this.height, this.width, this.height);
        // this.ctx.rect(this.x,this.ctx.canvas.height - this.paddleHeight, this.paddleWidth, this.paddleHeight);
        // this.ctx.beginPath();
        // this.ctx.fill();
        // this.ctx.closePath();
    }
    update() {
        this.draw();
        //detect whether the paddle is off the screen and move accordingly
        if (this.rightPressed && this.x < this.ctx.canvas.width - this.width) {
            this.x += 7;
        }
        if (this.leftPressed && this.x > 0) {
            this.x -= 7;
        }
    }
}


/***/ }),

/***/ "./src/app/models/Piece.ts":
/*!*********************************!*\
  !*** ./src/app/models/Piece.ts ***!
  \*********************************/
/*! exports provided: Piece */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Piece", function() { return Piece; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/app/models/constants.ts");

class Piece {
    constructor(ctx) {
        this.ctx = ctx;
        this.spawn();
    }
    spawn() {
        const typeId = this.randomizeTetrominoType(_constants__WEBPACK_IMPORTED_MODULE_0__["COLORS"].length - 1);
        // const colorId: number = this.randomizeTetrominoType(COLORS.length);
        // const shapeId: number = this.randomizeTetrominoType(SHAPES.length);
        this.color = _constants__WEBPACK_IMPORTED_MODULE_0__["COLORS"][typeId];
        this.shape = _constants__WEBPACK_IMPORTED_MODULE_0__["SHAPES"][typeId]; //[[2, 0, 0], [2, 2, 2], [0, 0, 0]];
        // Position where the shape spawns
        this.x = 3;
        this.y = 0;
    }
    draw() {
        // removed scaling- was re-scaling on every draw..? :( (making the pieces bigger and bigger)
        this.shape.forEach((row, y) => {
            row.forEach((value, x) => {
                if (value > 0) {
                    this.ctx.fillStyle = this.color;
                    const currentX = this.x + x;
                    const currentY = this.y + y;
                    this.ctx.fillRect(currentX, currentY, 1, 1);
                    // this.add3D(this.ctx, currentX, currentY);
                }
            });
        });
    }
    add3D(ctx, x, y) {
        // Darker Color
        ctx.fillStyle = this.colorDarker;
        // Vertical
        ctx.fillRect(x + .9, y, .1, 1);
        // Horizontal
        ctx.fillRect(x, y + .9, 1, .1);
        //Darker Color - Inner
        // Vertical
        ctx.fillRect(x + .65, y + .3, .05, .3);
        // Horizontal
        ctx.fillRect(x + .3, y + .6, .4, .05);
        // Lighter Color - Outer
        ctx.fillStyle = this.colorLighter;
        // Lighter Color - Inner
        // Vertical
        ctx.fillRect(x + .3, y + .3, .05, .3);
        // Horizontal
        ctx.fillRect(x + .3, y + .3, .4, .05);
        // Lighter Color - Outer
        // Vertical
        ctx.fillRect(x, y, .05, 1);
        ctx.fillRect(x, y, .1, .95);
        // Horizontal
        ctx.fillRect(x, y, 1, .05);
        ctx.fillRect(x, y, .95, .1);
    }
    move(p) {
        this.x = p.x;
        this.y = p.y;
        this.shape = p.shape;
    }
    randomizeTetrominoType(noOfTypes) {
        return Math.floor(Math.random() * noOfTypes + 1);
        // return Math.floor(Math.random() * Math.floor(noOfTypes));
    }
    drawNext(ctxNext) {
        ctxNext.clearRect(0, 0, ctxNext.canvas.width, ctxNext.canvas.height);
        // this.shape.forEach((row, y) => {
        //     row.forEach((value, x) => {
        //         if (value > 0) {
        //             this.addNextShadow(ctxNext, x, y);
        //         }
        //     });
        // });
        ctxNext.fillStyle = this.color;
        this.shape.forEach((row, y) => {
            row.forEach((value, x) => {
                if (value > 0) {
                    ctxNext.fillStyle = this.color;
                    const currentX = x + .025;
                    const currentY = y + .025;
                    ctxNext.fillRect(currentX, currentY, 1 - .025, 1 - .025);
                    this.add3D(ctxNext, currentX, currentY);
                }
            });
        });
    }
}


/***/ }),

/***/ "./src/app/models/constants.ts":
/*!*************************************!*\
  !*** ./src/app/models/constants.ts ***!
  \*************************************/
/*! exports provided: KEY, COLS, ROWS, BLOCK_SIZE, LINES_PER_LEVEL, COLORS, SHAPES, POINTS, LEVEL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY", function() { return KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLS", function() { return COLS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROWS", function() { return ROWS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLOCK_SIZE", function() { return BLOCK_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LINES_PER_LEVEL", function() { return LINES_PER_LEVEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLORS", function() { return COLORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHAPES", function() { return SHAPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POINTS", function() { return POINTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LEVEL", function() { return LEVEL; });
// map keys to key codes
class KEY {
}
KEY.RIGHT = 'ArrowRight';
KEY.LEFT = 'ArrowLeft';
KEY.ESC = 'Escape';
KEY.SPACE = 'Space';
KEY.UP = 'ArrowUp';
KEY.DOWN = 'ArrowDown';
// Tetris constants
const COLS = 10;
const ROWS = 20;
const BLOCK_SIZE = 30;
const LINES_PER_LEVEL = 10;
const COLORS = [
    'none',
    'cyan',
    'blue',
    'orange',
    'yellow',
    'green',
    'purple',
    'red'
];
const SHAPES = [
    [],
    [[0, 0, 0, 0], [1, 1, 1, 1], [0, 0, 0, 0], [0, 0, 0, 0]],
    [[2, 0, 0], [2, 2, 2], [0, 0, 0]],
    [[0, 0, 3], [3, 3, 3], [0, 0, 0]],
    [[4, 4], [4, 4]],
    [[0, 5, 5], [5, 5, 0], [0, 0, 0]],
    [[0, 6, 0], [6, 6, 6], [0, 0, 0]],
    [[7, 7, 0], [0, 7, 7], [0, 0, 0]]
];
class POINTS {
}
POINTS.SINGLE = 100;
POINTS.DOUBLE = 300;
POINTS.TRIPLE = 500;
POINTS.TETRIS = 800;
POINTS.SOFT_DROP = 1;
POINTS.HARD_DROP = 2;
class LEVEL {
}
LEVEL[0] = 800;
LEVEL[1] = 720;
LEVEL[2] = 630;
LEVEL[3] = 550;
LEVEL[4] = 470;
LEVEL[5] = 380;
LEVEL[6] = 300;
LEVEL[7] = 220;
LEVEL[8] = 130;
LEVEL[9] = 100;
LEVEL[10] = 80;
LEVEL[11] = 80;
LEVEL[12] = 80;
LEVEL[13] = 70;
LEVEL[14] = 70;
LEVEL[15] = 70;
LEVEL[16] = 50;
LEVEL[17] = 50;
LEVEL[18] = 50;
LEVEL[19] = 30;
LEVEL[20] = 30;


/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/__ivy_ngcc__/fesm2015/auth0-angular-jwt.js");






class AuthService {
    constructor(http, jwtHelper) {
        this.http = http;
        this.jwtHelper = jwtHelper;
    }
    registerUser(user) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/register', user, {
            headers: headers
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(res => res));
    }
    authenticateUser(user) {
        // let headers = new Headers();
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/authenticate', user, {
            headers: headers
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(res => res));
    }
    getProfile() {
        this.loadToken();
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': this.authToken
            })
        };
        return this.http.get('users/profile', httpOptions);
    }
    // TODO: make new api endpoint for user by id?
    getUserById(id) {
        // this.loadToken();
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
                // 'Authorization':this.authToken
            })
        };
        console.log('The id of the profile is: ' + id);
        return this.http.get(`users/profile/${id}`, httpOptions);
    }
    storeUserData(token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    }
    updateUserData(user) {
        localStorage.setItem('user', JSON.stringify(user));
        this.user = user;
    }
    loadToken() {
        const token = localStorage.getItem('id_token');
        this.authToken = token;
    }
    loggedIn() {
        return !this.jwtHelper.isTokenExpired();
    }
    logout() {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    }
    getLocalId() {
        return JSON.parse(localStorage.getItem('user'))._id;
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/comments/comments.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/comments/comments.service.ts ***!
  \*******************************************************/
/*! exports provided: CommentsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsService", function() { return CommentsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class CommentsService {
    constructor(http) {
        this.http = http;
    }
    deleteComment(commentId) {
        return this.http.delete(`users/deleteComment/${commentId}`).pipe();
    }
    // TODO: refactor test code (recipientId
    addComment(recipientId, comment) {
        const userId = JSON.parse(localStorage.getItem('user'))._id;
        const body = {
            toId: recipientId,
            userId: userId,
            commentBody: comment
        };
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
        console.log('Recipient id: ' + recipientId);
        return this.http.put(`users/addComment`, body, httpOptions).pipe();
    }
}
CommentsService.ɵfac = function CommentsService_Factory(t) { return new (t || CommentsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
CommentsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CommentsService, factory: CommentsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommentsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/friends/friends.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/friends/friends.service.ts ***!
  \*****************************************************/
/*! exports provided: FriendsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendsService", function() { return FriendsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class FriendsService {
    constructor(http) {
        this.http = http;
    }
    addFriend(friendId) {
        const id = JSON.parse(localStorage.getItem('user'))._id;
        const body = {
            id: id,
            friendId: friendId
        };
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        console.log(`friend id is ${friendId}`);
        return this.http.put(`users/addFriend`, body, httpOptions).pipe();
    }
    deleteFriend(friendId) {
        const id = JSON.parse(localStorage.getItem('user'))._id;
        // const body = {
        //   id: id,
        //   friendId: friendId
        // }
        //
        // const httpOptions = {
        //   headers: new HttpHeaders({
        //     'Content-Type': 'application/json'
        //   })
        // }
        console.log(`friend id is ${friendId}`);
        return this.http.delete(`users/deleteFriend/${id}/${friendId}`).pipe();
    }
}
FriendsService.ɵfac = function FriendsService_Factory(t) { return new (t || FriendsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
FriendsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FriendsService, factory: FriendsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FriendsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/games/bricksmash/bricksmash.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/services/games/bricksmash/bricksmash.service.ts ***!
  \*****************************************************************/
/*! exports provided: BricksmashService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BricksmashService", function() { return BricksmashService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class BricksmashService {
    constructor() { }
    // hasCollision(ball: Ball, paddle: Paddle, bricks: Brick[]): void{
    //   for (let i = 0; i < bricks.length; i++){
    //     this.brickCollision(bricks[i], ball);
    //   }
    // }
    // detect if ball has collided with paddle
    paddleCollision(ball, paddle, ctx) {
        if ((ball.x > paddle.x) &&
            (ball.x < paddle.x + paddle.width) &&
            ((ball.y + ball.velocity.y > ctx.canvas.height - ball.radius - paddle.height) ||
                (ball.y + ball.velocity.y < ball.radius + paddle.height))) { //if ball hits paddle, reverse direction
            // adjust angle of ball coming off paddle by modifying x value
            // ball.velocity.x = ball.velocity.x * paddleCollision(ball, paddle);
            // reflect y velocity
            ball.velocity.y = -ball.velocity.y;
            return true;
        }
        else {
            // ball.lives--;
            // console.log('lives: ' + ball.lives);
            return false;
            // if (ball.lives == -1){ // updated logic from '!lives' to allow lives to hit 0 before game over is given
            //   alert("GAME OVER"); //if ball hits bottom of screen, alert GAME OVER
            //   document.location.reload();
            // }
            // else{
            //   ball.x = ctx.canvas.width / 2;
            //   ball.y = ctx.canvas.height - 30;
            //   ball.velocity = {
            //     x: Math.random() * (5-2) + 2,
            //     y: -Math.random() * (5-2) - 2
            //   };
            //   paddle.paddleX = (canvas.width - paddle.paddleWidth) / 2;
            // }
        }
        // //TODO figure out how to handle x becoming 0 causing ball not to change direction :(
        // let ballPos = ball.x - paddle.x;
        // let relativePos = ( paddle.width - ballPos );
        // let angle = relativePos * ( Math.PI / paddle.width ); //translate to radians - this finds the number of radians per paddle pixel
        //
        // // Once you got the angle, take the cos of it to grab the direction.
        // //Multiply the direction times the ball's vel, and you got the ball's new velocity
        // let newXvel = Math.cos( angle ) * ball.velocity.x;
        //
        // return newXvel;
    }
    // detect if ball has collided with brick
    brickCollision(brick, ball) {
        if (brick.status === 1) {
            if ((ball.x > brick.x) &&
                (ball.x < brick.x + brick.width) &&
                (ball.y > brick.y) &&
                (ball.y < brick.y + brick.height)) {
                ball.velocity.y = -ball.velocity.y; //if the center of the brick in question is within a brick, then a collision is considered to have occurred
                brick.status = 0;
                // ball.score++;
                console.log('collision detected!');
                return true;
            }
        }
        return false;
    }
    // Did ball 'collide' with bottom of screen
    screenCollision(ball, ctx) {
        let collisionOccurred = false;
        // collision detection with screen
        if (ball.x - ball.radius <= 0 || ball.x + ball.radius >= ctx.canvas.width) {
            ball.velocity.x = -ball.velocity.x;
            // this.x = -this.x;
            // collisionOccurred = true;
        }
        // todo experiment
        // if (ball.y - ball.radius <= 0 || ball.y + ball.radius >= ctx.canvas.height){
        if (ball.y - ball.radius <= 0) {
            ball.velocity.y = -ball.velocity.y;
            ball.y = -ball.y;
        }
        if (ball.y + ball.radius >= ctx.canvas.height) {
            collisionOccurred = true;
        }
        ball.x += ball.velocity.x;
        ball.y += ball.velocity.y;
        return collisionOccurred;
    }
}
BricksmashService.ɵfac = function BricksmashService_Factory(t) { return new (t || BricksmashService)(); };
BricksmashService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BricksmashService, factory: BricksmashService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BricksmashService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/games/game.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/games/game.service.ts ***!
  \************************************************/
/*! exports provided: GameService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameService", function() { return GameService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/services/auth.service.ts");






class GameService {
    constructor(http, authService) {
        this.http = http;
        this.authService = authService;
    }
    updateScore(scoreToUpdate, score) {
        const userId = JSON.parse(localStorage.getItem('user'))._id;
        const body = {
            userId: userId,
            score: score
        };
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
        console.log(`I'm about to update your score`);
        // let headers = new HttpHeaders();
        // headers.append('Content-Type', 'application/json');
        // `http://localhost:8080/users/update-${scoreToUpdate}-score`
        return this.http.put(`users/update-${scoreToUpdate}-score`, body, httpOptions).pipe(
        // catchError((err, user){
        //   console.log(err, user);
        // })
        );
        // return this.http.post('users/update-' + scoreToUpdate + '-score', body, {
        //   headers: headers
        // }); //.pipe(map(res => res));
    }
    getHighScores(game) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
        // TODO: update url to take parameter
        return this.http.get(`users/games/highScores/${game}`, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(res => res.sortedUsers));
    }
}
GameService.ɵfac = function GameService_Factory(t) { return new (t || GameService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
GameService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GameService, factory: GameService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/games/tetris/tetris.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/games/tetris/tetris.service.ts ***!
  \*********************************************************/
/*! exports provided: TetrisService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TetrisService", function() { return TetrisService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/constants */ "./src/app/models/constants.ts");



class TetrisService {
    constructor() { }
    getEmptyBoard() {
        return Array.from({ length: _models_constants__WEBPACK_IMPORTED_MODULE_1__["ROWS"] }, () => Array(_models_constants__WEBPACK_IMPORTED_MODULE_1__["COLS"]).fill(0));
    }
    valid(p, board) {
        return p.shape.every((row, dy) => {
            return row.every((value, dx) => {
                let x = p.x + dx;
                let y = p.y + dy;
                return (this.isEmpty(value) ||
                    (this.insideWalls(x) &&
                        this.aboveFloor(y) &&
                        this.notOccupied(board, x, y)));
                // return value === 0 ||  // Empty cell
                // (p.x + x >= 0 && // Left wall
                //   p.x + x < COLS && // Right wall
                //   p.y + y < ROWS) // Bottom wall -originally '<=' but was going through floor?
            });
        });
    }
    notOccupied(board, x, y) {
        return board[y] && board[y][x] === 0;
    }
    aboveFloor(y) {
        return y <= _models_constants__WEBPACK_IMPORTED_MODULE_1__["ROWS"];
    }
    insideWalls(x) {
        return x >= 0 && x < _models_constants__WEBPACK_IMPORTED_MODULE_1__["COLS"];
    }
    isEmpty(value) {
        return value === 0;
    }
    rotate(piece) {
        // Clone piece using JSON
        let p = JSON.parse(JSON.stringify(piece));
        // Transpose matrix
        for (let y = 0; y < p.shape.length; ++y) {
            for (let x = 0; x < y; ++x) {
                [p.shape[x][y], p.shape[y][x]] = [p.shape[y][x], p.shape[x][y]];
            }
        }
        // Reverse order of the columns
        p.shape.forEach(row => row.reverse());
        // Return clone
        return p;
    }
    getLinesClearedPoints(lines, level) {
        const lineClearPoints = lines === 1
            ? _models_constants__WEBPACK_IMPORTED_MODULE_1__["POINTS"].SINGLE
            : lines === 2
                ? _models_constants__WEBPACK_IMPORTED_MODULE_1__["POINTS"].DOUBLE
                : lines === 3
                    ? _models_constants__WEBPACK_IMPORTED_MODULE_1__["POINTS"].TRIPLE
                    : lines === 4
                        ? _models_constants__WEBPACK_IMPORTED_MODULE_1__["POINTS"].TETRIS
                        : 0;
        // depending on the level, give more points for line clears (+1 since first level is 0)
        return (level + 1) * lineClearPoints;
    }
}
TetrisService.ɵfac = function TetrisService_Factory(t) { return new (t || TetrisService)(); };
TetrisService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TetrisService, factory: TetrisService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TetrisService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/profile/profile.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/profile/profile.service.ts ***!
  \*****************************************************/
/*! exports provided: ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return ProfileService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class ProfileService {
    constructor(http) {
        this.http = http;
    }
    editProfile(newProfile) {
        const userId = JSON.parse(localStorage.getItem('user'))._id;
        const body = {
            userId: userId,
            profile: newProfile
        };
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
        return this.http.put(`users/edit-profile`, body, httpOptions).pipe();
    }
}
ProfileService.ɵfac = function ProfileService_Factory(t) { return new (t || ProfileService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ProfileService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProfileService, factory: ProfileService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/search/search.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/search/search.service.ts ***!
  \***************************************************/
/*! exports provided: SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





class SearchService {
    constructor(http) {
        this.http = http;
    }
    searchUsers(searchTerm, type) {
        // console.log("Search term: " + searchTerm);
        // console.log("Search type: " + type);
        // TODO: make httpOptions into classes? (reuse code)
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        params = params.append('searchTerm', searchTerm);
        params = params.append('type', type);
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            }),
            params: params
        };
        return this.http.get(`users/searchUsers`, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(res => res.sortedUsers));
    }
}
SearchService.ɵfac = function SearchService_Factory(t) { return new (t || SearchService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
SearchService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SearchService, factory: SearchService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/validate.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/validate.service.ts ***!
  \**********************************************/
/*! exports provided: ValidateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateService", function() { return ValidateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ValidateService {
    constructor() { }
    // changed to use bang operator to catch empty string on fields changed on form re-submission
    validateRegister(user) {
        if (!user.name || !user.email || !user.username || !user.password) {
            return false;
        }
        else {
            return true;
        }
    }
    validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
}
ValidateService.ɵfac = function ValidateService_Factory(t) { return new (t || ValidateService)(); };
ValidateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ValidateService, factory: ValidateService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ValidateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\sr115\code\Brick%20Smash%20Game\angular-src\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map