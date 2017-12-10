var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { AccountService } from '../../providers/account.service/account.service';
var LoginPage = (function () {
    function LoginPage(navCtrl, formBuilder, alertCtrl, accountService) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.accountService = accountService;
        this.userForm = this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }
    LoginPage.prototype.loginUser = function () {
        var _this = this;
        this.accountService
            .login(this.userForm.value.email, this.userForm.value.password)
            .then(function (loggedIn) {
            if (loggedIn) {
                _this.navCtrl.setRoot('HomePage');
            }
            else {
                var alert_1 = _this.alertCtrl.create({
                    title: 'Login failed!',
                    subTitle: 'Please try again.',
                    buttons: ['OK']
                });
                alert_1.present();
            }
        });
    };
    return LoginPage;
}());
LoginPage = __decorate([
    IonicPage(),
    Component({
        selector: 'page-login',
        templateUrl: 'login.html'
    }),
    __metadata("design:paramtypes", [NavController,
        FormBuilder,
        AlertController,
        AccountService])
], LoginPage);
export { LoginPage };
//# sourceMappingURL=login.js.map