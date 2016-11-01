import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ReactivePageComponent } from './reactivePage/reactivePage.component';
import { TemplateDrivenPageComponent } from './templateDrivenPage/templateDrivenPage.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent},
  { path: 'reactivePage', component: ReactivePageComponent},
  { path: 'templateDrivenPage', component: TemplateDrivenPageComponent}
];

export const routing = RouterModule.forRoot(routes)
