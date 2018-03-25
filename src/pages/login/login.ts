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
    let checkEmailVerified = this.accountService.emailVerified(this.userForm.value.email);
    checkEmailVerified.then(verified => {
      if (!verified) {
        this.showEmailNotVerifiedAlert();
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
    });
  }

  showLoginFailedAlert() {
    const alert = this.alertCtrl.create({
      title: 'Login failed!',
      subTitle: 'Please try again.',
      buttons: ['OK']
    });
    alert.present();
  }

  showEmailNotVerifiedAlert() {
    const alert = this.alertCtrl.create({
      title: 'Email not verified',
      subTitle: 'Please confirm your email before logging in.',
      buttons: ['OK']
    });
    alert.present();
  }

  openResetPasswordPage(): void {
    this.navCtrl.push('ResetPasswordPage');
  }
}
