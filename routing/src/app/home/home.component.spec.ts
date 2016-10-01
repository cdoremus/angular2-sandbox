// This shows a different way of testing a component, check about for a simpler one
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { HomeComponent } from './home.component';

describe('Home Component', () => {
  const html = '<my-home></my-home>';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BrowserModule, FormsModule, RouterTestingModule ],
      declarations: [HomeComponent, TestComponent]
    });
    TestBed.overrideComponent(TestComponent, { set: { template: html }});
    TestBed.compileComponents();
  });

  it('should display "Home Works!"', () => {
    const fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.children[0].textContent).toContain('Home Works!');
  });


});

@Component({selector: 'my-test', template: ''})
class TestComponent { }
