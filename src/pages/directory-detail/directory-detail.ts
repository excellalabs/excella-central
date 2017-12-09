import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Profile } from '../../models/profile/profile';
import { ProfileServiceProvider } from '../../providers/profile.service/profile.service';

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
    public profileServiceProvider: ProfileServiceProvider /*, public toastCtrl: ToastController*/
  ) {}

  async ionViewDidLoad() {
    if (this.navParams.get('id') !== undefined) {
      this.profile = await this.profileServiceProvider.getProfileById(
        this.navParams.get('id')
      );
    } else {
      //TODO: find out why toastCtrl .present() causes tests to fail
      /*
      let toast = this.toastCtrl.create({
        message: "Sorry, this profile could not be loaded.",
        duration: 3000,
        showCloseButton: true,
        dismissOnPageChange: true
      });
      toast.onDidDismiss(() => {
        this.navCtrl.push('DirectoryPage');
      });
      toast.present();
      */
      this.navCtrl.push('DirectoryPage');
    }
  }

  async swipe(event) {
    if (event.direction === 2) {
      //right to left swipe
      const previousProfile = await this.profileServiceProvider.getPreviousProfile(
        this.profile.id
      );
      if (previousProfile) {
        this.profile = previousProfile;
      }
    } else if (event.direction === 4) {
      //left to right swipe
      const nextProfile = await this.profileServiceProvider.getNextProfile(
        this.profile.id
      );
      if (nextProfile) {
        this.profile = nextProfile;
      }
    }
  }
}
