import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Profile } from '../../models/profile/profile';
import { ProfileService } from '../../providers/profile.service/profile.service';

/**
 * Generated class for the ProfileAdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile-admin',
  templateUrl: 'profile-admin.html'
})
export class ProfileAdminPage {
  profile: Profile;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public profileService: ProfileService
  ) {}

  async ionViewDidLoad() {
    if (this.navParams.get('id')) {
      this.profile = await this.profileService.getProfileById(
        this.navParams.get('id')
      );
      console.log(this.profile);
    } else {
      this.profile = new Profile('', '', '', '', '', '', '');
      console.log('b');
    }
  }

  async submit() {
    if (this.profile.id) {
      await this.profileService.updateProfileById(this.profile);
    } else {
      await this.profileService.createProfile(this.profile);
    }
    this.navCtrl.push('AdminPage');
  }
}
