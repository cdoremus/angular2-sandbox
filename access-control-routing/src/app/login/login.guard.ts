import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { LoginService } from './login.service';

@Injectable()
export class LoginGuard implements CanActivate {

    constructor(private loginService: LoginService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let ok: boolean = this.loginService.isLoggedIn();
        console.log(`LoginGuard#canActivate() called returning ${ok}`);
        console.log(`Route snapshot url: `, route.url[0].path);
        if (!ok) {
            this.router.navigate(['/login']);
        } else {
            // NOTE: This causes a recursive tailspin!!
            // this.router.navigate([route.url[0].path]);
        }
        return ok;
    }

}
