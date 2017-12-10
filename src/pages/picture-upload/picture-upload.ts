import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AccountService } from '../../providers/account.service/account.service';
import { ProfileService } from '../../providers/profile.service/profile.service';
import { PictureUploadService } from '../../providers/picture-upload.service.ts/picture-upload.service';
import { Profile } from '../../models/profile/profile';
import { Account } from '../../models/account/account';

@IonicPage()
@Component({
  selector: 'page-picture-upload',
  templateUrl: 'picture-upload.html'
})
export class PictureUploadPage {
  image: Blob;
  userId: string;
  account: Account;
  profile: Profile;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage,
    public accountService: AccountService,
    public profileService: ProfileService,
    public pictureUploadService: PictureUploadService
  ) {}

  async ionViewDidLoad() {
    this.storage.get('userId').then(userId => {
      (async () => {
        this.userId = userId;
        this.account = await this.accountService.getAccount(this.userId);
        this.profile = await this.profileService.getProfileByEmail(
          this.account.email
        );
      })();
    });
  }

  uploadPicture() {
    if (this.image) {
      this.pictureUploadService.uploadPicture(this.image, this.profile);
    } else {
      alert('Please choose a picture to upload'); // replace with something better
    }
  }

  imgChange(event) {
    this.image = event.srcElement.files[0];
    this.pictureUploadService.imgChange(this.image);
  }
}
