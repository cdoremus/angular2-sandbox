import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent }   from './app.component';
import { ApiService } from './shared';
import { AboutComponent } from './about/about.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { AutocompletionService } from './searchbar/autocompletion.service';
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
      SearchbarComponent
      ],
    providers: [
      ApiService,
      AutocompletionService
      ],
    bootstrap: [AppComponent],
})
export class AppModule {}
