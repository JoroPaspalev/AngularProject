import { Component, OnInit } from '@angular/core';
import {
  CellClickedEvent,
  ColDef,
  ICellRendererParams,
  SelectionChangedEvent,
} from 'ag-grid-community';
import { MyCellComponent } from '../my-cell/my-cell.component';
import { HttpClient } from '@angular/common/http';
import { filter, Observable } from 'rxjs';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { IconComponent } from '../icon/icon.component';

const colors = ['Red', 'Green', 'Blue'];

@Component({
  selector: 'app-ag-grid-table',
  templateUrl: './ag-grid-table.component.html',
  styleUrls: ['./ag-grid-table.component.css'],
})
export class AgGridTableComponent implements OnInit, ICellRendererAngularComp {
  gridApi: any;
  columnApi: any;
  value: any;

  frameworkComponents: any; // 1. Правим си променливата точно с това име

  rowData: Observable<any[]> | undefined;

  defaultColDef: ColDef = {
    // това property казва - всички колони да имат сортиране и филтриране
    sortable: true,
    filter: true,
    resizable: true
  };

  constructor(private httpClient: HttpClient) {
    this.frameworkComponents = {
      // 2. В ctor-а и присвояваме обект с properties
      myCellComponent: MyCellComponent,
      iconComponent: IconComponent
    };
  }

  refresh(params: any): boolean {
    return false;
  }

  agInit(params: ICellRendererParams): void {
    this.value = params.value;
    console.log(params.data);
  }

  ngOnInit(): void {
    this.rowData = this.httpClient.get<any[]>(
      'https://www.ag-grid.com/example-assets/row-data.json'
    );

    this.rowData.subscribe(d => console.log(d));
  }

  // This is for Ag-Grid-Angular Library
  colDefs: ColDef[] = [
    {
      field: 'make',
      sortable: true,
      filter: true,
      checkboxSelection: true,
      headerCheckboxSelection: true,
    }, // ако не сме задали defaultColDef, sortable ще сортира а filter ще филтрира
    {
      field: 'select',     
      width: 249,
      editable: true,
      cellEditor: 'agSelectCellEditor',
      cellEditorParams: {
        values: ['Red', 'Green', 'Blue'],
      },
    },
    {
      field: 'model',
      type: 'rightAligned', // Има 2 начина (rightAligned и numericColumn) да подравним header и cell content в дясно. И двете правят едно и също
      width: 149,
      cellRenderer: 'myCellComponent',
    },
    {
      field: 'price',
      type: 'numericColumn', // Има 2 начина (rightAligned и numericColumn) да подравним header и cell content в дясно. И двете правят едно и също
      width: 150,
      cellRenderer: 'myCellComponent',
    },
    {
      headerName: "Icon",
      field: "icon",
      width: 150,
      cellRenderer: 'iconComponent',
      cellStyle: {textAlign: 'center'} // Това центрира текста в колоната
    }
  ];

  onGridReady(params: any) {
    this.gridApi = params.api;
    this.columnApi = params.columnApi;
  }

  selectionChanged(event: SelectionChangedEvent) {
    console.log(event.api.getSelectedRows());

    console.log(this.gridApi);
  }

  cellClick(event: CellClickedEvent) {
    console.log(event);
  }
}
