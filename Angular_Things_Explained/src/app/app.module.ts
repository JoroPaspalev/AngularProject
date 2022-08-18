import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LettersWithBlueColorDirective, MyErrorDirective } from './components/directives/create-attribute-directive/my-error-directive';
import { TemplateDrivenFormComponent } from './components/angular-forms/template-driven-form/template-driven-form.component';
import { TestComponent } from './components/test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    MyErrorDirective,
    LettersWithBlueColorDirective,
    TemplateDrivenFormComponent,
    TestComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
