import { TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { provideRoutes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { ApiService } from './shared';
import { AppComponent } from './app.component';
import { AuthenticationTokenProvider } from './login/authentication-token';
import { LoginLinkComponent } from './login/login-link.component';

class MockTokenProvider implements AuthenticationTokenProvider {
  getToken(): string {
    return 'foo';
  }
  setToken(token: string) {
    ; //noop
  }
  removeToken() {
    ; // noop
  }
}

describe('App', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BrowserModule, RouterTestingModule],
      declarations: [LoginLinkComponent, AppComponent],
      providers: [
        ApiService,
        provideRoutes([]),
        {provide: AuthenticationTokenProvider, useClass: MockTokenProvider}
        ]
    });
    TestBed.compileComponents(); // useful for debugging messages it provides
  });

  it('should have an url', () => {

    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    expect(fixture.debugElement.componentInstance.url).toEqual('https://github.com/preboot/angular2-webpack');
  });

});
