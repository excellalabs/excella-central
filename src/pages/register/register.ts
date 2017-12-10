import { AccountService } from './../../providers/account.service/account.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordValidator } from '../../../src/validators/passwords';

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
    private accountService: AccountService
  ) {
    this.registerForm = this.formBuilder.group({
      email: [
        '',
        [Validators.required, Validators.pattern('^.+@excella.com$')]
      ],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: [
        '',
        [Validators.required, PasswordValidator.passwordsMatch]
      ]
    });
  }

  async registerUser(): Promise<void> {
    const email = this.registerForm.value.email;
    const password = this.registerForm.value.password;
    const accountExists = await this.accountExists(email);
    const profileDoesNotExist = await this.profileDoesExist(email);
    if (accountExists) {
      alert('Account already exists for this email.');
    } else if (!profileDoesNotExist) {
      alert('Email was not found in the Excella directory.');
    } else {
      this.accountService.register(email, password).then(
        success => {
          this.navCtrl.setRoot('LandingPage'); // direct to a confirm password email was sent screen
        },
        err => {
          alert('Registration failed.'); // replace with something better
        }
      );
    }
  }

  async accountExists(email): Promise<boolean> {
    return await this.accountService.checkAccountExists(email);
  }

  async profileDoesExist(email): Promise<boolean> {
    return await this.accountService.checkProfileExists(email);
  }
}
