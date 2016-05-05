import {Component, OnInit, Input, Output, EventEmitter} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';

@Component({
  selector: 'button',
  template: require('./button.html'),
  styles: [require('./button.scss')],
  providers: [],
  directives: [FORM_DIRECTIVES],
  pipes: []
})
export class ButtonComponent implements OnInit {
  @Input() public label: string = '';
  @Output() public clicked: EventEmitter<any> = new EventEmitter();

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello Button');
  }

  onClick(event) {
    this.clicked.emit(event);
  }

}
