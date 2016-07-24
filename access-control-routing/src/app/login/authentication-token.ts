import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationTokenProvider {
    getToken(): string {
        throw Error("This needs to be subclassed");
    }
}
