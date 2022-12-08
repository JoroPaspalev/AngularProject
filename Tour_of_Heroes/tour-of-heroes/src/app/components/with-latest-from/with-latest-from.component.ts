import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import {withLatestFrom } from 'rxjs/operators';

@Component({
  selector: 'app-with-latest-from',
  templateUrl: './with-latest-from.component.html',
  styleUrls: ['./with-latest-from.component.css']
})
export class WithLatestFromComponent implements OnInit {

  data: any;

  constructor() { }

  ngOnInit(): void {

    // Как работи withLatestFrom - Нека имаме например 2 Observables. Единия е source, другия е с който ще обединяваме стойностите излъчени от първия
    // Чрез withLatestFrom казваме искам да обединя двата стрийма но при някакви условия. Първото условие е втория observable да е излъчил поне една
    // стойност, ако не е колкото и стойности да излъчи първия нищо няма да бъде излъчено на изхода на output Observable (за). Второто условие е да се
    // излъчи на output Observable стойност само ако първия observable излъчва стойност!!
    // виж снимката с име withLatestFrom.png в директорията в която се намира with-latest-from.component.ts

    const obs1$ = interval(1000); // първи Observable
    const obs2$ = interval(3000); // втори Observable

    obs1$.pipe(withLatestFrom(obs2$))
      .subscribe(response => {
        this.data = response;
        console.log(response)
      });
  }


}
