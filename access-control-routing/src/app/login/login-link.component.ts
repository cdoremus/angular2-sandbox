import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from './login.service';
import { AuthenticationTokenProvider } from './authentication-token';


export const LOGIN_LINKTEXT = 'Login';
export const LOGOUT_LINKTEXT = 'Logout';

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
        <a class="login-link" (click)="linkClicked()">{{linkText}}</a>
    `
})
export class LoginLinkComponent implements OnInit {
    linkText: string;

    constructor(
        private router: Router,
        private loginService: LoginService,
        private authTokenProvider: AuthenticationTokenProvider) {
    }

    ngOnInit() {
        this.linkText = LOGIN_LINKTEXT;
    }

    linkClicked() {
        // toggle the link text
        switch (this.linkText) {
            case LOGIN_LINKTEXT:
                this.linkText = LOGOUT_LINKTEXT;
                break;
            case LOGOUT_LINKTEXT:
                this.authTokenProvider.removeToken();
                this.loginService.loggedInSubject.next(false);
                this.linkText = LOGIN_LINKTEXT;
                break;
            default:
                console.error(`Unknown link: ${this.linkText}`);
                break;
        }
        this.router.navigate(['/login']);
    }
}
