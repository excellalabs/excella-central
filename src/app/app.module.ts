import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import {
  AccountsApi,
  AccountsInjectionToken,
  ProfilesApi,
  ProfilesInjectionToken
} from '../app/app-config';
import { HttpClientModule } from '@angular/common/http';
import { ProfileServiceProvider } from '../providers/profile.service/profile.service';
import { AccountServiceProvider } from '../providers/account.service/account.service';
import { PictureUploadServiceProvider } from '../providers/picture-upload.service.ts/picture-upload.service';

@NgModule({
  declarations: [MyApp],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ProfileServiceProvider,
    AccountServiceProvider,
    { provide: ProfilesInjectionToken, useValue: ProfilesApi },
    { provide: AccountsInjectionToken, useValue: AccountsApi },
    PictureUploadServiceProvider
  ]
})
export class AppModule {}
