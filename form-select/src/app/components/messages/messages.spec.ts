import {
  it,
  describe,
  expect,
  inject,
  injectAsync,
  beforeEachProviders,
  TestComponentBuilder
} from 'angular2/testing';

import {MessagesComponent} from './messages.component';
import Message from './message';

describe('Messages Component', () => {

  beforeEachProviders(() => [MessagesComponent]);

  it('should be defined', inject([MessagesComponent], (messages) => {
    expect(messages).toBeDefined();
  }));


  it('should match "title" property in template when overriding template', injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
    return tcb.overrideTemplate(MessagesComponent, `<span>{{title}}</span>`)
      .createAsync(MessagesComponent).then((fixture) => {

        const newTitle = 'Title';
        const component: MessagesComponent = fixture.debugElement.componentInstance;
        component.title = newTitle;

        fixture.detectChanges();

        const compiled = fixture.debugElement.nativeElement;
        const title = compiled.querySelector('span');

        console.log(`Title:`, title);

        expect(title).toHaveText(newTitle);
    })
    .catch(error => console.log(`Error: ${error}`));
  }));


  // it('should match "title" property in template when using real template', injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
  //   return tcb.createAsync(MessagesComponent).then((fixture) => {
  //       // fixture.detectChanges();

  //       let newTitle = 'Title';
  //       let component: MessagesComponent = fixture.debugElement.componentInstance;
  //       component.messages = [new Message('foo')];
  //       component.title = newTitle;

  //       fixture.detectChanges();

  //       const compiled = fixture.debugElement.nativeElement;
  //       const title = compiled.querySelector('div#messages-title');

  //       console.log(`Title with template not overridden:`, title);

  //       expect(title).toHaveText(title);
  //   })
  //   .catch(error => console.log(`Error: ${error}`));
  // }));
});
