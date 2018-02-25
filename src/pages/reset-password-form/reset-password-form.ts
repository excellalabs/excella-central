import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AccountService } from '../../providers/account.service/account.service';
import { PasswordValidator } from '../../validators/passwords';

/**
 * Generated class for the ResetPasswordFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reset-password-form',
  templateUrl: 'reset-password-form.html',
})
export class ResetPasswordFormPage {
  public resetPasswordForm: FormGroup;
  constructor(
    public navCtrl: NavController,
    private toastCtrl: ToastController,
    public navParams: NavParams,
    private formBuilder: FormBuilder,
    private accountService: AccountService) {
    this.resetPasswordForm = this.formBuilder.group({
      resetToken: ['', [Validators.required]],
      newPassword: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: [
        '',
        [Validators.required, PasswordValidator.passwordsMatch]
      ]
    })
  }

  resetPassword() {
    this.accountService.resetPassword(this.resetPasswordForm.value.newPassword, this.resetPasswordForm.value.resetToken)
      .then(success => {
        if (success) {
          let successToast = this.toastCtrl.create({
            message: 'Password reset successfully. Please login with your new password',
            duration: 4000,
            position: 'bottom',
            showCloseButton: true
          });
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
