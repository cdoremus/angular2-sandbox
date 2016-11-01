// This shows a different way of testing a component, check about for a simpler one
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { TestBed } from '@angular/core/testing';

import { ReactiveFormComponent } from './reactiveForm.component';
import { ApiService } from '../shared/api.service';

describe('ReactiveForm Component', () => {
  const html = '<my-reactive-form></my-reactive-form>';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [ReactiveFormComponent, TestComponent],
      providers: [ApiService]
    });
    TestBed.overrideComponent(TestComponent, { set: { template: html }});
  });

  it('should contain text "Reactive form Dropdown"', () => {
    const fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.children[0].textContent).toContain('Reactive form Dropdown');
  });

});

@Component({selector: 'my-test', template: ''})
class TestComponent { }
