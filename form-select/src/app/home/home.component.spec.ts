import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { ButtonComponent } from '../button/button.component';
import { MessagesComponent } from '../messages/messages.component';
// import Message from '../messages/message';

describe('Home', () => {
    const html = '<home></home>';

    // provide our implementations or mocks to the dependency injector
    beforeEach(() => {
        TestBed.configureTestingModule({
          imports: [FormsModule, BrowserModule],
          declarations: [HomeComponent, ButtonComponent, MessagesComponent, DropdownComponent, TestComponent]
        });
        TestBed.overrideComponent(TestComponent, { set: { template: html }});
    });

  it('should have "selected_superlative" defined', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();

    expect(component.selected_superlative).toBeDefined();
  });

  it('should have "superlative_options" defined', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();

    expect(component.superlative_options).toBeDefined();
  });

  it('should console log ngOnInit', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const component = fixture.componentInstance;
    spyOn(console, 'log');
    fixture.detectChanges();

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
