import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { LoginService } from '../login/login.service';
import { NavigationService } from './navigation.service';

@Component({
  selector: 'navigation',
  styleUrls: ['./navigation.component.scss'],
  templateUrl: './navigation.component.html',
  directives: [ ...ROUTER_DIRECTIVES ],
  providers: [LoginService] //NavigationService provided in main.ts
})
export class NavigationComponent implements OnInit {
  loginLinkText: string = 'Login';
  showLoginLink: boolean = false;

  constructor(private navService: NavigationService,
  private loginService: LoginService) {
  }

  ngOnInit() {
    console.log("NavigationComponent.ngOnInit() called");
    this.loginService.loginLinkSubject.subscribe(param => {
      this.toggleLogin(param);
    });


  }


   toggleLogin(linkText: string): void {
     this.loginLinkText = (linkText === 'Login'.toLowerCase() ? 'Logout' : 'Login');
   }

}
