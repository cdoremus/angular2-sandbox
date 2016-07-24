import { enableProdMode, provide } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';

import { AppComponent } from './app/app.component';
import { APP_ROUTER_PROVIDERS } from './app/app.routes';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { AuthenticationTokenProvider } from './app/login/authentication-token';
import { LocalAuthTokenProvider } from './app/login/local-auth-token-provider';
import { LoginService } from './app/login/login.service';

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
    provide(AuthenticationTokenProvider, {useClass: LocalAuthTokenProvider})
  ])
  .catch(err => console.error(err));
