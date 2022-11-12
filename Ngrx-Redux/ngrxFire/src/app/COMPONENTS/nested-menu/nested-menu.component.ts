import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nested-menu',
  templateUrl: './nested-menu.component.html',
  styleUrls: ['./nested-menu.component.css']
})
export class NestedMenuComponent implements OnInit {

  commentInput: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  save(){
   // send this.commentInput to Store or Save in DB
  }

  cancel(){
    this.commentInput = '';
  }

  stopEvent(event: Event){
    event.preventDefault(); 
    event.stopPropagation();
  }

  keyFunc(event: KeyboardEvent){

    console.log(event.key);

    if (event.key.toLocaleLowerCase() === "s" || event.key.toLowerCase() === "c") {
      event.preventDefault();
      event.stopPropagation();     
    }
    return false;
  }

}
