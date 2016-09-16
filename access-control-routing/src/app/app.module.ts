import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { LoginLinkComponent } from './login/login-link.component';
import { LoginService } from './login/login.service';
import { AuthenticationTokenProvider } from './login/authentication-token';
import { LocalAuthTokenProvider } from './login/local-auth-token-provider';
import { ApiService } from './shared';
import { routing } from './app.routing';

// Change based on local vs remote calls and deployment location
export const USER_AUTH_URL = 'AUTH_URL';
export const authUrl = './users.json';

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
export class AppModule {}
