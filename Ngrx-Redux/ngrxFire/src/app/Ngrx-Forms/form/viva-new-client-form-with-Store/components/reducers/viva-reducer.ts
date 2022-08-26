import { Action } from "@ngrx/store";
import { MarkChangeAction, MARK_CHANGE, MODEL_CHANGE } from "../actions/viva-actions";

export const initialState: string = 'initial';

export function vivaReducer(state: string = initialState, action: Action){
    switch (action.type) {
        case MARK_CHANGE:
            return state = (action as MarkChangeAction).payload;
        // case MODEL_CHANGE:
            // return state = (action as MarkChangeAction).payload;    
        default:
            return state;
    }

}