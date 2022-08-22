import { Component, OnInit } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { FormGroupState,} from 'ngrx-forms';
import { Observable, } from 'rxjs';
import { AppState, MyFormValue } from 'src/app/app.component';
import { of } from 'rxjs';

export interface Template {
  barId: number
}

export interface Bar {
  id: string;
  label: string;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {

  formState$: Observable<FormGroupState<MyFormValue>> = new Observable<FormGroupState<MyFormValue>>();

  //template$: Observable<FormGroupState<Template>>;
  // bars$: Observable<Bar[]> = new Observable<Bar[]>();

  // bars$: Observable<Bar[]> = of([
  //   { 'id': '1', 'label': 'Admin' },
  //   { 'id': '3', 'label': 'Operator' },
  //   { 'id': '5', 'label': 'Foo' },
  //   { 'id': '2', 'label': 'User' },
  // ]);

  options$ = of([
    { 'id': "111", 'label': 'Admin' },
    { 'id': "222", 'label': 'Operator' },
    { 'id': "333", 'label': 'Foo' },
    { 'id': "444", 'label': 'User' },
  ]);

  constructor(private store: Store<AppState>) {
    this.formState$ = this.store.select(s => s.myForm);
  }

  ngOnInit(): void {} 

  dispatchBtn(){
    this.store.dispatch({type: 'CHANGE'})
  }

  optionChange(event: Event){
    console.log("Current selected Option value is: " + (event.target as HTMLSelectElement).value);
    
    let optionValue = (event.target as HTMLSelectElement).value;

    this.store.dispatch(new SelectOption(optionValue))
  }
  
}

export class SelectOption implements Action {
  readonly type = 'CHANGE';

  constructor(public payload: string) {}
}