import { enableProdMode, provide } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';

import { AppComponent } from './app/app.component';
import { APP_ROUTER_PROVIDERS } from './app/app.routes';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { AuthenticationTokenProvider } from './app/login/authentication-token';
import { LocalAuthTokenProvider } from './app/login/local-auth-token-provider';
import { LoginComponent } from './app/login/login.component';
import { LoginService, USER_AUTH_URL } from './app/login/login.service';

// depending on the env mode, enable prod mode or add debugging modules
if (process.env.ENV === 'build') {
  enableProdMode();
}

bootstrap(AppComponent, [
    // These are dependencies of our App
    HTTP_PROVIDERS,
    APP_ROUTER_PROVIDERS,
    disableDeprecatedForms(),
    provideForms(),
    provide(AuthenticationTokenProvider, {useClass: LocalAuthTokenProvider}),
    LoginService,
    LoginComponent,
    provide(USER_AUTH_URL, {useValue: './users.json'}) // local user registry
  ])
  .catch(err => console.error(err));
