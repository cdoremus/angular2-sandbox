import { Component, OnInit, Input, Inject } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { LoginService } from './login.service';
import { AuthenticationTokenProvider } from './authentication-token';
import { LocalAuthTokenProvider } from './local-auth-token-provider';

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
export class LoginComponent implements OnInit, CanActivate {
    @Input() username: string;
    @Input() password: string;

    constructor(
      private loginService: LoginService,
      private router: Router,
      @Inject(USER_AUTH_URL) private iAuthUrl: string) {
    }

    ngOnInit() {
      console.log('Inside ngOnInit()');
    }

    canActivate(): boolean {
      if (this.loginService.isLoggedIn(this.username, this.password, this.iAuthUrl)) {
        return true;
      } else {
        this.router.navigate(['/login']);
        return false;
      }
    }

    onSubmit(form): void {
      console.log(`Inside onSubmit() with username ${form.username} and password ${form.password}`);
      let loggedIn = this.loginService.isLoggedIn(form.username, form.password, this.iAuthUrl);
      console.log(`Logged in: ${loggedIn}`);
      if (loggedIn) {
          this.router.navigate(['/home']);
      }
    }
}
