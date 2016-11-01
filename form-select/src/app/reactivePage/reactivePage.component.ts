import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../shared/api.service';
import { User } from '../shared/user';

@Component({
  selector: 'my-reactive-page',
  templateUrl: './reactivePage.component.html',
  styleUrls: ['./reactivePage.component.scss']
})
export class ReactivePageComponent implements OnInit, AfterViewInit {
  users: Observable<User[]>;
  currentUser: User;

  constructor(private service: ApiService) {
    // Do stuff
  }

  ngOnInit(): void {
    console.log('Hello ReactivePageComponent');
    this.users = this.service.getUsers();
    this.currentUser = this.service.getRandomUser();
  }

  ngAfterViewInit(): void {
  }

  onSelected(selected: User): void {
    console.log('ReactivePageComponent selected user: ', selected);
    this.currentUser = selected;
  }

}
