import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-viva-new-client-form-parent-observable',
  templateUrl: './viva-new-client-form-parent-observable.component.html',
  styleUrls: ['./viva-new-client-form-parent-observable.component.css']
})
export class VivaNewClientFormParentObservableComponent implements OnInit {

  firstname: string = "";
  lastname: string = "";
  isNewCustomer: boolean = false;
  selectedExtraMB: number = -1;
  selectedExtraSMS: string = '';
  plan: Plan = {
    selectedPlan: ''
  }
  isLeasingDevice: boolean = false;

  mark: string = 'initial';
  model: string = 'no model selected;';

  //////////////// new ////////////////

  vivaPlans$: Observable<string[]> = of(["Viva 10", "Viva 20", "Viva 30"]);
  megabytes$: Observable<MB[]> = of([
    {id: -1, quantity: 'Select extra Megabytes here'}, 
    {id: 1000, quantity: '1000MB'}, 
    {id: 2000, quantity: '2000MB'}, 
    {id:3000, quantity: '3000MB'}
  ]);

  additionalSMS$: Observable<SMS[]> = of([    
    {id: 20, quantity: '20 SMS'}, 
    {id: 50, quantity: '50 SMS'}, 
    {id:100, quantity: '100 SMS'}
  ]);

 
  constructor() { }

  ngOnInit(): void {
  }

  selectedMarkOptionChanged(mark: string){
    this.mark = mark;
  }

  modelChangeEventEmmiter(model: string){
    this.model = model;
  }

}

export interface Plan {
  selectedPlan: string;
}

export interface MB{
  id: number;
  quantity: string;
}

export interface SMS extends MB {  
}
