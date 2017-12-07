import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { ApiServiceProvider } from '../providers/api.service/api.service';
import { LoginApi, LoginInjectionToken, ProfilesApi, ProfilesInjectionToken } from '../app/app-config';
import { HttpClientModule } from "@angular/common/http";
import { CloudinaryModule, CloudinaryConfiguration } from '@cloudinary/angular-4.x';
import * as  Cloudinary from 'cloudinary-core';
import { Camera } from '@ionic-native/camera';


@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    CloudinaryModule.forRoot(Cloudinary, { cloud_name: 'excella'} as CloudinaryConfiguration)
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
    { provide: LoginInjectionToken, useValue: LoginApi },
    Camera
  ]
})
export class AppModule {
}
