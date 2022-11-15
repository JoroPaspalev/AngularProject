import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  title = 'Tour of Heroes';
  intervalObservable$: Observable<number> | undefined;
  subscription: Subscription | undefined;

  constructor() { }

  ngOnInit(): void {

    this.intervalObservable$ = interval(1000); // това го правя защото има  | async pipe в html
    //this.subscription =  this.intervalObservable$.subscribe(data => console.log(data)); //това го правя за да мога да тествам след като унижоща home componet-a дали observable продължава да излъчва стойности
  }

  ngOnDestroy(): void {
    console.log('Home component was Destroyed!');
    //this.subscription?.unsubscribe();
  }
}
