import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminPage } from './admin';
import { OrgAdminComponent } from '../../components/org-admin/org-admin';
import { ProfilesAdminComponent } from '../../components/profiles-admin/profiles-admin';

@NgModule({
  declarations: [AdminPage, OrgAdminComponent, ProfilesAdminComponent],
  imports: [IonicPageModule.forChild(AdminPage)]
})
export class AdminPageModule {}
