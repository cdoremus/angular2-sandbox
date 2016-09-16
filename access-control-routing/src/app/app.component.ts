import { Component, OnDestroy } from '@angular/core';
import { AuthenticationTokenProvider } from './login/authentication-token';

import { ApiService } from './shared';

import '../style/app.scss';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'my-app', // <my-app></my-app>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {
  url = 'https://github.com/preboot/angular2-webpack';

  constructor(private api: ApiService, private authTokenProvider: AuthenticationTokenProvider) {
  }

  ngOnDestroy() {
    console.log('AppComponent.ngOnDestroy() invoked');
    this.authTokenProvider.removeToken();
  }
}
