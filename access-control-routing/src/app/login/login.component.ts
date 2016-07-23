import { Component, OnInit, provide } from '@angular/core';
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
            label {
                display:block;
                margin-left:10px;
                margin-right:auto;
            }
            input {
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
            <div class="form-container">
                <form #form="ngForm" (ngSubmit)="onSubmit(form)">
                    <fieldset>
                        <label>User name:</label>
                        <input type="text" class="login-form-font" name="username" placeholder="Enter user name" tabindex="1" />
                    </fieldset>
                    <fieldset>
                        <label>Password:</label>
                        <input type="password" class="login-form-font" name="password" placeholder="Enter password" tabindex="2" />
                    </fieldset>
                    <div class="submit-container">
                        <button type="button" class="login-button login-form-font" tabindex="3">Login</button>
                    </div>
                </form>
            </div>
        </div>
  `,
  directives: [ ROUTER_DIRECTIVES ],
  providers: [] //    provide(AuthenticationTokenProvider, {useClass: LocalAuthTokenProvider})

})
export class LoginComponent implements OnInit, CanActivate {

    // constructor(private authTokenProvider: AuthenticationTokenProvider) {
    constructor(private router: Router) {
    }

    ngOnInit() {

    }

    canActivate(): boolean {
      return true;
    }

    onSubmit(form): void {
      console.log('Inside onSubmit() with form', form);

      this.router.navigate(['/home']);
    }
}
