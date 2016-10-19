import { Component, OnInit, Input, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { LOGOUT_LINKTEXT } from './login-link.service';
import { LoginLinkService } from './login-link.service';

// Change based on local vs remote calls and deployment location
export const USER_AUTH_URL = 'AUTH_URL';
export const authUrl = './users.json';


@Component({
  selector: 'login',
  styleUrls: ['./login.component.css'],
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
    @Input() username: string;
    @Input() password: string;
    loginMessage: string;
    navigationPath: string = 'home';

    constructor(
      private loginService: LoginService,
      private loginLinkService: LoginLinkService,
      private router: Router,
      @Inject(USER_AUTH_URL) private iAuthUrl: string) {
    }

    ngOnInit() {
      console.log('Inside ngOnInit()');
      this.loginService.currentUrlPathSubject.subscribe(path => this.navigationPath = path ? path : 'home');
    }


    onSubmit(form): void {

      this.loginMessage = this.loginService.login(form.username, form.password, this.iAuthUrl);
      // loginMessage value indicates unsuccessful login
      if (!this.loginMessage) {
          console.log('Login OK. Navigating to ' + this.navigationPath);
          // signify that the user is logged in
          this.loginService.loggedInSubject.next(true);
          // update login link to Logout
          this.loginLinkService.loginLinkTextSubject.next(LOGOUT_LINKTEXT);
          this.router.navigate([this.navigationPath]);
      } else {
          console.log('Login failed');
        //TODO: Display message if it exists
      }
    }
}
