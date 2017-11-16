import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import {ConnectionBackend, Http, HttpModule} from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MyApp } from './app.component';
import { ApiServiceProvider } from '../providers/api.service/api.service';
import {LoginApi, LoginInjectionToken, ProfilesApi, ProfilesInjectionToken} from '../app/app-config';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ApiServiceProvider,
    { provide: ProfilesInjectionToken, useValue: ProfilesApi },
    { provide: LoginInjectionToken, useValue: LoginApi }
  ]
})
export class AppModule {}
