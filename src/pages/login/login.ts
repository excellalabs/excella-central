import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ApiServiceProvider} from "../../providers/api.service/api.service";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  private userForm: FormGroup;
  constructor(public toastCtrl: ToastController, private formBuilder: FormBuilder, private apiServiceProvider: ApiServiceProvider) {
    this.userForm = this.formBuilder.group({
      username: ['', Validators.required],
      password:['', [Validators.required, Validators.minLength(6)]]
    });
  }
  loginUser(){
    this.apiServiceProvider.checkLogin(
      this.userForm.value.username,
      this.userForm.value.password
    ).then(isValid => {
      if(isValid){
        // save login credentials
      }else{
        this.toastCtrl.create({
          message: "Your credentials didn't work. Please try again.",
          duration: 3000,
          showCloseButton: true,
          dismissOnPageChange: true
        }).present();
      }
    });
  }
}
