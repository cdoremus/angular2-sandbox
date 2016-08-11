import { Injectable } from '@angular/core';

const loginStates: string[] = ['Login', 'Logout'];

@Injectable()
export class NavigationService {
  private loginState: string;

  constructor() {
    this.loginState = loginStates[0];
   }

  toggleState(oldState: string): string {
    if (this.loginState === loginStates[0]) {
      this.loginState = loginStates[1];
    } else {
      this.loginState = loginStates[0];
    }
    return this.loginState;
  }

  initState() {

  }

  getLoginState(): string {
    return this.loginState;
  }
}
