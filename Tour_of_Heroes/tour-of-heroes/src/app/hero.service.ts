import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { MessageService } from './message.service';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes(): Observable<Hero[]> {
    this.messageService.addMessage('HeroService: fetched heroes');
    return of(HEROES);
  }

  constructor(private messageService: MessageService) { }
}
