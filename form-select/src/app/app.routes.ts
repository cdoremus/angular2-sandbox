import { provideRouter, RouterConfig } from '@angular/router';

import {HomeComponent} from './components/home/home';
import {AboutComponent} from "./components/about/about.component";

export const routes: RouterConfig = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent}
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
