import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent }   from './app.component';
import { ApiService } from './shared';
import { AboutComponent } from './about';
import { HomeComponent } from './home';
import { SearchbarComponent, AutocompletionService } from './searchbar';
import { routes } from './app.routes';

@NgModule({
    imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      ReactiveFormsModule,
      RouterModule.forRoot(routes)
      ],
    declarations: [
      AppComponent,
      AboutComponent,
      HomeComponent,
      SearchbarComponent
      ],
    providers: [
      ApiService,
      AutocompletionService
      ],
    bootstrap: [AppComponent],
})
export class AppModule {}
