import { Injectable, OnInit, OnDestroy} from '@angular/core';
import { Http, Response } from '@angular/http';
import {Subject, BehaviorSubject, Observable} from 'rxjs';

import { AuthenticationTokenProvider } from './authentication-token';

export const LOGIN_LINKTEXT = 'Login';
export const LOGOUT_LINKTEXT = 'Logout';

@Injectable()
export class LoginLinkService implements OnInit, OnDestroy {
    loginLinkTextSubject: Subject<string> = new BehaviorSubject<string>(LOGIN_LINKTEXT);

    constructor() {}

    ngOnInit(): void {
    }

    ngOnDestroy(): void {
        if (this.loginLinkTextSubject) {
            this.loginLinkTextSubject.unsubscribe();
        }
    }

}
