import {
  inject,
  async,
  addProviders,
  TestComponentBuilder
} from '@angular/core/testing';
import {By} from '@angular/platform-browser';

// Load the implementations that should be tested
import {DropdownComponent} from './dropdown.component';

describe('DropdownComponent', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => {
    addProviders([DropdownComponent]);
  });

  it('should have "selected" defined', inject([DropdownComponent], (component) => {
    expect(component.selected).toBeDefined();
  }));

  it('should have "options" defined', inject([DropdownComponent], (component) => {
    expect(component.options).toBeDefined();
  }));

  it('should console log ngOnInit', inject([DropdownComponent], (component) => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

    component.ngOnInit();
    expect(console.log).toHaveBeenCalledWith('Hello Home');
  }));

  it('should set label on template', async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
    tcb.createAsync(DropdownComponent).then((fixture) => {
      let label = 'foobar';
      let component: DropdownComponent = fixture.debugElement.componentInstance;
      component.label = label;
      let labelDebugElement = fixture.debugElement.query(By.css('label'));

      fixture.detectChanges();

      expect(labelDebugElement.nativeElement.innerHTML).toContain(label);
  })
  })));

});
