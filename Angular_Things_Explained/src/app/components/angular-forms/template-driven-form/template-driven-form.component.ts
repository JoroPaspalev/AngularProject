import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css'],
})
export class TemplateDrivenFormComponent implements OnInit {

  fullName: string = '';
  email: string = '';
  
  constructor() {}

  ngOnInit(): void {}

  saveEmployee(employeeForm: NgForm) {
    console.log(employeeForm);
    console.log(employeeForm.value);
  }
}
