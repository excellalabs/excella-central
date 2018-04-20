import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  AlertController,
  LoadingController
} from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AccountService } from '../../providers/account.service/account.service';
import { ProfileService } from '../../providers/profile.service/profile.service';
import { PictureUploadService } from '../../providers/picture-upload.service/picture-upload.service';
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
    private alertCtrl: AlertController,
    private accountService: AccountService,
    private profileService: ProfileService,
    private pictureUploadService: PictureUploadService,
    private loadingCtrl: LoadingController
  ) {}

  async ionViewDidLoad() {
    const profileId = this.navParams.get('id');
    if (profileId) {
      this.profile = await this.profileService.getProfileById(profileId);
    } else {
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
  }

  async uploadPicture() {
    const loader = this.loadingCtrl.create();
    loader.present();
    if (this.image) {
      await this.pictureUploadService.uploadPicture(this.image, this.profile);
      loader.dismiss();
      const alert = this.alertCtrl.create({
        title: 'Picture Upload Successful!',
        subTitle: 'Profile picture was successfully updated.',
        buttons: ['OK']
      });
      alert.present();
    } else {
      loader.dismiss();
      const alert = this.alertCtrl.create({
        title: 'Picture Upload Failed',
        subTitle: 'Please select a picture and try again.',
        buttons: ['OK']
      });
      alert.present();
    }
  }

  imgChange(event) {
    this.image = event.srcElement.files[0];
    this.pictureUploadService.imgChange(this.image);
  }
}
