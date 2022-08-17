// Увод: Директивата е текст вътре в таг, който Angular го разбира като го прочете и извършва някакво действие, 
// което действие се определя от нас вътре в класа върху който е поставено това @Directive

// 1. За да си създадем custom atrribute directive първо си правим някакъв .ts файл в който да пишем
// напр. my-error-directive.ts и добавяме следния код в него

import {Directive, ElementRef} from '@angular/core';

@Directive({
    selector:'[my-error]'
})
export class MyErrorDirective{
    constructor(elr:ElementRef){ // дай ми елемента аз ще му променя стила
        elr.nativeElement.style.background='red';
    }
}

// 2. Първо ще ни трябва selector, който да даде име на дерективата. В този случай се казва [my-error]
// Добрите практики казват, че е добре да има префикс преди името на директивата, по този начин се избягва конфликт с
// всякакви стандартни HTML attributes. We also shouldn’t use the ng prefix. That one’s used by Angular

// 3. След това създаваме класа MyErrorDirective
// 4. За да достъпи някой елемент от DOM се използва ElementRef class-a

// 5. За да можем да използваме тази нова директива трябва да я регистрираме в app.module.ts
// 5.1. import { MyErrorDirective } from './components/directives/create-attribute-directive/my-error-directive';
// 5.2. declarations: [AppComponent, MyErrorDirective ]

// 6. Сега вече можем да използваме новата директива в кода си, затова отиваме в template на app.component.ts
// и в тага <h1> я вкарваме  template: `<h1 my-error> Hello </h1>` - това ще оцвети цялото заглавие в червено


// Нека направим втора директива
@Directive({ selector: '[blue-letters]'})
export class LettersWithBlueColorDirective{
    
    constructor(element: ElementRef) {
        element.nativeElement.style.color='blue';       
    }
}


