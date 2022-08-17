import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LettersWithBlueColorDirective, MyErrorDirective } from './components/directives/create-attribute-directive/my-error-directive';

@NgModule({
  declarations: [
    AppComponent,
    MyErrorDirective,
    LettersWithBlueColorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
