import { provideRouter, RouterConfig } from '@angular/router';

import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { LoginComponent } from './login/login.component';

export const routes: RouterConfig = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [LoginComponent] },
  { path: 'about', component: AboutComponent, canActivate: [LoginComponent]}
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
