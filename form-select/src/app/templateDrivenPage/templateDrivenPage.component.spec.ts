// This shows a different way of testing a component, check about for a simpler one
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TestBed } from '@angular/core/testing';

import { TemplateDrivenPageComponent } from './templateDrivenPage.component';
import { TemplateDrivenFormComponent } from '../templateDrivenForm/templateDrivenForm.component';
import { ApiService } from '../shared/api.service';

describe('TemplateDrivenPage Component', () => {

  beforeEach(() => {
    TestBed.configureTestingModule(
      {
        imports: [FormsModule],
        declarations: [TemplateDrivenPageComponent, TemplateDrivenFormComponent],
        providers: [ApiService]
      },
    );
  });

  it('should have label containing text', () => {
    const fixture = TestBed.createComponent(TemplateDrivenPageComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    // console.log('Compiled', compiled.querySelector('div'));
    expect(compiled.querySelector('label').textContent).toContain('Template-driven Dropdown');
  });

  it('should have 10 option elements', () => {
    const fixture = TestBed.createComponent(TemplateDrivenPageComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('option').length).toBe(10);
  });

});
