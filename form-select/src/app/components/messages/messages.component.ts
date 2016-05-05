import {Component, OnInit, Input} from 'angular2/core';
import Message from './message';

@Component({
  selector: 'messages',
  template: require('./messages.html'),
  styles: [require('./messages.scss')],
  providers: [],
  pipes: []
})
export class MessagesComponent implements OnInit {
  @Input() public title: string;
  @Input() public messages: Message[];

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello Messages');
    this.messages = [];
  }

  addMessage(message: Message) {
    this.messages.push(message);
  }
}
