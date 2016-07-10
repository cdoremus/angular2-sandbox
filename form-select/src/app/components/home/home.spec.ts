import {
  it,
  inject,
  describe,
  beforeEachProviders,
  async,
  TestComponentBuilder
} from '@angular/core/testing';

// Load the implementations that should be tested
import {HomeComponent} from './home';

describe('Home', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEachProviders(() => [
    HomeComponent
  ]);

  it('should have "selected_superlative" defined', inject([HomeComponent], (component) => {
    expect(component.selected_superlative).toBeDefined();
  }));

  it('should have "superlative_options" defined', inject([HomeComponent], (component) => {
    expect(component.superlative_options).toBeDefined();
  }));

  it('should console log ngOnInit', inject([HomeComponent], (component) => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

    component.ngOnInit();
    expect(console.log).toHaveBeenCalledWith('Hello Home');
  }));

  it('template should contain "About Works!"', async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
    tcb.createAsync(HomeComponent).then((fixture) => {
      fixture.detectChanges();
      let compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('h2').textContent.toString().trim()).toEqual('Fun with Select!');
    });
  })));

});
