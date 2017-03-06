import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { UsersService } from './users.service';
import { UserDetailsComponent } from './user-details.component';
import { UsersComponent } from './users.component';

const ROUTES: Routes = [
 { path: 'users',  children: [
    { path: '', component: UsersComponent },
    { path: ':id', component: UserDetailsComponent }
    ]
  }
];

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  declarations: [
    UsersComponent,
    UserDetailsComponent
  ],
  providers: [UsersService],
  exports: [
    UsersComponent,
    UserDetailsComponent
  ]
})
export class UsersModule {
}