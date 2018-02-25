import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProfileAdminComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'profiles-admin',
  templateUrl: 'profiles-admin.html'
})
export class ProfilesAdminComponent {
  text: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log('Hello ProfilesAdminComponent Component');
    this.text = 'Profiles Admin Component';
  }

  openProfileAdminPage() {
    this.navCtrl.push('ProfileAdminPage');
  }
}
