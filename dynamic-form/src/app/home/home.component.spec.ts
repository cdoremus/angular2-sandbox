// This shows a different way of testing a component, check about for a simpler one
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { QuestionFormComponent } from '../questions/questions-form.component';

describe('Home Component', () => {
  const html = '<my-home></my-home>';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule], // used by QuestionFormComponent
      declarations: [HomeComponent, QuestionFormComponent, TestComponent]}
      );
    // Component to contain the HomeComponent for testing
    TestBed.overrideComponent(TestComponent, { set: { template: html }});
  });

  it('should display "Please Enter Questions" from QuestionFormComponent template', () => {
    try {
      const fixture = TestBed.createComponent(TestComponent);
      fixture.detectChanges();
      const element = fixture.nativeElement;
      expect(element.children[0].textContent).toContain('Please Enter Questions');
    } catch (err) {
      // this is needed to debug any errors
      console.log("Problem: " + err.message);
    }
  });

});

@Component({selector: 'my-test', template: ''})
class TestComponent { }
