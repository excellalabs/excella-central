import { Component, Input } from '@angular/core';

/**
 * Generated class for the EmployeeCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'employee-card',
  templateUrl: 'employee-card.html'
})

export class EmployeeCardComponent {
  @Input() employee

  text: string;

  constructor() {
    console.log('Hello EmployeeCardComponent Component');
    this.text = 'Hello World';
  }

}
