import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DirectoryDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-directory-detail',
  templateUrl: 'directory-detail.html',
})
export class DirectoryDetailPage {
  user : {firstName: string, lastName: string, primarySkill: string, avatarUrl: string, client: string, funFact: string};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(navParams.get("user"));
    if(navParams.get('user')!==undefined){
      this.user=navParams.get('user');
    }else{
      this.user = {
        firstName: 'test',
        lastName: 'test',
        primarySkill: 'test',
        avatarUrl: 'test',
        client: 'test',
        funFact: 'test'
      }
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DirectoryDetailPage');
  }

}
