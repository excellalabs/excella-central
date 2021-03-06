var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';
import { AccountsApi, AccountsInjectionToken, ProfilesApi, ProfilesInjectionToken } from '../app/app-config';
import { ProfileService } from '../providers/profile.service/profile.service';
import { AccountService } from '../providers/account.service/account.service';
import { PictureUploadService } from '../providers/picture-upload.service/picture-upload.service';
import { AuthenticationService } from '../providers/authentication.service/authentication.service';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
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
            ProfileService,
            AccountService,
            { provide: ProfilesInjectionToken, useValue: ProfilesApi },
            { provide: AccountsInjectionToken, useValue: AccountsApi },
            PictureUploadService,
            AuthenticationService
        ]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map