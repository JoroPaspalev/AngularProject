import { Component, OnInit, OnDestroy } from '@angular/core';
  import { IHeaderAngularComp } from 'ag-grid-angular';
import { GridApi, IHeaderParams, RowNode } from 'ag-grid-community';

@Component({
  selector: 'app-select-all',
  templateUrl: './select-all.component.html',
  styleUrls: ['./select-all.component.css']
})
export class SelectAllComponent implements IHeaderAngularComp {

  constructor() { }

  headerName: string = '';
  isChecked: boolean = false;
  isIndeterminate: boolean = false;
  showCheckBox: boolean = true;
  sortIcon: string = 'none';
  sortSubIcon: string = 'none';
  params: any;


  agInit(params: IHeaderParams | any): void {
    this.params = params;
    this.headerName = this.params?.displayName;

    this.params.api.addEventListener('selectionChanged', () => {
      this.setCheckboxState();
    });

    this.showCheckBox = this.params?.checkboxSelection;

    this.setDefaultSortIcon();
  }

  toggleSelect(): void {
    this.isChecked = !this.isChecked;
    if (this.isChecked) {
      this.params?.api?.forEachNode((node: any) => {
        (node as RowNode).selectThisNode(true);
      });

      const event: any = {
        type: 'selectionChanged',
        api: this.params.api,
        columnApi: this.params.columnApi
      };

      this.params?.api?.eventService?.dispatchEvent(event);
    }
    else {
      this.params.api.deselectAll();
    }
  }

  onSortRequested(event: any): void {
    this.setSortIcon();
    this.params.progressSort(event.shiftKey);
  }

  refresh(params: IHeaderParams): boolean {
    return false;
  }

  private setCheckboxState(): void {
    this.isIndeterminate = false;
    const selectedNodesLength: number = this.params?.api?.getSelectedNodes()?.length;
    const renderedNodesLength: number = this.params?.api?.getDisplayedRowCount();

    this.isChecked = selectedNodesLength > 0 && selectedNodesLength === renderedNodesLength;
    this.isIndeterminate = selectedNodesLength > 0 && !this.isChecked;
  }

  private setDefaultSortIcon(): void {
    this.sortIcon = this.sortSubIcon = 'none';
  }

  private setSortIcon(): void {
    if(this.sortIcon === 'none' || this.sortIcon === 'descending'){
      this.sortIcon = 'ascending';
      this.sortSubIcon = 'asc';
    }
    else if(this.sortIcon === 'ascending'){
      this.sortIcon = 'descending';
      this.sortSubIcon = 'desc';
    }
  }
}
