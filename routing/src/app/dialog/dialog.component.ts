import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-dialog',
  styles: [`
    .dialog-container {
      height: 400px;
      border: 3px solid black;
      margin: 5px 250px;
      box-shadow: 10px 10px 5px lightblue;
      z-index: 1000;
      position: relative;
    }
    .dismiss-button {
      margin: 30px auto;
    }
    button {
      position: absolute;
      bottom: 10px;
      left: 260px;
    }
  `],
  template: `
    <div class="dialog-container">
      <h2>Angular 2 Dialog</h2>
      <div class="dimiss-button">
        <button (click)="closeDialog()">Dismiss Dialog</button>
      </div>
    </div>
  `
})
export class DialogComponent {

  constructor(private router: Router) {}

  closeDialog() {
    console.log('Closing dialog');

    this.router.navigate(['/']);
  }
}
