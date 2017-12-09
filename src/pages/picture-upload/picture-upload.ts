import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AccountServiceProvider } from '../../providers/account.service/account.service';
import { ProfileServiceProvider } from '../../providers/profile.service/profile.service';
import { PictureUploadServiceProvider } from '../../providers/picture-upload.service.ts/picture-upload.service';
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
    public accountServiceProvider: AccountServiceProvider,
    public profileServiceProvider: ProfileServiceProvider,
    public pictureUploadServiceProvider: PictureUploadServiceProvider
  ) {}

  async ionViewDidLoad() {
    this.storage.get('userId').then(userId => {
      (async () => {
        this.userId = userId;
        this.account = await this.accountServiceProvider.getAccount(
          this.userId
        );
        this.profile = await this.profileServiceProvider.getProfileByEmail(
          this.account.email
        );
      })();
    });
  }

  uploadPicture() {
    if (this.image) {
      this.pictureUploadServiceProvider.uploadPicture(this.image, this.profile);
    } else {
      alert('Please choose a picture to upload'); // replace with something better
    }
  }

  imgChange(event) {
    this.image = event.srcElement.files[0];
    this.pictureUploadServiceProvider.imgChange(this.image);
  }
}
