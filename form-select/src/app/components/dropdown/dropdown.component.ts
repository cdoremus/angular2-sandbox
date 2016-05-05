import {Component, OnInit, Input, Output, EventEmitter} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';

@Component({
  selector: 'dropdown',
  directives: [FORM_DIRECTIVES],
  styles: [require('./dropdown.scss')],
  template: require('./dropdown.html')
})
export class DropdownComponent implements OnInit {
  @Input() label: string = '';
  @Input() options: string[] = [];
  @Input() selected: string = this.options.length > 0 ? this.options[0] : '';
  @Output() selectedChanged: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello Home');
  }

  onChange(value: string) {
    this.selectedChanged.emit(value);
  }
}
