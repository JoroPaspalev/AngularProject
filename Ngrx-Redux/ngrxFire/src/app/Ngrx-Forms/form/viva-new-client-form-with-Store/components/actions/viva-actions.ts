import { Action } from '@ngrx/store';

export const MARK_CHANGE: string = '[FORM] MARK CHANGE';
export const MODEL_CHANGE: string = '[FORM] MODEL CHANGE';

export class MarkChangeAction implements Action {
  readonly type = MARK_CHANGE;
  constructor(public payload: string) {}
}


