import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ApiServiceProvider } from '../providers/api.service/api.service';
import { Storage } from '@ionic/storage';

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
    public apiServiceProvider: ApiServiceProvider,
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
      { title: 'Login', component: 'LoginPage' },
      { title: 'Register', component: 'RegisterPage' },
      { title: 'Faceoff', component: 'FaceoffPage' }
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
    this.apiServiceProvider.logout();
    this.nav.setRoot('LandingPage');
  }
}
