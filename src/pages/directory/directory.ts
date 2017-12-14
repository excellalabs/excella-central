import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import { Profile, generateFullName } from '../../models/profile/profile';
import { ProfileService } from '../../providers/profile.service/profile.service';

@IonicPage()
@Component({
  selector: 'page-directory',
  templateUrl: 'directory.html'
})
export class DirectoryPage {
  profilesToDisplay: Profile[] = [];
  resultsPerPage: number = 30;
  totalRecordsRetrieved: number = 0;
  searchTextSubject: Subject<string> = new Subject<string>();
  searchTextValue: string;
  generateFullName = generateFullName;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public profileService: ProfileService
  ) {
    this.searchTextSubject
      .debounceTime(100)
      .distinctUntilChanged()
      .switchMap(text => {
        if (text == '') {
          this.resetData();
          return this.getNewProfiles(
            this.resultsPerPage,
            this.totalRecordsRetrieved
          );
        } else {
          return this.profileService.getProfilesBySearch(text);
        }
      })
      .subscribe(profiles => {
        this.resetData();
        this.addNewData(profiles);
      });

    this.searchTextValue = '';
    this.searchTextSubject.next(this.searchTextValue);
  }

  goToDirectoryDetail(profile) {
    this.navCtrl.push('DirectoryDetailPage', { id: profile.id });
  }

  getFullName(profile: Profile): string {
    return generateFullName(profile.firstName, profile.lastName);
  }

  doInfinite(infiniteScroll) {
    this.totalRecordsRetrieved += this.resultsPerPage;
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
  }

  private resetData(): void {
    this.totalRecordsRetrieved = 0;
    this.profilesToDisplay = [];
  }

  private onCancel(event) {
    this.searchTextValue = '';
    this.searchTextSubject.next(this.searchTextValue);
  }

  private onInput(event) {
    this.searchTextSubject.next(this.searchTextValue);
  }

  public getSmallUrl(url) {
    return url.replace('upload', 'upload/c_scale,w_50,q_25');
  }
}
