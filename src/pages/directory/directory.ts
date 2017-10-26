import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DirectoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-directory',
  templateUrl: 'directory.html',
})
export class DirectoryPage {
  employees = [
    {firstName: 'Barbra', lastName:  'Striesand', avatarUrl: "https://randomuser.me/api/portraits/thumb/men/83.jpg"},
    {firstName: 'John', lastName:  'Doe', avatarUrl: "https://randomuser.me/api/portraits/thumb/men/83.jpg"}
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DirectoryPage');
  }

  goToDirectoryDetail(employee){
    //this.navCtrl.push("" , employee)
  }
}
