import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { combineLatest, interval, Observable, of, timer } from 'rxjs';
import { User } from './components/table/table.component';
import { HeroService } from './hero.service';
import { take, timeout } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Tour of Heroes';
  dataForTable: User[] = [];
  dataForTable1: User[] = [];
  time: number = -10;
  timeoutData: number | undefined;

  secondAfterSomeDelay: number = -10;

  constructor(private heroService: HeroService) {
  }

  ngOnInit(): void {

    this.getSecondsAfterSomeTimeInterval()
      .subscribe(second => {
        this.secondAfterSomeDelay = second;
      });

    this.getValueEveryOneSecond()
      //.pipe(take(3)) // Този take в pipe() ще вземе само 3 Emitt-нати стойности и ще спре да слуша за следващи промени
      .subscribe(time => {
        this.time = time;
      });

    this.getOfValues();

    this.setTimeoutMyFunc();


  }

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  public getValueEveryOneSecond(): Observable<number> {
    // interval функцията ми връща Observable, който ми излъчва number стойности през 1000 milliseconds (1 sec) като започва от нула. те. 0,1,2,3...
    // този Observable e от тип infinite защото няма край, постоянно Emit-ва стойности
    return interval(1000);
  }

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  public getSecondsAfterSomeTimeInterval(): Observable<number> {
    // Започва да връща стойностите 0,1,2,3,4.... като стартира Emit-ването им след 4000 msec и всяка нова стойност ще се излъчва през интервал от 3000 msec. Прави същото като interval но с отложен старт.
    return timer(4000, 3000);
  }

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  private getOfValues() {
    return of(1000, 2000, 3000, 5000) // тук трябва да е http.get('url')
      .pipe(timeout(2500)) // timeout operator-а казва ако GET request-a който си изпратил не върне отговор до 2500 msec тогава хвърли грешка
      .subscribe(data1 => {
        console.log(data1)
        this.timeoutData = data1
      });
  }

  private setTimeoutMyFunc() {
    // този setTimeout() функция казва: Извикай ми подадената функция след 3000 msec
    setTimeout(() => console.log('=========================================>'), 3000);

    // Ще изпълня getData() функцията след 6 sec
    setTimeout(() => {
      this.heroService.getData(7)
        .subscribe(response => {
          this.dataForTable = response;
      })
    }, 6000);
  }


  btnClick() {
    combineLatest([
      this.heroService.getData(4),
      this.heroService.getData(5),
      this.heroService.getData(6)
    ])
      .subscribe(([response1, response2, response3]) => {
        console.log(response1);
        console.log(response2);
        console.log(response3);
        let [a, b, c] = response1;
        let [d, e, f] = response2;
        let [g, h, i] = response3;

        this.dataForTable1 = [a, b, c, d, e, f, ...response3];
      })

    // this.heroService.getData(1)
    //   .subscribe(data => {
    //     console.log(data);
    //     this.dataForTable = data as User[];
    //     let [a, b, c] = data;
    //     this.dataForTable1 = [a, b, c];
    //   });
  }

}
