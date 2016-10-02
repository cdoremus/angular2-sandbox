import { Component, OnInit } from '@angular/core';
import { User } from './user.interfaces';
import { UsersService } from './users.service';

@Component({
  selector: 'my-users',
  styles: [
    `
    .user-container {
      margin: 10px auto;
      width: 400px;
    }
    .user-record {
      margin: 5px;
      text-align: left;
    }
    `
  ],
  template: `
    <div class="user-container">
      <div class="user-record" *ngFor="let user of users"><a [routerLink]="['/users', user.id]">{{user.name}} ({{user.email}})</a></div>
    </div>
  `,
  providers: [ UsersService ]
})
export class UsersComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.userService.findUsers().subscribe(user => this.users.push(user));
  }



}
