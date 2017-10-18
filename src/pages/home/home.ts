import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Nav } from 'ionic-angular';

import { DirectoryPage } from '../../pages/directory/directory';
import { LoginPage } from '../../pages/login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  rootPage: any = HomePage;
  pages: Array<{title: string, component: any}>;
  @ViewChild(Nav) nav: Nav;
  
  constructor(public navCtrl: NavController) {
    this.pages = [
      { title: 'Directory', component: DirectoryPage },
      { title: 'Login', component: LoginPage }
    ];
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

}
