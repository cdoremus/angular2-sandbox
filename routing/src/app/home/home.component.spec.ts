import { Component } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('Home Component', () => {
  const html = '<my-home></my-home>';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
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
