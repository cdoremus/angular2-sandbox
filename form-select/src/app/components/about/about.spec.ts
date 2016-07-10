import {
  async,
  inject,
  TestComponentBuilder
} from '@angular/core/testing';

import {AboutComponent} from './about.component';

describe('About Component', () => {

  it('template should contain "About Works!"', async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
    tcb.createAsync(AboutComponent).then((fixture) => {
      fixture.detectChanges();
      let compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('p').textContent.toString().trim()).toEqual('About Works!');
    });
  })));

});
