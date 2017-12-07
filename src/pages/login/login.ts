import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiServiceProvider } from '../../providers/api.service/api.service';

@IonicPage()
@Component({
  selector: 'page-login',
  providers: [ApiServiceProvider],
  templateUrl: 'login.html'
})
export class LoginPage {
  private userForm: FormGroup;

  constructor(
    /*public toastCtrl: ToastController, */
    private navCtrl: NavController,
    private formBuilder: FormBuilder,
    private apiServiceProvider: ApiServiceProvider
  ) {
    this.userForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  loginUser() {
    this.apiServiceProvider.login(
      this.userForm.value.username,
      this.userForm.value.password,
      this.handleLogin.bind(this)
    );
  }

  handleLogin(isValid) {
    if (isValid) {
      // save login credentials
      console.log('valid login');
      this.navCtrl.setRoot('HomePage');
    } else {
      console.log('invalid login');
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
  }
}
