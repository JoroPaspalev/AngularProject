import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viva-new-client-form',
  templateUrl: './viva-new-client-form.component.html',
  styleUrls: ['./viva-new-client-form.component.css']
})
export class VivaNewClientFormComponent implements OnInit {

  firstname: string = "";
  lastname: string = "";
  isNewCustomer: boolean = false;
  selectedExtraMB: string = 'Select extra Megabytes here';
  selectedExtraSMS: string = '';
  plan: Plan = {
    selectedPlan: ''
  }
  isLeasingDevice: boolean = false;

  mark: string = 'initial';



  constructor() { }

  ngOnInit(): void {
  }

  selectedMarkOptionChanged(mark: string){
    this.mark = mark;
  }


}

export interface Plan {
  selectedPlan: string;
}
