import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {Subject, Observable} from 'rxjs';

import { LoginService } from './login.service';

@Injectable()
export class LoginGuard implements CanActivate {
    loggedInSubject: Subject<boolean>;

    constructor(private loginService: LoginService, private router: Router) {
        this.loggedInSubject = loginService.loggedInSubject;
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        let ok: Observable<boolean>  = this.loginService.isLoggedIn();
        console.log(`LoginGuard#canActivate() called returning:`, ok);
        // console.log("LoginGuard#canActivate() ActivatedRouteSnapshot param", route);
        // console.log("LoginGuard#canActivate() RouterStateSnapshot param", state);
        return ok;
        // console.log(`Route snapshot url: `, route.url[0].path);
        // if (!ok) {
        //     this.router.navigate(['/login']);
        // } else {
        //     // NOTE: This causes a recursive tailspin!!
        //     // this.router.navigate([route.url[0].path]);
        // }
        // return this.loggedInSubject;
    }

}
