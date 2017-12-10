import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  loggedIn = false;
  image: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  openDirectoryPage() {
    this.navCtrl.push('DirectoryPage');
  }

  openFaceoffPage() {
    this.navCtrl.push('FaceoffPage');
  }

  logoutUser() {
    console.log('User logged out');
    this.loggedIn = false;
  }
}
