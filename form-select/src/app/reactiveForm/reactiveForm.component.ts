import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { User } from '../shared/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'my-reactive-form',
  templateUrl: './reactiveForm.component.html',
  styleUrls: ['./reactiveForm.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  @Input() users: Observable<User[]>;
  @Input() selectedUser: User;
  @Output() selected: EventEmitter<User> = new EventEmitter<User>();
  private form: FormGroup;
  private selectControl;

  constructor(private formBuilder: FormBuilder) {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello ReactiveFormComponent');
    this.form = this.formBuilder.group({
      'userSelect': [this.selectedUser]
    });
    this.selectControl = this.form.controls['userSelect'];

    this.selectControl.valueChanges.subscribe((value) => {
        this.selected.emit(this.selectControl.value);
    });
  }

  onSelected(selectedUser: User): void {
    console.log('Selected user: ', selectedUser);
    this.selected.emit(selectedUser);
    this.selectedUser = selectedUser;
  }

}
