import { Injectable } from '@angular/core';
import { AuthenticationTokenProvider } from './authentication-token';

const AUTHENTICATION_TOKEN = 'bogus-auth-token';
const AUTHENTICATION_TOKEN_VALUE = 'bogus-auth-token-value';

@Injectable()
export class LocalAuthTokenProvider extends AuthenticationTokenProvider {

    getToken(): string {
        return sessionStorage.getItem(AUTHENTICATION_TOKEN);
    }

    setToken(token?: string): void {
        sessionStorage.setItem(AUTHENTICATION_TOKEN, AUTHENTICATION_TOKEN_VALUE);
    }

    removeToken(): void {
        sessionStorage.removeItem(AUTHENTICATION_TOKEN);
    }
}
