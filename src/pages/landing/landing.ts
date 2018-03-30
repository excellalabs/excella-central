import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html'
})
export class LandingPage {
  isBrowser: boolean = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public platform: Platform
  ) {}

  ionViewDidLoad(): void {
    this.platform.ready().then(() => {
      this.checkIfBrowser();
    });
  }

  openLoginPage(): void {
    this.navCtrl.push('LoginPage');
  }

  openRegisterPage(): void {
    this.navCtrl.push('RegisterPage');
  }

  openDownloadPage(): void {
    this.navCtrl.push('DownloadPage');
  }

  checkIfBrowser(): void {
    // Determine if user is viewing on desktop
    this.isBrowser = this.platform.is('core') || this.platform.is('mobileweb');
  }
}
