import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AuthenticationTokenProvider } from './authentication-token';

export const USER_SERVICE_URL = '/users.json';

@Injectable()
export class LoginService {
    constructor(private authTokenProvider: AuthenticationTokenProvider, private http: Http) {}

    isLoggedIn(username: string, password: string): boolean {
        if (this.authTokenProvider.getToken()) {
            console.log('Token found');
            return true;
        } else {
            console.log('Token NOT found, looking up user');
           this.http.get(USER_SERVICE_URL)
             .subscribe((response) => {
                let data = response.json();
                let found = data.filter(user => user.Username === username && user.Password === password);
                console.log('Found user' , found);
                if (found.length > 0) {
                    console.log('Login success');
                    this.authTokenProvider.setToken();
                    return true;
                } else {
                    console.log('Login failure');
                    return false;
                }
           });
        }
    }

    logout(): void {
        this.authTokenProvider.removeToken();
    }
}
