import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'app-form-component',
    templateUrl: './form-component.component.html',
    styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent implements OnInit {

    employeeForm: FormGroup = new FormGroup({});

    // За да bind-нем <form> tag-a в html-а с model-а в Component-ния клас трябва да направим следното
    // 1. Първо импортваме { FormGroup, FormControl } от '@angular/forms'; Това са двата класа които ни трябват за да стане bind-ването
    // 2. За да наприм reactive form-а в Angular ни трябва инстанция на класа FormGroup - той ще ни държи всички Controls които са във формата
    // затова си правим едно field поле - employeeForm: FormGroup, т.е. това е model-а (нарича са още FormGroupModel)
    // 3. В ngOnInIt() присвояваме новата инстанция на FormGroup класа и в конструктора му подаваме обект който има key-value pairs
    // като за key e името на Form Control-а, а за value е самия FormControl
    // 4. За да бинд-на html с модела отивам в View-то и в форм тага слагам директивата <form [formGroup]="employeeForm"> Така форм тага се свързва с model-а
    // 5. Не намира [formGroup] директивата защото не съм импортнал ReactiveFormsModule модул - import { ReactiveFormsModule } from '@angular/forms';
    // 6. Байнднал съм модела сега трябва да байндна самите Controls - това става чрез formControlName директивата -  <input formControlName="firstName"
    // като името което присвоявам на formControlName е равно на някой key в Object-а с Controls
    // 7. Когато настина бутона Submit се изпраща формата - т.е. се рейсва Submit Event - Този Event може да го уловим чрез директивата (ngSubmit) и да си извикаме наш метод в Component-ния клас
    // <form [formGroup]="employeeForm" (ngSubmit)="onSubmit()">
    // 8. За да взема стойностите които Юзера е попълнил във формата трябва да ивзикам пропъртито .value на формата - this.employeeForm.value
    // това ще ми върне Object с попълнените данни и името на всеки от контролите {firstName: 'aaa', secondName: 'bbb', lastName: 'ccc'}

    constructor() { }

    ngOnInit(): void {

        this.employeeForm = new FormGroup(
            {
                firstName: new FormControl(),
                secondName: new FormControl(),
                lastName: new FormControl()
            }
        );
    }

    onSubmit() {
        console.log(this.employeeForm);
        console.log(this.employeeForm.value);
    }



}
