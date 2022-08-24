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
  plan: Plan = {
    selectedPlan: ''
  }



  constructor() { }

  ngOnInit(): void {
  }



}

export interface Plan {
  selectedPlan: string;
}
