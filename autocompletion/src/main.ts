import { enableProdMode } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { disableDeprecatedForms, provideForms } from '@angular/forms';

import { AppComponent } from './app/app.component';
import { APP_ROUTER_PROVIDERS } from './app/app.routes';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule }              from './app/app.module';

// depending on the env mode, enable prod mode or add debugging modules
if (process.env.ENV === 'build') {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
