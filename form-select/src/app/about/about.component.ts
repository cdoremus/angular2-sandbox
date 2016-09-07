import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'about',
  template: './about.component.html',
  styles: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('AboutComponent.ngOnInit');
  }

}
