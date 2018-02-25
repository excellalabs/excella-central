import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
    public navParams: NavParams,
    private formBuilder: FormBuilder,
    private accountService: AccountService) {
    this.resetPasswordForm = this.formBuilder.group({
      newPassword: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: [
        '',
        [Validators.required, PasswordValidator.passwordsMatch]
      ]
    })
  }

  resetPassword() {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResetPasswordFormPage');
  }

}
