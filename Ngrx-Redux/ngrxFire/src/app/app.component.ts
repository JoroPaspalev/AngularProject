import { Component } from '@angular/core';

import { Store } from '@ngrx/store';
import { FormGroupState } from 'ngrx-forms';
import { Observable } from 'rxjs';
import { Downvote, EditText, Reset, Upvote } from './post.actions';
import { Post } from './post.model';

export interface Owner {
  name: string;
  city: string;
}

export interface Dog {
  name: string;
  age: number;
  owner: Owner;
}

export interface MyFormValue {
  someTextInput: string;
  someCheckbox: boolean;
  selectedOption: string;
  nested: {
    someNumber: number;
  };
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Нека сега направим малко по-сложно упражнение - Искаме да имаме обект Post който да има
// заглавие - text и лайкове - likes. Те да могат да се променят от бутони от UI

// I. Правим property в AppState - post
// II. Правим си model (DTO) в отделен файл post.model.ts
// III. Сега ми мрънка че в reducers открива property-то post, но за него няма регистриран reducer,
// който да го променя, затова отиваме в reducers и задаваме postReducer
// IV. Сега правим файл post.action.ts, който да ни държи actions
// V. Сега правим post.reducer.ts файл
// VI. Връщаме се в component.ts файла и си правя 2 variables - post$ и text. В ctor-а си регистрирам .select()
// Сега .dispatch-ваме action

// 1. Започваме с State object-а т.е. задаваме първо property-то което искаме да следим/променяме
// 2. Втора точка е да направим reducer за това property, затова отиваме в reducer.ts
export interface AppState {
  message: string;
  age: string;
  owner: Owner;
  dog: Dog;
  post: Post;
  myForm: FormGroupState<MyFormValue>;
  currentSelectedMark: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ngrxFire';

  message$: Observable<string> = new Observable<string>();
  ages$: Observable<string> = new Observable<string>();
  owner$: Observable<Owner> = new Observable<Owner>();
  dog$: Observable<Dog> = new Observable<Dog>();
  post$: Observable<Post> = new Observable<Post>();
  text: string = '';

  constructor(private store: Store<AppState>) {
    this.message$ = this.store.select('message');
    this.ages$ = this.store.select('age');
    this.owner$ = this.store.select('owner');
    this.dog$ = this.store.select('dog');
    this.post$ = this.store.select('post'); // аз ще ти взема от Store по този key: 'post' т.е. ще ми върне нещо от сорта на store['post']
  }

  editText() {
    this.store.dispatch(new EditText(this.text)); // Вместо да подаваме чист JS object си подаваме new EditText, като в ctor-а му даваме text като payload
  }

  upVote() {
    this.store.dispatch(new Upvote());
  }

  downVote() {
    this.store.dispatch(new Downvote());
  }

  reset() {
    this.store.dispatch(new Reset());
  }

  spanishMessage() {
    this.store.dispatch({ type: 'SPANISH' });
  }

  frenchMessage() {
    this.store.dispatch({ type: 'FRENCH' });
  }

  changeAgeToOne() {
    this.store.dispatch({ type: '1' });
  }

  changeAgeToTwo() {
    this.store.dispatch({ type: '2' });
  }

  changeName() {
    this.store.dispatch({ type: 'CHANGE_NAME' });
  }

  changeCity() {
    this.store.dispatch({ type: 'CHANGE_CITY' });
  }

  // 4. Тук .dispatch-ваме action, след като някое събитие (button (click) в този случай), което ще се влезе в reducer-a
  changeDogName() {
    this.store.dispatch({ type: 'CHANGE_DOG_NAME' });
  }
}
