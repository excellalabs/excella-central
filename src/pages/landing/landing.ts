import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html'
})
export class LandingPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  openLoginPage(): void {
    this.navCtrl.push('LoginPage');
  }

  openRegisterPage(): void {
    this.navCtrl.push('RegisterPage');
  }

  openDownloadPage(): void {
    this.navCtrl.push('DownloadPage');
  }
}
