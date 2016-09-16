import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { NavigationService } from './navigation.service';

@Component({
  selector: 'navigation',
  styleUrls: ['./navigation.component.scss'],
  templateUrl: './navigation.component.html'
})
export class NavigationComponent implements OnInit {
  loginLinkText: string = 'Login';
  showLoginLink: boolean = false;

  constructor(private navService: NavigationService,
  private loginService: LoginService) {
  }

  ngOnInit() {
    console.log("NavigationComponent.ngOnInit() called");
  }

}
