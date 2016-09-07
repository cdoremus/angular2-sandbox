import {Component, OnInit, Input} from '@angular/core';
import Message from './message';

@Component({
  selector: 'messages',
  template: './messages.component.html',
  styles: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  @Input() public title: string;
  @Input() public messages: Message[];

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('MessagesComponent.ngOnInit()');
    this.messages = [];
  }

  addMessage(message: Message) {
    this.messages.push(message);
  }
}
