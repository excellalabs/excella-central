import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
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
    private alertCtrl: AlertController,
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
          this.navCtrl.push('LoginPage');
        } else {
          const alert = this.alertCtrl.create({
            title: 'Access token is invalid',
            buttons: ['OK']
          });
          alert.present();
        }
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResetPasswordFormPage');
  }

}
