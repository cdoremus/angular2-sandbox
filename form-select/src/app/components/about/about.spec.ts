import {
  it,
  describe,
  expect,
  async,
  inject,
  TestComponentBuilder,
  beforeEachProviders
} from 'angular2/testing';

import {AboutComponent} from './about.component';

describe('About Component', () => {

  beforeEachProviders(() => []);

  it('template should contain "About Works!"', async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
    tcb.createAsync(AboutComponent).then((fixture) => {
      fixture.detectChanges();
      let compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('p').textContent.toString().trim()).toEqual('About Works!');
    });
  })));

});
