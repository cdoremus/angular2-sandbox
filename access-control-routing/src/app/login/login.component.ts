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
  styles: [`
            .login-form-container {
                margin:5px;
            }
            .login-form-font {
                font-size:20px;
            }
            .form-label {
                display:block;
                margin-left:10px;
                margin-right:auto;
                text-align: left;
            }
            legend {
              margin: 0 0 auto 0;
              font-size: 30px;
              text-align:left;
            }
            .text-input {
                width:350px;
                height:30px;
            }
            fieldset {
                border:0;
                margin:5px auto;
            }
            .form-container {
                margin:0 auto;
                width: 400px;
                border: 2px solid black;
            }
            .submit-container {
                margin:0 auto;
                width: 70px;
            }
            .login-button {
                margin-bottom: 10px;
            }
  `],
  template: `
        <div class="login-form-container login-form-font">
            <form #form="ngForm" (ngSubmit)="onSubmit(form.value)" method="post">
              <fieldset class="form-container">
                <legend>Please login</legend>
                    <fieldset>
                        <label class="form-label">User name:</label>
                        <input type="text" class="text-input login-form-font" name="username"
                          placeholder="Enter user name" tabindex="1" ngModel/>
                    </fieldset>
                    <fieldset>
                        <label class="form-label">Password:</label>
                        <input type="password" class="text-input login-form-font" name="password"
                          placeholder="Enter password" tabindex="2" ngModel/>
                    </fieldset>
                    <div class="submit-container">
                        <input type="submit" class="login-button login-form-font" tabindex="3" value="Login" />
                    </div>
              </fieldset>
            </form>
        </div>
  `
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
      console.log(`Inside onSubmit() with username ${form.username} and password ${form.password}`);

      this.loginMessage = this.loginService.login(form.username, form.password, this.iAuthUrl);

      if (!this.loginMessage) {
          this.loginService.loggedInSubject.next(true);
          this.loginLinkService.loginLinkTextSubject.next(LOGOUT_LINKTEXT);
          this.router.navigate(['home']);

      }
      //TODO: Display message if it exists
    }
}
