import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subject, Subscription } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-jp',
  templateUrl: './jp.component.html',
  styleUrls: ['./jp.component.css']
})
export class JpComponent implements OnInit, OnDestroy {

  //1 private subscription: Subscription | undefined;

  data: number | undefined;

  subscription: Subscription | undefined;

  notifier = new Subject();

  constructor() { }

  ngOnInit(): void {

    //1 Тук се subscribe-вам за Observable-а, обаче като премина на друга страница и не го убия този Observable той все още изпраща данни към app-a ми, което никак не е OK
    //1 Затова трябва в onDestroy() да се отрегистрирам от слушането му
    //1 const observable$ = this.getValueEveryOneSecond();
    //1 this.subscription = observable$.subscribe(sec => console.log('jp comp: - ' + sec));

    this.subscription = interval(1000)
      .pipe(take(22)) //take(22) - казва, вземи 22 от излъчените от Observable-а стойности и след това го unsubscribe-ни
      .subscribe(response => {
        //this.data = response;
        //console.log(this.data);
      });

    interval(500)
      .pipe(takeUntil(this.notifier)) // takeUntil(някакво условие), като това условие се подава чрез Pattern. Трябва да създам един Subject Object (той пък имплементира Observable)
      // и следователно има методите .next() и .complete(). Тук е трики момента че Observable-а към който закачаме takeUntil() ще спре да излъчва стойностите си, когато извикаме на
      // този Subject .next() метода т.е. условието е да извикаме Subject.next(), което вътрешно спира Source Observable-а. Добре де а къде да извикаме и кога .next() - по принцип
      // е хубаво да го викаме когато се унищожава компонента т.е.в метода onDestoy(). След като извикаме Subject.next() той убива Observable-а към който е закачен, но самия Subject
      // (който също е Observable) е жив и трябва да убием и него. Това го правим с извикване на Subject.complete() метода му.
      .subscribe(data => {

        this.data = data;
        console.log(data)
      });


  }

  public getValueEveryOneSecond(): Observable<number> {
    return interval(1000);
  }

  // 6 ways to unsubscribe here: https://blog.bitsrc.io/6-ways-to-unsubscribe-from-observables-in-angular-ab912819a78f
  ngOnDestroy(): void {
    console.log('JP Component was destroyed!');
    //1 this.subscription?.unsubscribe();
    console.log('Is Subscription closed? :' + this.subscription?.closed);



    this.notifier.next();
    this.notifier.complete();
  }

}
