import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ResetPasswordFormPage } from './reset-password-form';

@NgModule({
  declarations: [
    ResetPasswordFormPage,
  ],
  imports: [
    IonicPageModule.forChild(ResetPasswordFormPage),
  ],
})
export class ResetPasswordFormPageModule {}
