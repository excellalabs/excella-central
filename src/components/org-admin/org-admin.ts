import { Component } from '@angular/core';

/**
 * Generated class for the OrgAdminComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'org-admin',
  templateUrl: 'org-admin.html'
})
export class OrgAdminComponent {
  text: string;

  constructor() {
    console.log('Hello OrgAdminComponent Component');
    this.text = 'Org Admin Component';
  }
}
