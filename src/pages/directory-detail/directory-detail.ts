import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Profile } from '../../models/profile/profile';

@IonicPage()
@Component({
  selector: 'page-directory-detail',
  templateUrl: 'directory-detail.html',
})
export class DirectoryDetailPage {
  profile: Profile;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    if (navParams.get('profile') !== undefined) {
      this.profile = navParams.get('profile');
    } else {
      this.profile = new Profile('test', 'test', 'test', 'test', 'test', 'test');
    }
  }
}
