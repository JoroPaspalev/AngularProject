import { Component, ElementRef, OnInit, TemplateRef, ViewChild, AfterViewInit } from '@angular/core';
import { Observable, of } from 'rxjs';


@Component({
  selector: 'app-viva-new-client-form-parent-store',
  templateUrl: './viva-new-client-form-parent-store.component.html',
  styleUrls: ['./viva-new-client-form-parent-store.component.css']
})
export class VivaNewClientFormParentStoreComponent implements OnInit {

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
  isTitleContainsStore = false;
  
  // Отива в View-то и търси елемент в който да има #title и ми дава референция към него т.е. избира го и имам достъп до протъртитата му, но се минава през property nativeElement задължително 
  @ViewChild('title') title: ElementRef = new ElementRef('dsadasdas');


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
  
  console.log('ng OnInit');
  console.log(this.title.nativeElement.textContent);
  
  }
  
  // Life cycle hook, който се вика чак когато Angular е рендерирал цялото View на компонента. 
  // А на мен точно тогава ми трябва да проверя дали има такова заглавие и дали то съдържа думата Store
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
    console.log(this.title.nativeElement.textContent);

    let titleText = this.title.nativeElement.textContent;

    if (titleText.includes('Store')) {
      this.isTitleContainsStore = true;
    }
    
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


export interface AppState {
  selecteedMark: string;
  selectedModel: string;
}
