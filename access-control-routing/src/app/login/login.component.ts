import { Component, OnInit, Input } from '@angular/core';
import { ROUTER_DIRECTIVES, Router, CanActivate } from '@angular/router';
import { AuthenticationTokenProvider } from './authentication-token';
import { LocalAuthTokenProvider } from './local-auth-token-provider';

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
            <form #form="ngForm" (ngSubmit)="onSubmit()">
              <fieldset class="form-container">
                <legend>Please login</legend>
                    <fieldset>
                        <label class="form-label">User name:</label>
                        <input type="text" class="text-input login-form-font" name="username" placeholder="Enter user name" tabindex="1" [(ngModel)]="username"/>
                    </fieldset>
                    <fieldset>
                        <label class="form-label">Password:</label>
                        <input type="password" class="text-input login-form-font" name="password" placeholder="Enter password" tabindex="2" [(ngModel)]="password"/>
                    </fieldset>
                    <div class="submit-container">
                        <input type="submit" class="login-button login-form-font" tabindex="3" value="Login" />
                    </div>
              </fieldset>
            </form>
        </div>
  `,
  directives: [ ROUTER_DIRECTIVES ],
  providers: [] //    provide(AuthenticationTokenProvider, {useClass: LocalAuthTokenProvider})

})
export class LoginComponent implements OnInit {
    @Input() username: string;
    @Input() password: string;

    // constructor(private authTokenProvider: AuthenticationTokenProvider) {
    constructor(private router: Router) {
    }

    ngOnInit() {
      console.log('Inside ngOnInit()');
    }

    canActivate(): boolean {
      return true;
    }

    onSubmit(): void {
      console.log(`Inside onSubmit() with username ${this.username} and password ${this.password}`);

      this.router.navigate(['/home']);
    }
}
