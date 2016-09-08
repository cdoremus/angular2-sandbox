import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-dialog',
  styles: [`
    .dialog-container {
      height: 300px;
      width: 300px;
      border: 3px solid black;
      background-color: #0002ff;
      box-shadow: 10px 10px 5px lightblue;
      z-index: 1000;
      position: fixed;
      top: 20%;
      left: 40%;
      opacity:  1;
    }
    .dialog-content {
      margin: 20% 10%;
    }
    .dismiss-button {
    }
    button {
      position: absolute;
      bottom: 10%;
      left: 35%;
    }
  `],
  template: `
    <div class="dialog-container">
      <h2>Angular 2 Dialog</h2>
      <div class="dialog-content">
        This is a dialog displayed using the
        <i>DialogComponent</i> class, a
        named router-outlet tag and the routerLink directive.
      </div>
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
