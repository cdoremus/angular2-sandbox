import {
  inject,
  addProviders,
  async,
  TestComponentBuilder
} from '@angular/core/testing';
import {By} from '@angular/platform-browser';

import {MessagesComponent} from './messages.component';
import Message from './message';

describe('Messages Component', () => {
  var builder: TestComponentBuilder;

  beforeEach(() => {
    addProviders([MessagesComponent]);
  });

  beforeEach(inject([TestComponentBuilder], (tcb) => {
    builder = tcb;
  }));


  it('should be defined', inject([MessagesComponent], (messages) => {
    expect(messages).toBeDefined();
  }));


  it('should match "title" property in template when overriding template', async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
    return tcb.overrideTemplate(MessagesComponent, `<span>{{title}}</span>`)
      .createAsync(MessagesComponent).then((fixture) => {

        const newTitle = 'Foo Title';
        const component: MessagesComponent = fixture.debugElement.componentInstance;
        let messages_titleDebugElement = fixture.debugElement.query(By.css('span'));

        component.title = newTitle;
        component.messages = [new Message('Foo Message')];

        fixture.detectChanges();

        // console.log(`Title element:`, messages_titleDebugElement);
        // console.log(`Title native element:`, messages_titleDebugElement.nativeElement);

        expect(messages_titleDebugElement.nativeElement.innerHTML).toContain(newTitle);

        fixture.destroy();
    });
  })));

});
