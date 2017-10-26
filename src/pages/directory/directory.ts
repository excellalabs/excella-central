import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DirectoryDetailPage} from "../directory-detail/directory-detail";

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
  searchText: string;
  employees = [
    {firstName: 'Barbra', lastName:  'Striesand', primarySkill: "Singer", avatarUrl: "https://randomuser.me/api/portraits/women/23.jpg", client: "DHS", funFact: "Fun fact 1"},
    {firstName: 'John', lastName:  'Doe', primarySkill: "Stuff Doer", avatarUrl: "https://randomuser.me/api/portraits/thumb/men/82.jpg", client: "USCIS", funFact:"Fun fact 2."}
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.searchText = "";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DirectoryPage');
  }

  goToDirectoryDetail(employee){
    this.navCtrl.push(DirectoryDetailPage , {'user':employee});
  }
}
