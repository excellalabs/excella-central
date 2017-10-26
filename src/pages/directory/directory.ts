import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { User, generateFullName } from '../../models/user/user';

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
  users: User[] = [];
  generateFullName = generateFullName;
  searchText: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private apiServiceProvider: ApiServiceProvider) {
    this.searchText = "";
    this.apiServiceProvider.getUsers().subscribe(data => {
      JSON.parse(data["_body"])["results"].forEach(user => {
        this.users.push({
          firstName: user.name.first,
          lastName: user.name.last,
          avatarUrl: user.picture.thumbnail
        });
      });
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DirectoryPage');
  }

  goToDirectoryDetail(user){
    //this.navCtrl.push("" , user)
  }
}
