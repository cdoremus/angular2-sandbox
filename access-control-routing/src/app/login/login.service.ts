import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { AuthenticationTokenProvider } from './authentication-token';


export var USER_AUTH_URL = ''; // value injected in main.ts


@Injectable()
export class LoginService {
    constructor(private authTokenProvider: AuthenticationTokenProvider, private http: Http, @Inject(USER_AUTH_URL) private authUrl: string) {}

    isLoggedIn(username: string, password: string): boolean {
        if (this.authTokenProvider.getToken()) {
            console.log('Token found');
            return true;
        } else {
            console.log('Token NOT found, looking up user');
           this.http.get(this.authUrl)
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
