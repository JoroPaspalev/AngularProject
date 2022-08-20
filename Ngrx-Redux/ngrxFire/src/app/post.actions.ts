import { Action } from '@ngrx/store';

// Вместо да пишем директно string използваме const
export const EDIT_TEXT = '[POST] Edit';
export const UPVOTE = '[POST] Upvote';
export const DOWNVOTE = '[POST] Downvote';
export const RESET = '[POST] Reset';

// Това са ми Action classes - вместо да подавам {type: 'SPANISH'} си правя class, който наследява Action - т.е. има type property
export class EditText implements Action {
  readonly type = EDIT_TEXT;
  // Този път искаме да изпратим данни с нашия action - За да можем да го направим ни трябва ctor и да му подадем новата
  //  стойност (т.е. payload - така се нарича) която ще идва от [(ngModel)]
  constructor(public payload: string) {}
}

// Създаваме си всички actions
export class Upvote implements Action{
    readonly type = UPVOTE;
}

export class Downvote implements Action{
    readonly type = DOWNVOTE;
}

export class Reset implements Action{
    readonly type = RESET;
}

// Като финална стъпка ще Export-нем всички тези actions като самостоятелен type за да може да ги използваме като strong Data type
// т.е. казваме че който приеме този тип данни може да е само един от тези 4 класа
export type All = Upvote | Downvote | Reset | EditText;