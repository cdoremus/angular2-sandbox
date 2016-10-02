import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DialogComponent } from './dialog/dialog.component';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './users/user-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  // defines a path to the router-outlet that displays a dialog via the DialogComponent class
  { path: 'dialog-path', component: DialogComponent, outlet: 'dialog' },
  { path: 'users', component: UsersComponent},
  { path: 'users/:id', component: UserDetailsComponent},

];

export const routing = RouterModule.forRoot(routes);
