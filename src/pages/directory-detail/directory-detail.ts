import { Component } from '@angular/core';
import {App, IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import { Profile } from '../../models/profile/profile';

@IonicPage()
@Component({
  selector: 'page-directory-detail',
  templateUrl: 'directory-detail.html',
})
export class DirectoryDetailPage {
  profile: Profile = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController) {
    if (navParams.get('profile') !== undefined) {
      this.profile = navParams.get('profile');
    } else {
      let toast = toastCtrl.create({
        message: "Sorry, this profile could not be loaded.",
        duration: 3000,
        showCloseButton: true,
        dismissOnPageChange: true
      });
      toast.onDidDismiss(() => {
        this.navCtrl.push('DirectoryPage');
      });
      toast.present();

    }
  }
}
