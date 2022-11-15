import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.css']
})
export class ChildOneComponent implements OnInit, OnDestroy {

  constructor() { }


  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    console.log('Child one was destroyed!');
  }

}
