import { Component } from '@angular/core';

import { TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';

describe('About Component', () => {
  const html = '<my-about></my-about>';

  beforeEach(() => {
    TestBed.configureTestingModule({declarations: [AboutComponent, TestComponent]});
    TestBed.overrideComponent(TestComponent, { set: { template: html }});
  });

  it('template should contain "About Works!" text', () => {

    const fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.children[0].textContent).toContain('About Works!');

  });

});

@Component({selector: 'test-cmp', template: ''})
class TestComponent { }

