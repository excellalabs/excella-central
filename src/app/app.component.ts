import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';
import { AccountServiceProvider } from '../providers/account.service/account.service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  pages: Array<{ title: string; component: any }>;
  rootPage: any;
  rememberUser: boolean;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public accountServiceProvider: AccountServiceProvider,
    public storage: Storage
  ) {
    this.storage.get('rememberUser').then(rememberUser => {
      this.rememberUser = rememberUser;
      if (rememberUser) {
        this.rootPage = 'HomePage';
      } else {
        this.rootPage = 'LandingPage';
      }
    });

    this.initializeApp();

    this.pages = [
      { title: 'Home', component: 'HomePage' },
      { title: 'Directory', component: 'DirectoryPage' },
      { title: 'Faceoff', component: 'FaceoffPage' },
      { title: 'Profile Photo', component: 'PictureUploadPage' }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    if (page.title === 'Landing' || page.title === 'Home') {
      this.nav.setRoot(page.component);
    } else {
      this.nav.push(page.component);
    }
  }

  logout() {
    this.accountServiceProvider.logout();
    this.nav.setRoot('LandingPage');
  }
}
