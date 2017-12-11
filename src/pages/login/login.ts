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
    this.accountService
      .login(this.userForm.value.email, this.userForm.value.password)
      .then(loggedIn => {
        if (loggedIn) {
          this.navCtrl.setRoot('HomePage');
        } else {
          const alert = this.alertCtrl.create({
            title: 'Login failed!',
            subTitle: 'Please try again.',
            buttons: ['OK']
          });
          alert.present();
        }
      });
  }
}
