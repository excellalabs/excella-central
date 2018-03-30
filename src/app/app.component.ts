import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';
import { AccountService } from '../providers/account.service/account.service';
import { AuthenticationService } from '../providers/authentication.service/authentication.service';
import { GoogleAnalytics } from '@ionic-native/google-analytics';

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
    public storage: Storage,
    private accountService: AccountService,
    private authService: AuthenticationService,
    private googleAnalytics: GoogleAnalytics
  ) {
    const url = document.URL.split('#')[1];
    if (url === '/download') {
      this.rootPage = 'Download';
    } else {
      this.authService.getUserToken().then(userToken => {
        if (userToken && userToken !== '') {
          this.rootPage = 'HomePage';
        } else {
          this.rootPage = 'LandingPage';
        }
      });
    }

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

    const excellaGoogleAnalyticsTracker: string = 'UA-116555019-1';
    this.googleAnalytics.startTrackerWithId(excellaGoogleAnalyticsTracker);
  }

  openPage(page) {
    if (
      page.title === 'Landing' ||
      page.title === 'Home' ||
      page.title === 'Download'
    ) {
      this.nav.setRoot(page.component);
    } else {
      this.nav.push(page.component);
    }
  }

  logout() {
    this.accountService.logout();
    this.nav.setRoot('LandingPage');
  }
}
