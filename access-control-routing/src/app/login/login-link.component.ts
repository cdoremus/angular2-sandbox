import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

import { LoginService } from './login.service';
import { LoginLinkService, LOGIN_LINKTEXT, LOGOUT_LINKTEXT } from './login-link.service';
import { AuthenticationTokenProvider } from './authentication-token';


/**
 * Nav bar link for logging in.
 */
@Component({
    selector: 'login-link',
    styles: [`
        .login-link {
            cursor:pointer;
            float:right;
            margin-right:40px;
        }
    `],
    template: `
        <a class="login-link" (click)="linkClicked($event)">{{linkText}}</a>
    `
})
export class LoginLinkComponent implements OnInit {
    linkText: string;

    constructor(
        private router: Router,
        private loginService: LoginService,
        private loginLinkService: LoginLinkService,
        private authTokenProvider: AuthenticationTokenProvider) {
    }

    ngOnInit() {
        this.loginLinkService.loginLinkTextSubject.subscribe(link => this.linkText = link);
    }

    linkClicked(event) {
        let linkText: string = event.target.firstChild.data;
        console.log('LoginLinkComponent#linkClicked(event) event', event.target.firstChild.data);

        // toggle the link text
        switch (linkText) {
            case LOGIN_LINKTEXT:
                this.loginLinkService.loginLinkTextSubject.next(LOGOUT_LINKTEXT);
                break;
            case LOGOUT_LINKTEXT:
                this.authTokenProvider.removeToken();
                this.loginService.loggedInSubject.next(false);
                this.loginLinkService.loginLinkTextSubject.next(LOGIN_LINKTEXT);
                break;
            default:
                console.error(`Unknown link: ${linkText}`);
                break;
        }
        this.router.navigate(['/login']);
    }
}
