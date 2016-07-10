import {
  inject,
  addProviders,
  async,
  TestComponentBuilder
} from '@angular/core/testing';

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
      component.label = label;

      fixture.detectChanges();

      let compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('button')).toContain(label);
    })
    .catch(error => console.log(`Error: ${error}`));
  })));

  it('button click should fire selected EventEmitter', async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
    tcb.createAsync(ButtonComponent).then((fixture) => {
      let component: ButtonComponent = fixture.debugElement.componentInstance;

      fixture.detectChanges();

      let compiled = fixture.debugElement.nativeElement;
      compiled.querySelector('button').click();

      fixture.detectChanges();

      expect(component.clicked.emit).toHaveBeenCalled();
    })
    .catch(error => console.log(`Error: ${error}`));
  })));
});
