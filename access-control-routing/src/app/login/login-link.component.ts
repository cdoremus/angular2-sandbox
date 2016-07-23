import { Component } from '@angular/core';
import { Router } from '@angular/router';


/**
 * Nav bar link for logging in.
 */
@Component({
    selector: 'login-link',
    styles: [`
        .login-link {
            cursor:pointer;
            float:right;
            margin-right:40px;
        }
    `],
    template: `
        <a class="login-link" (click)="linkClicked()">{{linkText}}</a>
    `
})
export class LoginLinkComponent {
    linkText: string;

    constructor(private router: Router) {
        this.linkText = 'Login';
    }

    linkClicked() {
        // toggle the link text
        switch (this.linkText) {
            case 'Login':
                this.linkText = 'Logout';
                break;
            case 'Logout':
                this.linkText = 'Login';
                break;
            default:
                console.error(`Unknown link: ${this.linkText}`);
                break;
        }
        this.router.navigate(['/login']);
    }
}