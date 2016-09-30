import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlSegment } from '@angular/router';
import {Observable} from 'rxjs';

import { LoginService } from './login.service';

@Injectable()
export class LoginGuard implements CanActivate {

    constructor(private loginService: LoginService, private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        let ok: Observable<boolean>  = this.loginService.isLoggedIn()
        console.log(`Route snapshot url: `, route.url[0].path);
        if (!ok) {
            this.router.navigate(['/login']);
        } else {
            // NOTE: DO NOT DO: This causes a recursive tailspin!!
            // this.router.navigate([route.url[0].path]);
        }
        return ok;
    }

}
