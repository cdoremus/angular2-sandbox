import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
//import {FORM_DIRECTIVES} from '@angular/forms';

@Component({
  selector: 'button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
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
