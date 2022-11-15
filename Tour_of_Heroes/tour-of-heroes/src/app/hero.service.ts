import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from './components/table/table.component';
import { Hero } from './hero';
import { MessageService } from './message.service';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {

  constructor(private messageService: MessageService, private httpClient: HttpClient) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.addMessage('HeroService: fetched heroes');
    return of(HEROES);
  }

  getData(userId: number): Observable<User[]>{

    // const objectWithHeaders = new HttpHeaders('Authorization: Bearertoken'); // Това задава само един header
    const objectWithHeaders = new HttpHeaders({'MyCustomHeader': 'Info here' + 'token', 'JP-Type': ' app/json-meison'});// Това задава повече от един Header
    const requestOptions = { headers: objectWithHeaders};
    const dd = objectWithHeaders.keys();
    console.log(objectWithHeaders.has('MyCustomHeader'));
    console.log(objectWithHeaders.get('MyCustomHeader'));
    console.log(dd);


    return this.httpClient.get<User[]>(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`, requestOptions);
  }

  getWeatherData() {
    return this.httpClient.get<any>('http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=7e62e2ab7092cfee81085efc73a3117d');
  }

}
