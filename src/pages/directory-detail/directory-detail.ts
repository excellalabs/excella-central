import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Profile } from '../../models/profile/profile';
import { ProfileService } from '../../providers/profile.service/profile.service';

@IonicPage()
@Component({
  selector: 'page-directory-detail',
  templateUrl: 'directory-detail.html'
})
export class DirectoryDetailPage {
  profile: Profile = null;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public profileService: ProfileService
  ) {}

  async ionViewDidLoad() {
    if (this.navParams.get('id') !== undefined) {
      this.profile = await this.profileService.getProfileById(
        this.navParams.get('id')
      );
    } else {
      this.navCtrl.push('DirectoryPage');
    }
  }

  async swipe(event) {
    if (event.direction === 2) {
      // right to left swipe
      const previousProfile = await this.profileService.getPreviousProfile(
        this.profile.id
      );
      if (previousProfile) {
        this.profile = previousProfile;
      }
    } else if (event.direction === 4) {
      // left to right swipe
      const nextProfile = await this.profileService.getNextProfile(
        this.profile.id
      );
      if (nextProfile) {
        this.profile = nextProfile;
      }
    }
  }

  public transformUrl(url) {
    return url.replace('upload', 'upload/c_scale,w_300,q_50');
  }
}
