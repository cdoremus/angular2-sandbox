import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [LoginComponent] },
  { path: 'about', component: AboutComponent, canActivate: [LoginComponent]}
];

export const routing = RouterModule.forRoot(routes);
