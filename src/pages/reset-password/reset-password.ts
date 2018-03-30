import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  ToastController
} from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AccountService } from '../../providers/account.service/account.service';
@IonicPage()
@Component({
  selector: 'page-reset-password',
  templateUrl: 'reset-password.html'
})
export class ResetPasswordPage {
  public resetForm: FormGroup;
  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private toastCtrl: ToastController,
    private formBuilder: FormBuilder,
    private accountService: AccountService
  ) {
    this.resetForm = this.formBuilder.group({
      email: ['', Validators.required]
    });
  }

  sendResetEmail() {
    this.accountService
      .checkAccountExists(this.resetForm.value.email)
      .then(accountExists => {
        if (accountExists) {
          this.accountService
            .sendResetEmail(this.resetForm.value.email)
            .then(() => {
              this.goToPasswordResetForm();
            });
        } else {
          let toast = this.toastCtrl.create({
            message: 'Account does not exist',
            duration: 4000,
            position: 'bottom'
          });
          toast.present();
        }
      });
  }

  goToPasswordResetForm() {
    const toast = this.toastCtrl.create({
      message: 'Reset Password email has been sent. Please check your inbox.',
      position: 'top',
      showCloseButton: true
    });
    toast.present();
  }
}
