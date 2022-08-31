import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-my-cell',
  templateUrl: './my-cell.component.html',
  styleUrls: ['./my-cell.component.css']
})
export class MyCellComponent implements OnInit, ICellRendererAngularComp {

    value: any;


  constructor() { }
  agInit(params: ICellRendererParams<any, any>): void {
    this.value = params.value;
    console.log(params.data);
  }
  refresh(params: ICellRendererParams<any, any>): boolean {
    return false;
  }

  ngOnInit(): void {
  }

  click(event: any){
      alert('Cell value is ' + this.value);
  }

}
