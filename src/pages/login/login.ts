import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountServiceProvider } from '../../providers/account.service/account.service';

@IonicPage()
@Component({
  selector: 'page-login',
  providers: [AccountServiceProvider],
  templateUrl: 'login.html'
})
export class LoginPage {
  public userForm: FormGroup;

  constructor(
    /*public toastCtrl: ToastController, */
    private navCtrl: NavController,
    private formBuilder: FormBuilder,
    private accountServiceProvider: AccountServiceProvider
  ) {
    this.userForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  loginUser() {
    this.accountServiceProvider
      .login(this.userForm.value.email, this.userForm.value.password)
      .then(loggedIn => {
        if (loggedIn) {
          this.navCtrl.setRoot('HomePage');
        } else {
          //TODO: find out why toastCtrl .present() causes tests to fail
          /*
          this.toastCtrl.create({
          message: "Your credentials didn't work. Please try again.",
          duration: 3000,
          showCloseButton: true,
          dismissOnPageChange: true
          }).present();
          */
        }
      });
  }
}
