import {Component, OnInit, AfterContentChecked, AfterViewChecked} from '@angular/core';
import Message from '../messages/message';

@Component({
  selector: 'home',
  styles: ['./home.scss'],
  template: './home.html'
})
export class HomeComponent implements OnInit, AfterContentChecked, AfterViewChecked {
  superlative_options: string[] = ['good', 'better', 'best', 'extra-ordinary', 'awesome'];
  selected_superlative: string = this.superlative_options[0];
  superlative_messages: Message[] = [];


  rank_options: string[] = ['first', 'second', 'third'];
  selected_rank: string = this.rank_options[0];
  rank_messages: Message[] = [];

  button_messages: Message[] = [];

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello Home');
  }

  // Called after every change detection check
  // of the component (directive) CONTENT
  // Beware! Called frequently!
  ngAfterContentChecked() {
    // console.log(`After Content Checked selected: ${this.selected}`);
  }

  // Called after every change detection check
  // of the component (directive) VIEW
  // Beware! Called frequently!
  ngAfterViewChecked() {
    // console.log(`After View Checked selected: ${this.selected}`);
  }

  onSelectSuperlative(value) {
    console.log(`Selected superlative value: ${value}`);
    this.superlative_messages = [];
    this.superlative_messages.push(new Message(value, "color:red"));
    this.selected_superlative = value;
  }

  onSelectRank(value) {
    console.log(`Selected rank value: ${value}`);
    this.rank_messages = [];
    this.rank_messages.push(new Message(value, "color:#0000ff"));
    this.selected_rank = value;
  }

  buttonClicked(form) {
    console.log('Form button clicked', form);
    this.button_messages = [];
    this.button_messages.push(new Message(this.selected_superlative, "color:red"));
    this.button_messages.push(new Message(this.selected_rank, "color:blue"));
  }

}
