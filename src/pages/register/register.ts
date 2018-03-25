import { AccountService } from './../../providers/account.service/account.service';
import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  AlertController,
  ToastController
} from 'ionic-angular';
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
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
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
      const alert = this.alertCtrl.create({
        title: 'Register failed!',
        subTitle: 'An account with this email already exists.',
        buttons: ['OK']
      });
      alert.present();
    } else if (!profileDoesNotExist) {
      const alert = this.alertCtrl.create({
        title: 'Register failed!',
        subTitle: 'This email could not be found in the employee directory.',
        buttons: ['OK']
      });
      alert.present();
    } else {
      this.accountService.register(email, password, "user").then(
        success => {
          this.showConfirmationEmailToast();
        },
        err => {
          const alert = this.alertCtrl.create({
            title: 'Register failed!',
            subTitle: 'Please try again.',
            buttons: ['OK']
          });
          alert.present();
        }
      );
    }
  }

  showConfirmationEmailToast() {
    let toast = this.toastCtrl.create({
      message: 'Confirmation email sent. Confirm your email before logging in.',
      position: 'bottom',
      showCloseButton: true
    });
    toast.present();
  }

  async accountExists(email): Promise<boolean> {
    return await this.accountService.checkAccountExists(email);
  }

  async profileDoesExist(email): Promise<boolean> {
    return await this.accountService.checkProfileExists(email);
  }
}
