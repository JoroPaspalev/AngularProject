import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { NgrxFormsModule } from 'ngrx-forms'; 
import { reducers } from './reducers/simple.reducer';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { FormComponent } from './Ngrx-Forms/form/form.component';
import { VivaNewClientFormComponent } from './Ngrx-Forms/form/viva-new-client-form/components/viva-new-client-form-Parent/viva-new-client-form.component';
import { LeasingComponent } from './Ngrx-Forms/form/viva-new-client-form/components/leasing-Child/leasing.component';
import { VivaNewClientFormParentObservableComponent } from './Ngrx-Forms/form/viva-new-client-form-with-Observables/components/viva-new-client-form-parent-observable/viva-new-client-form-parent-observable.component';
import { LeasingChildObservableComponent } from './Ngrx-Forms/form/viva-new-client-form-with-Observables/components/leasing-child-observable/leasing-child-observable.component'; 

@NgModule({
  declarations: [AppComponent, FormComponent, VivaNewClientFormComponent, LeasingComponent, VivaNewClientFormParentObservableComponent, LeasingChildObservableComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    NgrxFormsModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
