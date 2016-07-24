import { Injectable } from '@angular/core';
import { AuthenticationTokenProvider } from './authentication-token';
import { LocalAuthTokenProvider } from './local-auth-token-provider';

@Injectable()
export class LoginService {
    constructor(private authTokenProvider: AuthenticationTokenProvider) {}

    isLoggedIn(username: string, password: string): boolean {
        let loggedIn: boolean = false;
        if (this.authTokenProvider.getToken() ) {
            loggedIn = true;
        } else {
           // FIXME: look up user, add it to local storage if found
        }
        return loggedIn;
    }
}
