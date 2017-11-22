import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {ApiServiceProvider} from '../../providers/api.service/api.service';
import {Profile, generateFullName} from '../../models/profile/profile';

@IonicPage()
@Component({
  selector: 'page-directory',
  templateUrl: 'directory.html',
})
export class DirectoryPage {
  profiles: Promise<Profile[]>;
  generateFullName = generateFullName;
  searchText: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private apiServiceProvider: ApiServiceProvider) {
  }

  ionViewDidLoad() {
    this.searchText = "";
    this.profiles = this.getProfiles();
  }

  async getProfiles() {
    return await this.apiServiceProvider.getProfiles();
  }

  goToDirectoryDetail(profile) {
    this.navCtrl.push('DirectoryDetailPage', {profile: profile});
  }

  getFullName(profile: Profile): string {
    return generateFullName(profile.firstName, profile.lastName);
  }
}
