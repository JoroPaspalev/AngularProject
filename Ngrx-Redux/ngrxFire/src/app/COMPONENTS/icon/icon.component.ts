import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams, IAfterGuiAttachedParams } from 'ag-grid-community';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent implements OnInit, ICellRendererAngularComp {

  value: any;

  constructor() { }
  
  agInit(params: ICellRendererParams): void {
    this.value = params.value;
    console.log(params.data);
  }

  refresh(params: ICellRendererParams): boolean {
    return false;
  }

  afterGuiAttached?(params?: IAfterGuiAttachedParams | undefined): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
  }

}
