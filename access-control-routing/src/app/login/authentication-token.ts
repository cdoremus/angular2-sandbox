import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationTokenProvider {
    getToken(): string {
        throw Error('The getToken() method needs to be called from a subclass');
    }

    setToken(token?: string): void {
        throw Error('The setToken() method needs to be called from a subclass');
    }

    removeToken(): void {
        throw Error('The removeToken() method needs to be called from a subclass');
    }
}
