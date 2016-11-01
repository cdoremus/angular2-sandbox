import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TestBed } from '@angular/core/testing';

import {By} from '@angular/platform-browser';

// Load the implementations that should be tested
import {DropdownComponent} from './dropdown.component';

describe('DropdownComponent', () => {
    const html = '<dropdown></dropdown>';
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, BrowserModule],
      declarations: [DropdownComponent, TestComponent]
    });
    TestBed.overrideComponent(TestComponent, { set: { template: html }});
  });

  it('should have "selected" defined', () => {
    const fixture = TestBed.createComponent(DropdownComponent);
    const component = fixture.componentInstance;
    expect(component.selected).toBeDefined();
  });

  it('should have "options" defined', () => {
    const fixture = TestBed.createComponent(DropdownComponent);
    const component = fixture.componentInstance;
    expect(component.options).toBeDefined();
  });

  it('should console log ngOnInit', () => {
    const fixture = TestBed.createComponent(DropdownComponent);
    const component = fixture.componentInstance;
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

    component.ngOnInit();
    expect(console.log).toHaveBeenCalledWith('Hello Home');
  });

  it('should set label on template', () => {
      const fixture = TestBed.createComponent(DropdownComponent);
      let label = 'foobar';
      let component: DropdownComponent = fixture.componentInstance;
      component.label = label;
      let labelDebugElement = fixture.debugElement.query(By.css('label'));

      fixture.detectChanges();

      expect(labelDebugElement.nativeElement.innerHTML).toEqual(label);
  });

});

@Component({selector: 'test-cmp', template: ''})
class TestComponent { }
