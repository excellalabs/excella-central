import { AccountServiceProvider } from './../../providers/account.service/account.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordValidator } from '../../../src/validators/passwords';
import { UsernameValidator } from '../../../src/validators/usernames';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
  registerForm: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private formBuilder: FormBuilder,
    private accountServiceProvider: AccountServiceProvider
  ) {
    this.registerForm = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('^.+@excella.com$'),
          UsernameValidator.checkAccount,
          UsernameValidator.profileExists
        ]
      ],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: [
        '',
        [Validators.required, PasswordValidator.passwordsMatch]
      ]
    });
  }

  registerUser() {
    this.accountServiceProvider
      .register(this.registerForm.value.email, this.registerForm.value.password)
      .then(success => {
        if (success) {
          this.navCtrl.setRoot('HomePage'); // direct to a confirm password email was sent screen
        } else {
          alert('Registration failed.'); // replace with something better
        }
      });
  }
}
