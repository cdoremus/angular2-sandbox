import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent }   from './app.component';
import { ApiService } from './shared';
import { AboutComponent } from './about/about.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { AutocompletionService } from './searchbar/autocompletion.service';

@NgModule({
    imports: [
      BrowserModule,
      FormsModule,
      RouterModule
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
