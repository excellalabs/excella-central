import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DirectoryPage } from '../directory/directory';
import { LoginPage } from '../login/login'

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  loggedIn=false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  openDirectoryPage() {
    this.navCtrl.push(DirectoryPage);
  }

  openLoginPage() {
    this.navCtrl.push(LoginPage);
  }

  logoutUser(){
    console.log("User logged out");
    this.loggedIn=false;
  }
}

