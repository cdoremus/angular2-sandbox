import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent, USER_AUTH_URL, authUrl } from './login/login.component';
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
    LoginComponent
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
