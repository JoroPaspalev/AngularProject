import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
	selector: 'app-jp',
	templateUrl: './jp.component.html',
	styleUrls: ['./jp.component.css']
})
export class JpComponent implements OnInit, OnDestroy {

	//1 private subscription: Subscription | undefined;

	data: number | undefined;

	subscription: Subscription | undefined;

	constructor() { }

	ngOnInit(): void {

		//1 Тук се subscribe-вам за Observable-а, обаче като премина на друга страница и не го убия този Observable той все още изпраща данни към app-a ми, което никак не е OK
		//1 Затова трябва в onDestroy() да се отрегистрирам от слушането му
		//1 const observable$ = this.getValueEveryOneSecond();
		//1 this.subscription = observable$.subscribe(sec => console.log('jp comp: - ' + sec));

		this.subscription = interval(1000)
			.pipe(take(22)) //take(22) - казва, вземи 22 от излъчените от Observable-а стойности и след това го unsubscribe-ни
			.subscribe(response => {
				this.data = response;
				console.log(this.data);

			})
	}

	public getValueEveryOneSecond(): Observable<number> {
		return interval(1000);
	}

	// 6 ways to unsubscribe here: https://blog.bitsrc.io/6-ways-to-unsubscribe-from-observables-in-angular-ab912819a78f
	ngOnDestroy(): void {
		console.log('JP Component was destroyed!');
		//1 this.subscription?.unsubscribe();

		console.log('Is Subscription closed? :' + this.subscription?.closed);
	}

}
