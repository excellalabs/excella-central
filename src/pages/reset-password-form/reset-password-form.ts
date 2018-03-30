import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  ToastController
} from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AccountService } from '../../providers/account.service/account.service';
import { PasswordValidator } from '../../validators/passwords';

/**
 * Generated class for the ResetPasswordFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  segment: 'token/:token'
})
@Component({
  selector: 'page-reset-password-form',
  templateUrl: 'reset-password-form.html'
})
export class ResetPasswordFormPage {
  public resetPasswordForm: FormGroup;
  constructor(
    public navCtrl: NavController,
    private toastCtrl: ToastController,
    public navParams: NavParams,
    private formBuilder: FormBuilder,
    private accountService: AccountService
  ) {
    let token = this.navParams.get('token');

    this.resetPasswordForm = this.formBuilder.group({
      resetToken: [token, [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: [
        '',
        [Validators.required, PasswordValidator.passwordsMatch]
      ]
    });
  }

  resetPassword() {
    this.accountService
      .resetPassword(
        this.resetPasswordForm.value.password,
        this.resetPasswordForm.value.resetToken
      )
      .then(success => {
        if (success) {
          let successToast = this.toastCtrl.create({
            message:
              'Password reset successfully. Please login with your new password',
            position: 'bottom',
            showCloseButton: true
          });
          successToast.present();
        } else {
          let errorToast = this.toastCtrl.create({
            message: 'Reset token is invalid.',
            duration: 4000,
            position: 'bottom'
          });
          errorToast.present();
        }
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResetPasswordFormPage');
  }
}
