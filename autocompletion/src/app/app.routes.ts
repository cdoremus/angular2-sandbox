import { provideRouter, RouterConfig } from '@angular/router';

import { HomeComponent } from './home';
import { AboutComponent } from './about';

export const routes: RouterConfig = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent},
  { path: 'autocompletion', component: HomeComponent}
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
