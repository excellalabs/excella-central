import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProfileService } from '../../providers/profile.service/profile.service';

/**
 * Generated class for the ProfileAdminComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'profiles-admin',
  templateUrl: 'profiles-admin.html'
})
export class ProfilesAdminComponent implements OnInit {
  profiles;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public profileService: ProfileService
  ) {}

  async ngOnInit() {
    this.profiles = await this.profileService.getProfiles();
  }

  openProfileAdminPage() {
    this.navCtrl.push('ProfileAdminPage');
  }

  edit(profile) {
    this.navCtrl.push('ProfileAdminPage', { id: profile.id });
  }

  emailAbv(email) {
    if (!email) {
      return '';
    }
    const split = email.split('@');
    return split[0] + '@' + split[1].slice(0, 2) + '...';
  }
}
