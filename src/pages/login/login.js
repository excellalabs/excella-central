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
import { IonicPage, NavController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { AccountServiceProvider } from '../../providers/account.service/account.service';
var LoginPage = (function () {
    function LoginPage(
        /*public toastCtrl: ToastController, */
        navCtrl, formBuilder, accountServiceProvider) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.accountServiceProvider = accountServiceProvider;
        this.userForm = this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }
    LoginPage.prototype.loginUser = function () {
        var _this = this;
        this.accountServiceProvider
            .login(this.userForm.value.email, this.userForm.value.password)
            .then(function (loggedIn) {
            if (loggedIn) {
                _this.navCtrl.setRoot('HomePage');
            }
            else {
                alert('Login failed.'); // replace with something better
                //TODO: find out why toastCtrl .present() causes tests to fail
                /*
                this.toastCtrl.create({
                message: "Your credentials didn't work. Please try again.",
                duration: 3000,
                showCloseButton: true,
                dismissOnPageChange: true
                }).present();
                */
            }
        });
    };
    return LoginPage;
}());
LoginPage = __decorate([
    IonicPage(),
    Component({
        selector: 'page-login',
        providers: [AccountServiceProvider],
        templateUrl: 'login.html'
    }),
    __metadata("design:paramtypes", [NavController,
        FormBuilder,
        AccountServiceProvider])
], LoginPage);
export { LoginPage };
//# sourceMappingURL=login.js.map