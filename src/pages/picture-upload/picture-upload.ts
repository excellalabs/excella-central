import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  AlertController
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
    private pictureUploadService: PictureUploadService
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
      const alert = this.alertCtrl.create({
        title: 'Picture upload failed!',
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
