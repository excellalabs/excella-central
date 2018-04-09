import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Profile } from '../../models/profile/profile';
import { ProfileService } from '../../providers/profile.service/profile.service';
import { AuthenticationService } from '../../providers/authentication.service/authentication.service';
import { AccountService } from '../../providers/account.service/account.service';

@IonicPage()
@Component({
  selector: 'page-directory-detail',
  templateUrl: 'directory-detail.html'
})
export class DirectoryDetailPage {
  profile: Profile = null;
  isAdmin: boolean = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public profileService: ProfileService,
    public authService: AuthenticationService,
    public accountService: AccountService
  ) {}

  async ionViewDidLoad() {
    await this.checkIfUserIsAdmin();
    await this.getProfile();
  }

  async ionViewWillEnter() {
    await this.getProfile();
  }

  async checkIfUserIsAdmin() {
    const userId = await this.authService.getUserId();
    this.isAdmin = await this.accountService.isAdmin(userId);
  }

  async getProfile() {
    const profileId = this.navParams.get('id');
    if (profileId !== undefined) {
      this.profile = await this.profileService.getProfileById(profileId);
    } else {
      this.navCtrl.push('DirectoryPage');
    }
  }

  goToProfileAdminScreen(profileId: number) {
    this.navCtrl.push('ProfileAdminPage', { id: profileId });
  }

  async swipe(event) {
    if (event.direction === 2) {
      // right to left swipe
      const previousProfile = await this.profileService.getPreviousProfile(
        this.profile.id
      );
      if (previousProfile) {
        this.profile = previousProfile;
      }
    } else if (event.direction === 4) {
      // left to right swipe
      const nextProfile = await this.profileService.getNextProfile(
        this.profile.id
      );
      if (nextProfile) {
        this.profile = nextProfile;
      }
    }
  }

  public transformUrl(url) {
    return url.replace('upload', 'upload/c_scale,w_300,q_50');
  }
}
