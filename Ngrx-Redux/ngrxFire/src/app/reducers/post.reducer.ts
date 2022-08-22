// Reducer function

import { Action } from '@ngrx/store';
import { All, DOWNVOTE, EditText, EDIT_TEXT, RESET, UPVOTE } from '../post.actions';
import { Post } from '../post.model';

// 1. Изграждам си postReducer-a, стигам до initialState за Post обаче нямам още такъв, затова си правя една const
export function postReducer(state: Post = initialPost, action: Action) {
  //console.log(action.type, state);

  switch (action.type) {
    case EDIT_TEXT:
      // 2. За да направя новия обект, който държи новия state, добър начин е да използвам helper function
      return newState(state, { text: (action as EditText).payload });
    //return {...state, text: action.payload}; - това е алтернативата на newState helper function

    case UPVOTE:
      return newState(state, { likes: state.likes + 1 });
    //return {...state, likes: state.likes + 1}

    case DOWNVOTE:
      return newState(state, { likes: state.likes - 1 });

    case RESET:
        return newState(state, initialPost);

    default:
      return state;
  }
}

// Default app state
const initialPost: Post = {
  text: 'Initial text of the Post',
  likes: 0,
};

// Helper function to ctreate new state object
// Тази функция Object.assign ще направи нов обект от ляво на дясно, т.е. всяка променлива от дясно ще се презапише
// върху тази от ляво - currentState ще отиде в празния обект {}, а newData ще се запише на мястото на currentState,
// така ще имаме нов обект който ще ни носи и стария state и новия state
const newState = (currentState: any, newData: any) => {
  return Object.assign({}, currentState, newData);
};
