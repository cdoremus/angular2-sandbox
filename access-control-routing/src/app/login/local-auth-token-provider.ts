import { Injectable } from '@angular/core';
import { AuthenticationTokenProvider } from './authentication-token';

const AUTHENTICATION_TOKEN: string = 'bogus-auth-token';

@Injectable()
export class LocalAuthTokenProvider extends AuthenticationTokenProvider {

    getToken(): string {
        return AUTHENTICATION_TOKEN;
    }
}