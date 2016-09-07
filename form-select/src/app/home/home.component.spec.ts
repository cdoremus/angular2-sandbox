import { Component } from '@angular/core';

import { TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('Home', () => {
    const html = '<my-home></my-home>';

    // provide our implementations or mocks to the dependency injector
    beforeEach(() => {
        TestBed.configureTestingModule({declarations: [HomeComponent, TestComponent]});
        TestBed.overrideComponent(TestComponent, { set: { template: html }});
    });

  it('should have "selected_superlative" defined', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const component = fixture.debugElement.componentInstance;

    expect(component.selected_superlative).toBeDefined();
  });

  it('should have "superlative_options" defined', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component.superlative_options).toBeDefined();
  });

  it('should console log ngOnInit', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const component = fixture.debugElement.componentInstance;
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

    component.ngOnInit();
    expect(console.log).toHaveBeenCalledWith('Hello Home');
  });

  it('template should contain "Fun with Select!"', () => {
    try {
        const fixture = TestBed.createComponent(TestComponent);
        fixture.detectChanges();
        const element = fixture.nativeElement;
        expect(element.children[0].textContent).toContain('Fun with Select!');
    } catch (err) {
      // this is needed to debug any errors
      console.log("Problem: " + err.message);
    }
  });

});

@Component({selector: 'test-cmp', template: ''})
class TestComponent { }
