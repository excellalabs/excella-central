var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { AccountService } from './../../providers/account.service/account.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { PasswordValidator } from '../../../src/validators/passwords';
import { UsernameValidator } from '../../../src/validators/usernames';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = (function () {
    function RegisterPage(navCtrl, navParams, formBuilder, accountService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.accountService = accountService;
        this.registerForm = this.formBuilder.group({
            email: [
                '',
                [
                    Validators.required,
                    Validators.pattern('^.+@excella.com$'),
                    UsernameValidator.checkAccount,
                    UsernameValidator.profileExists
                ]
            ],
            password: ['', [Validators.required, Validators.minLength(8)]],
            confirmPassword: [
                '',
                [Validators.required, PasswordValidator.passwordsMatch]
            ]
        });
    }
    RegisterPage.prototype.registerUser = function () {
        var _this = this;
        this.accountService
            .register(this.registerForm.value.email, this.registerForm.value.password)
            .then(function (success) {
            if (success) {
                _this.navCtrl.setRoot('LandingPage'); // direct to a confirm password email was sent screen
            }
            else {
                alert('Registration failed.'); // replace with something better
            }
        });
    };
    return RegisterPage;
}());
RegisterPage = __decorate([
    IonicPage(),
    Component({
        selector: 'page-register',
        templateUrl: 'register.html'
    }),
    __metadata("design:paramtypes", [NavController,
        NavParams,
        FormBuilder,
        AccountService])
], RegisterPage);
export { RegisterPage };
//# sourceMappingURL=register.js.map