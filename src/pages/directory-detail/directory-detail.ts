import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Profile } from '../../models/profile/profile';

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
  profile: Profile;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    if (navParams.get('profile') !== undefined) {
      this.profile = navParams.get('profile');
    } else {
      this.profile = new Profile('test', 'test', 'test', 'test', 'test', 'test');
    }
  }
}
