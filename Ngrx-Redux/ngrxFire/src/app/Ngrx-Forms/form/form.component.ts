import { Component, OnInit } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { FormGroupState, } from 'ngrx-forms';
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
  isFormSubmitted = false;
  formState$: Observable<FormGroupState<MyFormValue>> = new Observable<FormGroupState<MyFormValue>>();

  selectedFruit: string = "marakuiq";
  selectedFood: string = "apple3"; // Ако selectedFood="apple" и "apple" го има в foods$ тогава се показва в select-а,
  // като default избрана стойност, ако я няма в селекта не се показва нищо, но като изпратя формата ще се вземе default-ната и стойност
  foods$ = of(["banana", "apple", "orange", "marakuiq"]);

  selectedOption: string = "";
  options$ = of([
    { 'id': "111", 'label': 'Admin' },
    { 'id': "222", 'label': 'Operator' },
    { 'id': "333", 'label': 'Foo' },
    { 'id': "444", 'label': 'User' },
  ]);

  constructor(private store: Store<AppState>) {
    this.formState$ = this.store.select(s => s.myForm);
  }

  ngOnInit(): void { }

  save() {

    this.isFormSubmitted = true;
    console.log(this.selectedOption);
    console.log(this.selectedFruit);
    console.log(this.selectedFood);


    //this.store.dispatch({ type: 'CHANGE' })
  }

  optionChange(event: Event) {
    let currSelectedOption = (event.target as HTMLSelectElement).value;// Това ми дава current selected Option from <select> tag

    this.beforeToChangeStateJustSetCurrentValueToLocalVariable(currSelectedOption); //Просто задаваме новата стойност на локална променлива

    console.log("Current selected Option value is: " + currSelectedOption);
    this.store.dispatch(new SelectOption(currSelectedOption)); // Тук изпращаме към Store, ако това се иска
  }

  // Ако имаме бутони SAVE и CANCEL във формата и искаме всички промени да се отразят чак след натискане на SAVE 
  // (има вариант и да се откажем ако натиснем CANCEL - до тогава не трябва да променяме State)
  beforeToChangeStateJustSetCurrentValueToLocalVariable(currSelectedOption: string){
    this.selectedOption = currSelectedOption;
  }
}

export class SelectOption implements Action {
  readonly type = 'CHANGE';

  constructor(public payload: string) { }
}