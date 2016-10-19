import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlSegment } from '@angular/router';
import {Observable} from 'rxjs';

import { LoginService } from './login.service';

@Injectable()
export class LoginGuard implements CanActivate {

    constructor(private loginService: LoginService, private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        console.log(`Route snapshot url: `, route.url[0].path);
        let ok: Observable<boolean>  = this.loginService.isLoggedIn();
        ok.subscribe(isOk => {
            let path = route.url[0].path;
            if (!isOk) {
              path = '/login';
              this.router.navigate([path]);
            }
            console.log('New navigation path: ', path);

            this.loginService.currentUrlPathSubject.next(path);
        });
        return ok;
    }

}
