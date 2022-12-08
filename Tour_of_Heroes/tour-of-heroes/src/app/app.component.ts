import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { combineLatest, from, interval, Observable, of, range, timer } from 'rxjs';
import { User } from './components/table/table.component';
import { HeroService } from './hero.service';
import { take, timeout } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
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

    this.setInterval();

    this.getTimer()
      .subscribe(value => console.log('Аз излъчвам една единствена стойност (нула) след определено време (4000 msec): ' + value));

    this.getRange()
      .subscribe(result => console.log('Незабавно изпращане на range стойностите: ' + result));

    this.getFrom()
      .subscribe(value => console.log('Current value that came from() func: ' + value));
  }

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  public getValueEveryOneSecond(): Observable<number> {
    // interval функцията ми връща Observable, който ми излъчва number стойности през 1000 milliseconds (1 sec) като започва от нула. те. 0,1,2,3...
    // този Observable e от тип infinite защото няма край, постоянно Emit-ва стойности
    return interval(1000);
  }

  public setInterval() {
    // тази функция setInterval() не връща Observable. Тя просто извиква през някакъв интервал от време (2000 msec в случая) подадена функция
    return setInterval(() => {
      //console.log('I am from setInterval function');
    }, 2000);
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


  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // виж снимка timer.png там където се намира компонента app.component.ts
  private getTimer() {
    // timer() функцията връща Observable, който излъчва една единствена стойност - нула след определено време - в случая е на 4тата секунда
    return timer(4000);
  }

  private getTimerWithDelay() {
    // timer(param1, param2) - връща Observable, който ще излъчи първата си стойност на седмата секунда, а след това всяка следваща след интервал от 2сек
    return timer(7000, 2000);
  }
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  private getRange() {
    // незабавно започва да излъчва стойности като в случая започва от 3 и излъчва 8бр. стойности т.е. 3,4,5,6,7,8,9,10
    return range(3, 8);
  }
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  private getFrom() {
    // Тази функция from() връща Observable. За параметър взема нещо което може да се итерира (напр. Array) разбива го на отделни
    // стойности и започва да ги изпраща стойност след стойност, а не целия масив като една единствена стойност
    // return from([1, 2, 3, 4, 5, 6]);
    // return from(['Ivan', 'Petur', 'Minko', 'Ganka', 'Ani'])
    return from('aabbccddeeff123456789');
  }
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




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
        // console.log(response1);
        // console.log(response2);
        // console.log(response3);
        let [a, b, c] = response1;
        let [d, e, f] = response2;
        let [g, h, i] = response3;

        this.dataForTable1 = [a, b, c, d, e, f, ...response3];
      });

    this.heroService.getWeatherData()
      .subscribe(data => {
        console.log(data);
    })

    // this.heroService.getData(1)
    //   .subscribe(data => {
    //     console.log(data);
    //     this.dataForTable = data as User[];
    //     let [a, b, c] = data;
    //     this.dataForTable1 = [a, b, c];
    //   });
  }

  ngOnDestroy(): void {
    console.log('app.component was DESTROYED');
    alert('app.component was DESTROYED');
  }

}
