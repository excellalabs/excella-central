import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../../providers/account.service/account.service';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  public userForm: FormGroup;

  constructor(
    private navCtrl: NavController,
    private formBuilder: FormBuilder,
    private alertCtrl: AlertController,
    private accountService: AccountService
  ) {
    this.userForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  loginUser() {
    let emailVerified = this.emailVerified(this.userForm.value.email);
    if (!emailVerified) {
      this.showAccountNotVerifiedAlert();
    } else {
      this.accountService
        .login(this.userForm.value.email, this.userForm.value.password)
        .then(loggedIn => {
          if (loggedIn) {
            this.navCtrl.setRoot('HomePage');
          } else {
            this.showLoginFailedAlert();
          }
        });
    }
  }

  showLoginFailedAlert() {
    const alert = this.alertCtrl.create({
      title: 'Login failed!',
      subTitle: 'Please try again.',
      buttons: ['OK']
    });
    alert.present();
  }

  showAccountNotVerifiedAlert() {
    const alert = this.alertCtrl.create({
      title: 'Account not verified',
      subTitle: 'Please confirm your account before logging in.',
      buttons: ['OK']
    });
    alert.present();
  }

  async emailVerified(email): Promise<boolean> {
    return await this.accountService.emailVerified(email);
  }

  openResetPasswordPage(): void {
    this.navCtrl.push('ResetPasswordPage');
  }
}
