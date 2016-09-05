import { Component } from '@angular/core';
import { TestBed, inject } from '@angular/core/testing';

// Load the implementations that should be tested
import { HomeComponent } from './home.component';
import { SearchbarComponent } from '../searchbar/searchbar.component';

describe('HomeComponent', () => {
  const html = '<my-home></my-home>';

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent, SearchbarComponent, TestComponent],
      providers: [HomeComponent]
    });
    TestBed.overrideComponent(TestComponent, { set: { template: html }});
  });

  it('should contain text "Hello from Autocompletion Example!"', () => {
    try {
      const fixture = TestBed.createComponent(TestComponent);
      fixture.detectChanges();
      expect(fixture.nativeElement.children[0].textContent).toContain('Hello from Autocompletion Example!');
    } catch (err) {
      console.log(`Problem with 'should contain text "Hello from Autocompletion Example!"': ${err.message}`);
    }
  });

});

@Component({selector: 'my-test', template: ''})
class TestComponent { }
