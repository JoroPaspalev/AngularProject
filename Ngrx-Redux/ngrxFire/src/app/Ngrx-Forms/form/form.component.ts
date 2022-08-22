import { Component, OnInit } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { FormGroupState,} from 'ngrx-forms';
import { Observable } from 'rxjs';
import { AppState, MyFormValue } from 'src/app/app.component';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {

  formState$: Observable<FormGroupState<MyFormValue>> = new Observable<FormGroupState<MyFormValue>>();

  constructor(private store: Store<AppState>) {
    this.formState$ = this.store.select(s => s.myForm);
  }

  ngOnInit(): void {} 

  dispatchBtn(){
    this.store.dispatch({type: 'CHANGE'})
  }
  
}
