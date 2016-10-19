import { Injectable, OnInit, OnDestroy} from '@angular/core';
import { Http, Response } from '@angular/http';
import {Subject, BehaviorSubject, Observable} from 'rxjs';

import { AuthenticationTokenProvider } from './authentication-token';



@Injectable()
export class LoginService implements OnInit, OnDestroy {
    loggedInSubject: Subject<boolean> = new BehaviorSubject<boolean>(false);
    currentUrlPathSubject: Subject<string> = new BehaviorSubject('');

    constructor(
      private authTokenProvider: AuthenticationTokenProvider,
      private http: Http) {}


    ngOnInit(): void {
    }

    ngOnDestroy(): void {
        if (this.loggedInSubject) {
            this.loggedInSubject.unsubscribe();
        }
        if(this.currentUrlPathSubject) {
            this.currentUrlPathSubject.unsubscribe();
        }
    }

    /** Is a user logged in? */
    isLoggedIn(): Observable<boolean> {
        // console.log('LoginService#isLoggedIn() called');
        let ok: Observable<boolean> = this.loggedInSubject.first();
        ok.subscribe(v => console.log('LoginService#isLoggedIn() returning', v));
        return ok;
    }

    login(username: string, password: string, authUrl: string): string {
        // console.log('LoginService#login() called');
        if (this.authTokenProvider.getToken()) {
            console.log('Login token found');
            // the user is logged in
            this.loggedInSubject.next(true);
            return undefined;
        } else {
           console.log('Token NOT found, looking up user');
           this.getLoginCredentials(authUrl)
             .subscribe((response) => {
                let data = response.json();
                let found = data.filter(user => user.Username === username && user.Password === password);
                console.log('Found user' , found);
                let isFound = found == undefined ? false : true;
                console.log(`LoginService#login isFound: ${isFound}`);
                // sets whether the user is logged in
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

    private getLoginCredentials(authUrl: string): Observable<Response> {
        return this.http.get(authUrl);
    }

    logout(): void {
        // the user is no longer logged in
        this.loggedInSubject.next(false);
        this.authTokenProvider.removeToken();
    }
}
