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
    // Така ще се спре клик събитието
    event.preventDefault(); 
    event.stopPropagation();
  }

}
