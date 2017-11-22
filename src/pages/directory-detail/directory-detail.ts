import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Profile } from '../../models/profile/profile';

@IonicPage()
@Component({
  selector: 'page-directory-detail',
  templateUrl: 'directory-detail.html',
})
export class DirectoryDetailPage {
  profile: Profile = null;

  constructor(public navCtrl: NavController, public navParams: NavParams/*, public toastCtrl: ToastController*/) {
    if (navParams.get('profile') !== undefined) {
      this.profile = navParams.get('profile');
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
}
