import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../shared/api.service';
import { User } from '../shared/user';

@Component({
  selector: 'my-template-page',
  templateUrl: './templateDrivenPage.component.html',
  styleUrls: ['./templateDrivenPage.component.scss']
})
export class TemplateDrivenPageComponent implements OnInit {
  users: Observable<User[]>;
  currentUser: User;

  constructor(private service: ApiService) {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello TemplateDrivenPage');
    this.users = this.service.getUsers();
    this.currentUser = this.service.getRandomUser();
  }

  onSelected(selected: User): void {
    console.log('TemplateDrivenPageComponent selected user: ', selected);
    this.currentUser = selected;
  }

}
