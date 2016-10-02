import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from './user.interfaces';
import { UsersService } from './users.service';

@Component({
    selector: 'selector',
    styles: [
        `
        .users-link {
            margin: 10px auto;
        }
        `
    ],
    template: `
        <div>
            <h3>{{user.name}}</h3>
            <div>ID: {{user.id}}</div>
            <div>Email: {{user.email}}</div>
            <div>Phone: {{user.phone}}</div>
            <div>Address: {{user.address.city}}, {{user.address.zipcode}}</div>
            <div>Location: {{ '{' }}latitude: {{user.address.geo.lat}}, longitude: {{user.address.geo.lng}}{{ '}' }}</div>
            <div>Company: {{user.company.name}}</div>
            <div class="users-link">
                <a [routerLink]="['/users']">Return to Users</a>
            </div>
        </div>
    `,
  providers: [ UsersService ]
})
export class UserDetailsComponent implements OnInit {
    user: User = {id: 0, name: '', email: '', address: {city:'', zipcode:'', geo: {lat:'', lng:''}}, company: {name: ''}};

    constructor(
        private userService: UsersService,
        private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            let id = params['id'];
            this.userService.findUserById(id).subscribe(user => {
                this.user = <User>user;
                console.log("Found user:", this.user.name);
            });
        });
     }
}

