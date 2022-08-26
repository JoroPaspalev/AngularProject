import { Action, ActionReducerMap } from "@ngrx/store";
import {AppState, Dog, MyFormValue, Owner} from '../app.component';
import { postReducer } from "./post.reducer";
import { FormGroupState, createFormGroupState, formGroupReducer } from 'ngrx-forms';
import { Observable } from 'rxjs';
import { SelectOption } from "../Ngrx-Forms/form/form.component";
import { vivaReducer } from "../Ngrx-Forms/form/viva-new-client-form-with-Store/components/reducers/viva-reducer";


export const FORM_ID = 'AAABBBCCC';

export const initialFormState = createFormGroupState<MyFormValue>(FORM_ID, {
  someTextInput: 'hfdjfsfk',
  someCheckbox: true,
  selectedOption: 'initial',
  nested: {
    someNumber: 0,
  },
});

export function appReducer(state = initialFormState, action: Action): FormGroupState<MyFormValue> {
    const myForm = formGroupReducer(state, action);

    if (myForm !== state) {       
      state = { ...state, ...myForm };
    }

    //console.log(state.controls.someTextInput.value);

    switch (action.type) {
      case 'CHANGE':

         const currentFormState = createFormGroupState<MyFormValue>(FORM_ID, {
          someTextInput: state.controls.someTextInput.value,
          someCheckbox: state.controls.someCheckbox.value,
          selectedOption: (action as SelectOption).payload,
          nested: {
            someNumber: state.controls.nested.controls.someNumber.value,
          },
        });

        state = currentFormState;
        return state;

      default: {
        return state;
      }
    }
  }

export function simpleReducer(state: string = 'Hello world' , action: Action){
    //console.log(action.type, state);

    switch (action.type) {
        case 'SPANISH':
            return state = 'Hola mundo';

        case 'FRENCH':
            return state = 'Bonjour mudole';
    
        default:
            return state;
    }
}

export function secondReducer(state: string = '0000', action: Action){
    //console.log(action.type, state);

    switch (action.type) {
        case '1':
            return state = '11111';
        case '2':
            return state = '22222';
        default:
            return state;
    }
}

export function ownerReducer(state: Owner = {name: 'Ivan', city: 'Ruse'}, action: Action){
   //console.log(action.type, state);

    switch (action.type) {
        case 'CHANGE_NAME':
            state = {...state, name: 'Minka'};
            return state;

        case 'CHANGE_CITY':
            state = {...state, city: 'Varna'};
            return state;

        default:
            return state;
    }
}

// 2. Тук правим reducer за Dog property-то. Като ако за parameter-а state, който е от тип Dog ако на Reducer-а не му бъде подадена стойност 
// нека defualt-ната да му бъде {name: 'Sharo', age:1, owner: {name: 'Minko', city: 'Burgas'}} т.е. при initial извикването му
export function dogReducer(state: Dog = {name: 'Sharo', age:1, owner: {name: 'Minko', city: 'Burgas'}}, action: Action){
    switch (action.type) {
        case 'CHANGE_DOG_NAME':
            state = {...state, name: 'Joro'}
            return state;
    
        default:
            return state;
    }
}

// 3. Сега трябва да регистрираме тук за кое property от Store, кой е reducer-а му т.е. кой ще променя състоянието на това property
// 4. Някой трябва да .dispatch-ва action затова отиваме в component.ts
export const reducers: ActionReducerMap<AppState> = {
        message: simpleReducer,
        age: secondReducer,
        owner: ownerReducer,
        dog: dogReducer,
        myForm: appReducer,
        post: postReducer, // 4. Още не сме създали postReducer затова го правим
        currentSelectedMark: vivaReducer
}

