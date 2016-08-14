import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('Home Component', () => {
  const html = '<my-home></my-home>';

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent, TestComponent]
    });
    TestBed.overrideComponent(TestComponent, { set: { template: html }});
  });

  it('should log ngOnInit', () => {
    const home: HomeComponent = new HomeComponent();
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

    home.ngOnInit();
    expect(console.log).toHaveBeenCalledWith('Hello Home');
  });

  it('should display "Home Page" text', () => {
    const fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.children[0].textContent).toContain('Home Works!');
  });

});

@Component({selector: 'my-test', template: ''})
class TestComponent { }
