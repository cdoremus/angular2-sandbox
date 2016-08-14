import {
  async,
  inject,
  addProviders
} from '@angular/core/testing';

import { TestBed, TestComponentBuilder } from '@angular/core/testing';

import { AboutComponent } from './about.component';

describe('About Component', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({declarations: [AboutComponent]});
  });

  it('should display "About Works!" text', () => {
    const fixture = TestBed.createComponent(AboutComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.children[0].textContent).toContain('About Works!');
  });

});
