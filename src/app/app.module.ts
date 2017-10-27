import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DirectoryPage } from '../pages/directory/directory';
import { LoginPage } from '../pages/login/login';
import { ComponentsModule } from '../components/components.module';
import { PipesModule } from '../pipes/pipes.module';

import {DirectoryDetailPage} from "../pages/directory-detail/directory-detail";
import { ApiServiceProvider } from '../providers/api.service/api.service';
import { UsersApi, UsersInjectionToken } from '../app/app-config';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DirectoryPage,
    LoginPage,
    DirectoryDetailPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    ComponentsModule,
    PipesModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DirectoryPage,
    LoginPage,
    DirectoryDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ApiServiceProvider,
    { provide: UsersInjectionToken, useValue: UsersApi }
  ]
})
export class AppModule {}
