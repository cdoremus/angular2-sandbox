import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../shared/user';
import { Observable } from 'rxjs';
// import * as _ from 'lodash';

/**
 * This component and its template has been setup to display a
 * dropdown (select) holding objects in a template-driven form.
 * It shows how to set the 'selected' object.
 */
@Component({
  selector: 'my-template-form',
  templateUrl: './templateDrivenForm.component.html',
  styleUrls: ['./templateDrivenForm.component.scss']
})
export class TemplateDrivenFormComponent implements OnInit {
  @Input() users: Observable<User[]>;
  @Input() selectedUser: User;
  @Output() selected: EventEmitter<User> = new EventEmitter<User>();

  constructor() {
    // Do stuff
  }

  ngOnInit(): void {
    console.log('Hello TemplateDrivenForm');
  }

  onSelected(selectedUser: User): void {
    console.log('Selected user: ', selectedUser);
    this.selected.emit(selectedUser);
    this.selectedUser = selectedUser;
  }
}
