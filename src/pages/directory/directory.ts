import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Profile, generateFullName } from '../../models/profile/profile';
import { ProfileService } from '../../providers/profile.service/profile.service';
import { Cloudinary } from '@cloudinary/angular-4.x';

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
    public profileService: ProfileService,
    private cloudinary: Cloudinary
  ) {}

  ionViewDidLoad() {
    this.searchText = '';
    this.profiles = this.getProfiles();
  }

  async getProfiles() {
    return await this.profileService.getProfiles();
  }

  goToDirectoryDetail(profile) {
    this.navCtrl.push('DirectoryDetailPage', { id: profile.id });
  }

  getFullName(profile: Profile): string {
    return generateFullName(profile.firstName, profile.lastName);
  }

  getPhotoPublicId(photoUrl: string): string {
    if (photoUrl) {
      // check wheter URL is full URL or already in "public ID" format
      if (photoUrl.includes('/')) {
        const parts = photoUrl.split('/');
        return parts[parts.length - 1];
      } else {
        return photoUrl;
      }
    }
    return null;
  }
}
