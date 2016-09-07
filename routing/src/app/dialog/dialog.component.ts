import { Component } from '@angular/core';


@Component({
  selector: 'my-dialog',
  styles: [`
    .dialog-container {
      height: 400px;
      length: 400px;
    }
    .dismiss-button {
      margin: 30px auto;
    }
  `],
  template: `
    <div class="dialog-container">
      <h2>Angular 2 Dialog</h2>
      <div class="dimiss-button">
        <button>Dismiss Dialog</button>
      </div>
    </div>
  `
})
export class DialogComponent {
}
