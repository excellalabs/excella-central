var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';
import { AccountService } from '../providers/account.service/account.service';
var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, accountService, storage) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.accountService = accountService;
        this.storage = storage;
        this.storage.get('rememberUser').then(function (rememberUser) {
            _this.rememberUser = rememberUser;
            if (rememberUser) {
                _this.rootPage = 'HomePage';
            }
            else {
                _this.rootPage = 'LandingPage';
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
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        if (page.title === 'Landing' || page.title === 'Home') {
            this.nav.setRoot(page.component);
        }
        else {
            this.nav.push(page.component);
        }
    };
    MyApp.prototype.logout = function () {
        this.accountService.logout();
        this.nav.setRoot('LandingPage');
    };
    return MyApp;
}());
__decorate([
    ViewChild(Nav),
    __metadata("design:type", Nav)
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Component({
        templateUrl: 'app.html'
    }),
    __metadata("design:paramtypes", [Platform,
        StatusBar,
        SplashScreen,
        AccountService,
        Storage])
], MyApp);
export { MyApp };
//# sourceMappingURL=app.component.js.map