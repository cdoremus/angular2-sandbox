import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { removeNgStyles, createNewHosts } from '@angularclass/hmr';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent, USER_AUTH_URL, authUrl } from './login/login.component';
import { LoginLinkComponent } from './login/login-link.component';
import { LoginService } from './login/login.service';
import { AuthenticationTokenProvider } from './login/authentication-token';
import { LocalAuthTokenProvider } from './login/local-auth-token-provider';
import { ApiService } from './shared';
import { routing } from './app.routing';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    LoginLinkComponent
  ],
  providers: [
    {provide: LoginComponent, useClass: LoginComponent},
    {provide: USER_AUTH_URL, useValue: authUrl},
    ApiService,
    LoginService,
    {provide: AuthenticationTokenProvider, useClass: LocalAuthTokenProvider}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(public appRef: ApplicationRef) {}
  hmrOnInit(store) {
    console.log('HMR store', store);
  }
  hmrOnDestroy(store) {
    let cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    // recreate elements
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // remove styles
    removeNgStyles();
  }
  hmrAfterDestroy(store) {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }
}
