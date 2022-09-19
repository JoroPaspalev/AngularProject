import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamically-add-properties-to-type-script-objects',
  templateUrl:
    './dynamically-add-properties-to-type-script-objects.component.html',
  styleUrls: [
    './dynamically-add-properties-to-type-script-objects.component.css',
  ],
})
export class DynamicallyAddPropertiesToTypeScriptObjectsComponent {
  person: Person;

  constructor() {
    //1. Искаме class Person да има динамично променящи се properties (например ако идват различни данни от Back End-a),
    // но когато се опитаме да добавим някое ново пропърти към класа Person и него го няма в описанието на класа Typescript компилатора започва да се оплаква

    // Например:
    this.person = new Person('Ivan', 66);
    // person.gender = 'male;' - тук гърми

    // 2.Затова отиваме в класа Person и добавяме следния код [keys: string]: any; или [dinamicallyPriperties: string]: any; и сега вече сработва gender
    this.person.gender = 'male';
  }
}

export class Person {
  [key: string]: any; // Това казва: можеш да ми задаваш каквито си искаш допълнителни properties
  constructor(public name: string, public age: number) {}
}
