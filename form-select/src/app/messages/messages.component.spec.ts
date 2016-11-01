import { async, TestBed } from '@angular/core/testing';
import {By} from '@angular/platform-browser';

import {MessagesComponent} from './messages.component';
import Message from './message';

describe('Messages Component', () => {
  const html = '<span>{{title}}</span>';
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [MessagesComponent]
    });
  });


  it('should be defined', () => {
    const fixture = TestBed.createComponent(MessagesComponent);
    const component: MessagesComponent = fixture.componentInstance;
    fixture.detectChanges();

    expect(component.messages).toBeDefined();
  });


  it('should match "title" property in template when overriding template', () => {
    TestBed.overrideComponent(MessagesComponent, {
        set: { template: html }
    });
    TestBed.compileComponents().then(() => {

        const fixture = TestBed.createComponent(MessagesComponent);

        const newTitle = 'Foo Title';
        const component: MessagesComponent = fixture.debugElement.componentInstance;
        let messages_titleDebugElement = fixture.debugElement.query(By.css('span'));

        component.title = newTitle;
        component.messages = [new Message('Foo Message')];

        fixture.detectChanges();

        expect(messages_titleDebugElement.nativeElement.innerHTML).toContain(newTitle);

        fixture.destroy();
    });
  });

});
