import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { ButtonComponent } from './button/button.component';
import { MessagesComponent } from './messages/messages.component';
import { ApiService } from './shared';
import { ReactiveFormComponent } from './reactiveForm/reactiveForm.component';
import { TemplateDrivenFormComponent } from './templateDrivenForm/templateDrivenForm.component';
import { ReactivePageComponent } from './reactivePage/reactivePage.component';
import { TemplateDrivenPageComponent } from './templateDrivenPage/templateDrivenPage.component';
import { routing } from './app.routing';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    routing
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    DropdownComponent,
    ButtonComponent,
    MessagesComponent,
    ReactiveFormComponent,
    ReactivePageComponent,
    TemplateDrivenFormComponent,
    TemplateDrivenPageComponent
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
