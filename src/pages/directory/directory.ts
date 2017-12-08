import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Profile, generateFullName } from '../../models/profile/profile';
import { ProfileService } from '../../providers/profile.service/profile.service';

@IonicPage()
@Component({
  selector: 'page-directory',
  templateUrl: 'directory.html'
})
export class DirectoryPage {
  profiles: Promise<Profile[]>;
  generateFullName = generateFullName;
  searchText: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public profileService: ProfileService
  ) {}

  ionViewDidLoad() {
    this.searchText = '';
    this.profiles = this.getProfiles();
  }

  async getProfiles() {
    return await this.profileService.getProfiles();
  }

  goToDirectoryDetail(profile) {
    this.navCtrl.push('DirectoryDetailPage', { profile: profile });
  }

  getFullName(profile: Profile): string {
    return generateFullName(profile.firstName, profile.lastName);
  }
}
