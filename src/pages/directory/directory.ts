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
  profilesToDisplay: Profile[] = [];
  generateFullName = generateFullName;
  searchText: string;
  resultsPerPage: number = 30;
  totalRecordsRetrieved: number = 0;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public profileService: ProfileService,
    private cloudinary: Cloudinary
  ) {}

  async ionViewDidLoad() {
    this.searchText = '';
    this.getNewProfiles(this.resultsPerPage, this.totalRecordsRetrieved).then(
      profiles => {
        this.addNewData(profiles);
      }
    );
  }

  goToDirectoryDetail(profile) {
    this.navCtrl.push('DirectoryDetailPage', { id: profile.id });
  }

  getFullName(profile: Profile): string {
    return generateFullName(profile.firstName, profile.lastName);
  }

  doInfinite(infiniteScroll) {
    this.getNewProfiles(this.resultsPerPage, this.totalRecordsRetrieved).then(
      profiles => {
        setTimeout(() => {
          this.addNewData(profiles);
          infiniteScroll.complete();
        }, 500);
      }
    );
  }

  private async getNewProfiles(
    limit: number,
    skip: number
  ): Promise<Profile[]> {
    return await this.profileService.getProfilesWithinLimit(limit, skip);
  }

  private addNewData(profiles: Profile[]): void {
    this.profilesToDisplay = this.profilesToDisplay.concat(profiles);
    this.totalRecordsRetrieved += this.resultsPerPage;
  }
}
