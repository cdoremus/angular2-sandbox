import { Injectable } from '@angular/core';
import { AuthenticationTokenProvider, AUTHENTICATION_TOKEN_KEY } from './authentication-token';

@Injectable()
export class LocalAuthTokenProvider implements AuthenticationTokenProvider {

    getToken(): string {
        return AUTHENTICATION_TOKEN_KEY;
    }
}