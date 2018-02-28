import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfileAdminPage } from './profile-admin';

@NgModule({
  declarations: [
    ProfileAdminPage,
  ],
  imports: [
    IonicPageModule.forChild(ProfileAdminPage),
  ],
})
export class ProfileAdminPageModule {}
