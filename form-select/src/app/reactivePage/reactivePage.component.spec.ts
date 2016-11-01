import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ReactivePageComponent } from './reactivePage.component';
import { ReactiveFormComponent } from '../reactiveForm/reactiveForm.component';
import { User } from '../shared/user';
import { ApiService } from '../shared/api.service';

describe('ReactivePage Component', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [ReactivePageComponent, ReactiveFormComponent],
      providers: [ApiService]
    });
  });

  it('should have label containing text', () => {
    const fixture = TestBed.createComponent(ReactivePageComponent);
    // let user: User = {id: 99, name: 'Craig', username: 'cdoremus', email: 'craig@craig.com'};
    // fixture.debugElement.componentInstance.currentUser = user;
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    // console.log('Compiled', compiled.querySelector('div'));

    expect(compiled.querySelector('label').innerText).toContain('Reactive form Dropdown');
  });

  it('should define selectedUser', () => {
    const fixture = TestBed.createComponent(ReactivePageComponent);
    // let user: User = {id: 99, name: 'Craig', username: 'cdoremus', email: 'craig@craig.com'};
    fixture.componentInstance.ngOnInit();
    fixture.detectChanges();
    let newUser: User = fixture.componentInstance.currentUser;
    // let compiled = fixture.debugElement.nativeElement;
    // console.log('Compiled', compiled.querySelector('div'));

    expect(newUser).not.toBeUndefined();
  });

});

