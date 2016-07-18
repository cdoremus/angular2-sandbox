import {
  inject,
  addProviders,
  async,
  TestComponentBuilder
} from '@angular/core/testing';
import {By} from '@angular/platform-browser';

import {ButtonComponent} from './button.component';

describe('Button Component', () => {

  beforeEach(() => {
    addProviders([ButtonComponent]);
  });

  it('should have "label" defined', inject([ButtonComponent], (component) => {
    expect(component.label).toBeDefined();
  }));

  it('should set label on template', async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
    tcb.createAsync(ButtonComponent).then((fixture) => {
      let label = 'foobar';
      let component: ButtonComponent = fixture.debugElement.componentInstance;
      let labelDebugElement = fixture.debugElement.query(By.css('button'));
      component.label = label;

      fixture.detectChanges();

      // console.log(`Element:`, labelDebugElement);
      // console.log(`Native element:`, labelDebugElement.nativeElement);

      expect(labelDebugElement.nativeElement.innerHTML).toContain(label);
    })
  })));

  it('button click should call ButtonComponentonClick()', async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
    tcb.createAsync(ButtonComponent).then((fixture) => {
      let component: ButtonComponent = fixture.debugElement.componentInstance;
      spyOn(component, 'onClick');

      fixture.detectChanges();

      let compiled = fixture.debugElement.nativeElement;
      compiled.querySelector('button').click();
      console.log("Clicked");

      fixture.detectChanges();

      expect(component.onClick).toHaveBeenCalled();
    })
  })));

});
