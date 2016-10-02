import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlSegment } from '@angular/router';
import {Observable} from 'rxjs';

import { LoginService } from './login.service';

@Injectable()
export class LoginGuard implements CanActivate {

    constructor(private loginService: LoginService, private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        // console.log(`Route snapshot url: `, route.url[0].path);
        let ok: Observable<boolean>  = this.loginService.isLoggedIn();
        ok.subscribe(isOk => {
            if (!isOk) {
              this.router.navigate(['/login']);
            }
        });
        return ok;
    }

}
