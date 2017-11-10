import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MyApp } from './app.component';
import { ApiServiceProvider } from '../providers/api.service/api.service';
import { ProfilesApi, ProfilesInjectionToken } from '../app/app-config';
import { SearchPipeMock } from '../test-config/mocks-ionic'

@NgModule({
  declarations: [
    MyApp,
    SearchPipeMock
  ],
  imports: [
    BrowserModule,
    HttpModule,
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
    { provide: ProfilesInjectionToken, useValue: ProfilesApi }
  ]
})
export class AppModule {}
