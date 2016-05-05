import {
  it,
  inject,
  describe,
  beforeEachProviders,
  async,
  TestComponentBuilder
} from 'angular2/testing';

// Load the implementations that should be tested
import {Home} from './home';

describe('Home', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEachProviders(() => [
    Home
  ]);

  it('should have "selected_superlative" defined', inject([Home], (component) => {
    expect(component.selected_superlative).toBeDefined();
  }));

  it('should have "superlative_options" defined', inject([Home], (component) => {
    expect(component.superlative_options).toBeDefined();
  }));

  it('should console log ngOnInit', inject([Home], (component) => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

    component.ngOnInit();
    expect(console.log).toHaveBeenCalledWith('Hello Home');
  }));

  it('template should contain "About Works!"', async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
    tcb.createAsync(Home).then((fixture) => {
      fixture.detectChanges();
      let compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('h2').textContent.toString().trim()).toEqual('Fun with Select!');
    });
  })));

});
