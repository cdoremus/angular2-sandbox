import { Component } from '@angular/core';
import { TestBed, inject } from '@angular/core/testing';

// Load the implementations that should be tested
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  const html = '<my-home></my-home>';

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent, TestComponent],
      providers: [HomeComponent]
    });
    TestBed.overrideComponent(TestComponent, { set: { template: html }});
  });

  it('should log ngOnInit', inject([HomeComponent], (home) => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

    home.ngOnInit();
    expect(console.log).toHaveBeenCalledWith('Hello Home');
  }));

  it('Component should contain text "Home Page"', () => {
    const fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.children[0].textContent).toContain('Home Page');
  });

});

@Component({selector: 'my-test', template: ''})
class TestComponent { }
