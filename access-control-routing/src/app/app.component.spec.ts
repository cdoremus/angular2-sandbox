import { TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { provideRoutes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { ApiService } from './shared';
import { AppComponent } from './app.component';
import { AuthenticationTokenProvider } from './login/authentication-token';
import { LoginLinkComponent } from './login/login-link.component';
import { LoginLinkService } from './login/login-link.service';
import { LoginService } from './login/login.service';

class MockTokenProvider implements AuthenticationTokenProvider {
  getToken(): string {
    return 'foo';
  }
  setToken(token: string) {
    ; // noop
  }
  removeToken() {
    ; // noop
  }
}

describe('App Component', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BrowserModule, RouterTestingModule, HttpModule, FormsModule],
      declarations: [LoginLinkComponent, AppComponent],
      providers: [
        ApiService,
        LoginService,
        LoginLinkService,
        {provide: AuthenticationTokenProvider, useClass: MockTokenProvider},
        provideRoutes([])
        ]
    });
    TestBed.compileComponents(); // useful for debugging messages it provides
  });

  it('should have a url', () => {
    try {
      let fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      expect(fixture.debugElement.componentInstance.url).toEqual('https://github.com/preboot/angular2-webpack');
    } catch (error) {
      console.log("App Component Error:", error);
    }

  });

});
