import {
  it,
  describe,
  expect,
  inject,
  injectAsync,
  beforeEachProviders,
  TestComponentBuilder
} from 'angular2/testing';

// Load the implementations that should be tested
import {DropdownComponent} from './dropdown.component';

describe('DropdownComponent', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEachProviders(() => [
    DropdownComponent
  ]);

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


  it('should set label on template', injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
    return tcb.createAsync(DropdownComponent)
      .then((fixture) => {
        let label = 'foobar';
        let component: DropdownComponent = fixture.debugElement.componentInstance;
        component.label = label;

        fixture.detectChanges();

        let compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('label')).toHaveText(label);

    });
  }));

});
