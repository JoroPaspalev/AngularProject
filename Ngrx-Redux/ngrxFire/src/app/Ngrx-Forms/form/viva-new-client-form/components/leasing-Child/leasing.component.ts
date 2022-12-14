import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.component';
import { MarkChangeAction, MARK_CHANGE } from '../../../viva-new-client-form-with-Store/components/actions/viva-actions';

@Component({
  selector: 'app-leasing',
  templateUrl: './leasing.component.html',
  styleUrls: ['./leasing.component.css']
})
export class LeasingComponent implements OnInit, OnDestroy {

  selectedMark: string = '';
  selectedModel: string = '';
  filteredModels: Model[] = [];
  
  @Output() markChangeEventEmitter = new EventEmitter<string>();  
  @Output() modelChangeEventEmmiter = new EventEmitter<string>();

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }
  
  selectedMarkChanged(){   

    switch (this.selectedMark.toUpperCase()) {
      case 'SAMSUNG':
        this.filterByMark('Samsung');
        break;
        case 'SONY':
          this.filterByMark('Sony');
        break;
        case 'IPHONE':
         this.filterByMark('iPnone');
         break;
        case 'HUAWEI':
         this.filterByMark('Huawei');
        break;
        case 'XIAOMI':
         this.filterByMark('Xiaomi');
        break;
      default:
        break;
    }
    this.markChangeEventEmitter.emit(this.selectedMark);

    // Сега промени Store variable currentSelectedMark т.е. Dispatch action
    this.store.dispatch(new MarkChangeAction(this.selectedMark));

  }

  filterByMark(mark: string): void {
    this.filteredModels = this.models.filter(m => m.mark === mark);
  }

  modelChange(){
    this.modelChangeEventEmmiter.emit(this.selectedModel);
  }

  ngOnDestroy(): void {
    console.log('leasing was destroyed');
    this.markChangeEventEmitter.emit('');
    this.modelChangeEventEmmiter.emit('');
  }

  models: Model[] = [
    {mark: 'Samsung', model: 'S20'}, 
    {mark: 'Samsung', model: 'S10'}, 
    {mark: 'Samsung', model: 'A20'}, 
    {mark: 'Samsung', model: 'A30'}, 
    {mark: 'Samsung', model: 'A50'}, 
    {mark: 'Samsung', model: 'Note'}, 
    {mark: 'Samsung', model: 'Tab'}, 
    {mark: 'Samsung', model: 'Flip'}, 
    {mark: 'Samsung', model: 'S3 mini'}, 
    {mark: 'iPnone', model: '6s'}, 
    {mark: 'iPnone', model: '7s'}, 
    {mark: 'iPnone', model: '8s'}, 
    {mark: 'iPnone', model: '9s'}, 
    {mark: 'iPnone', model: '12 Pro Max'}, 
    {mark: 'Sony', model: 'Z1'}, 
    {mark: 'Sony', model: 'Z2'}, 
    {mark: 'Sony', model: 'Z3'}, 
    {mark: 'Huawei', model: 'mate 10 pro'}, 
    {mark: 'Huawei', model: 'mate 11 pro'}, 
    {mark: 'Huawei', model: 'mate 12 mini'}, 
    {mark: 'Xiaomi', model: 'mate Max'}, 
  ];

}

export interface Model {
    mark: string;
    model: string;
}
