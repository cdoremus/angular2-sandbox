import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DialogComponent } from './dialog/dialog.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'dialog-path', component: DialogComponent, outlet: 'dialog' }
];

export const routing = RouterModule.forRoot(routes);
