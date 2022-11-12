import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AgGridModule } from 'ag-grid-angular';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { NgrxFormsModule } from 'ngrx-forms'; 
import { reducers } from './reducers/simple.reducer';

// Angular material
import {MatMenuModule} from '@angular/material/menu';
import { MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { FormComponent } from './Ngrx-Forms/form/form.component';
import { VivaNewClientFormComponent } from './Ngrx-Forms/form/viva-new-client-form/components/viva-new-client-form-Parent/viva-new-client-form.component';
import { LeasingComponent } from './Ngrx-Forms/form/viva-new-client-form/components/leasing-Child/leasing.component';
import { VivaNewClientFormParentObservableComponent } from './Ngrx-Forms/form/viva-new-client-form-with-Observables/components/viva-new-client-form-parent-observable/viva-new-client-form-parent-observable.component';
import { VivaNewClientFormParentStoreComponent } from './Ngrx-Forms/form/viva-new-client-form-with-Store/components/viva-new-client-form-parent-store/viva-new-client-form-parent-store.component';
import { NestedMenuComponent } from './COMPONENTS/nested-menu/nested-menu.component';
import { MyCellComponent } from './COMPONENTS/my-cell/my-cell.component';
import { AnchorComponent } from './COMPONENTS/anchor/anchor.component';
import { SelectAllComponent } from './COMPONENTS/select-all/select-all.component';
import { AgGridTableComponent } from './COMPONENTS/ag-grid-table/ag-grid-table.component';
import { HttpClientModule} from '@angular/common/http';
import { GridComponent } from './COMPONENTS/grid/grid.component';
import { IconComponent } from './COMPONENTS/icon/icon.component';
import {MatIconModule} from '@angular/material/icon';
import { DynamicallyAddPropertiesToTypeScriptObjectsComponent } from './COMPONENTS/dynamically-add-properties-to-type-script-objects/dynamically-add-properties-to-type-script-objects.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule, 
    HttpClientModule,
    AgGridModule.withComponents([MyCellComponent, IconComponent]),
    AppRoutingModule, 
    NgrxFormsModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    MatMenuModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule
  ],
  declarations: [AppComponent, FormComponent, VivaNewClientFormComponent, LeasingComponent, VivaNewClientFormParentObservableComponent, 
    VivaNewClientFormParentStoreComponent, NestedMenuComponent, MyCellComponent, AnchorComponent, SelectAllComponent, AgGridTableComponent, GridComponent, IconComponent, DynamicallyAddPropertiesToTypeScriptObjectsComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
