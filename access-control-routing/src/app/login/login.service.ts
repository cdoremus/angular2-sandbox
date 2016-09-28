import { Injectable, OnDestroy} from '@angular/core';
import { Http } from '@angular/http';
import {Subject, Observable} from 'rxjs';

import { AuthenticationTokenProvider } from './authentication-token';



@Injectable()
export class LoginService implements OnDestroy {
    loggedInSubject: Subject<boolean> = new Subject<boolean>();

    constructor(
      private authTokenProvider: AuthenticationTokenProvider,
      private http: Http) {}

    ngOnDestroy() {
        if (this.loggedInSubject) {
            this.loggedInSubject.unsubscribe();
        }
    }

    isLoggedIn(): Observable<boolean> {
        return this.loggedInSubject.take(1);
        // return this.authTokenProvider.getToken() ? true : false;
    }

    login(username: string, password: string, authUrl: string): string {
        if (this.authTokenProvider.getToken()) {
            console.log('Token found');
            this.loggedInSubject.next(true);
            return undefined;
        } else {
           console.log('Token NOT found, looking up user');
           this.http.get(authUrl)
             .subscribe((response) => {
                let data = response.json();
                let found = data.filter(user => user.Username === username && user.Password === password);
                console.log('Found user' , found);
                let isFound = found == undefined ? false : true;
                console.log(`LoginService#login isFound: ${isFound}`);

                this.loggedInSubject.next(isFound);
                if (found) {
                    console.log('Login success');
                    this.authTokenProvider.setToken();
                    return undefined;
                } else {
                    console.log('Login failure');
                    return 'Login Failure';
                }
           });
        }
    }

    logout(): void {
        this.authTokenProvider.removeToken();
    }
}
