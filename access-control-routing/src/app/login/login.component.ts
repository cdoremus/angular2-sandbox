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

    constructor(
      private loginService: LoginService,
      private loginLinkService: LoginLinkService,
      private router: Router,
      @Inject(USER_AUTH_URL) private iAuthUrl: string) {
    }

    ngOnInit() {
      console.log('Inside ngOnInit()');
    }


    onSubmit(form): void {
    //   console.log(`Inside onSubmit() with username ${form.username} and password ${form.password}`);

      this.loginMessage = this.loginService.login(form.username, form.password, this.iAuthUrl);

      if (!this.loginMessage) {
          this.loginService.loggedInSubject.next(true);
          this.loginLinkService.loginLinkTextSubject.next(LOGOUT_LINKTEXT);
          this.router.navigate(['home']);

      }
      //TODO: Display message if it exists
    }
}
