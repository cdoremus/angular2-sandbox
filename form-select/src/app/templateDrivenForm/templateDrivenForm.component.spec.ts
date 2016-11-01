import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TestBed } from '@angular/core/testing';

import { TemplateDrivenFormComponent } from './templateDrivenForm.component';
import { ApiService } from '../shared/api.service';

describe('TemplateDrivenForm Component', () => {
  const html = '<my-template-form></my-template-form>';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [TemplateDrivenFormComponent, TestComponent],
      providers: [ApiService]
    });
    TestBed.overrideComponent(TestComponent, { set: { template: html }});
  });

  it('should contain text "Template-driven Dropdown"', () => {
    const fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.children[0].textContent).toContain('Template-driven Dropdown');
  });

});

@Component({selector: 'my-test', template: ''})
class TestComponent { }
