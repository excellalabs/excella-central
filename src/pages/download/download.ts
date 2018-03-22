import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-download',
  templateUrl: 'download.html'
})
export class DownloadPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  showInstructionsPage(): void {
    this.navCtrl.push('DownloadInstructionsPage');
  }
}
