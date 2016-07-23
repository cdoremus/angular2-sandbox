import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {
    constructor() {}

    isLoggedIn(): boolean {
        return true;
    }
}
