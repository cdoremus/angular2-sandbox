import { async, TestBed } from '@angular/core/testing';

import {By} from '@angular/platform-browser';

import {ButtonComponent} from './button.component';

describe('Button Component', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({declarations: [ButtonComponent]});
  });

  it('should have "label" defined', () => {
    const fixture = TestBed.createComponent(ButtonComponent);
    const component: ButtonComponent = fixture.debugElement.componentInstance;
    expect(component.label).toBeDefined();
  });

  it('should set label on template', async() => {

    TestBed.compileComponents().then(() => {
      let label = 'foobar';
      const fixture = TestBed.createComponent(ButtonComponent);
      let component: ButtonComponent = fixture.debugElement.componentInstance;
      let labelDebugElement = fixture.debugElement.query(By.css('button'));
      component.label = label;

      fixture.detectChanges();

      expect(labelDebugElement.nativeElement.innerHTML).toContain(label);
    })
  });

  it('button click should call ButtonComponentonClick()', async() => {
    TestBed.compileComponents().then(() => {
      const fixture = TestBed.createComponent(ButtonComponent);
      let component: ButtonComponent = fixture.debugElement.componentInstance;
      spyOn(component, 'onClick');

      fixture.detectChanges();

      let compiled = fixture.debugElement.nativeElement;
      compiled.querySelector('button').click();
      console.log("Clicked");

      fixture.detectChanges();

      expect(component.onClick).toHaveBeenCalled();
    });
  });

});
