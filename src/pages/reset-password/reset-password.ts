import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AccountService } from '../../providers/account.service/account.service';
@IonicPage()
@Component({
  selector: 'page-reset-password',
  templateUrl: 'reset-password.html',
})
export class ResetPasswordPage {
  public resetForm: FormGroup;
  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private alertCtrl: AlertController,
    private formBuilder: FormBuilder,
    private accountService: AccountService) {
    this.resetForm = this.formBuilder.group({
      email: ['', Validators.required]
    })
  }

  sendResetEmail() {
    this.accountService.checkAccountExists(this.resetForm.value.email).then(accountExists => {
      if (accountExists) {
        // send email
      } else {
        const alert = this.alertCtrl.create({
          title: 'Account for the provided email does not exist.',
          buttons: ['OK']
        });
        alert.present();
      }
    })
  }

}
