import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  loggedIn = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera) {}

  openDirectoryPage() {
    this.navCtrl.push('DirectoryPage');
  }

  openFaceoffPage() {
    this.navCtrl.push('FaceoffPage');
  }

  openGallery (): void {
    let cameraOptions = {
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.FILE_URI,
      quality: 100,
      targetWidth: 1000,
      targetHeight: 1000,
      encodingType: this.camera.EncodingType.JPEG,
      correctOrientation: true
    }

    this.camera.getPicture(cameraOptions)
      .then(file_uri => this.imageSrc = file_uri,
        err => console.log(err));
  }

  logoutUser() {
    console.log('User logged out');
    this.loggedIn = false;
  }
}
