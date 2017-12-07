import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  loggedIn = false;
  image: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  openDirectoryPage() {
    this.navCtrl.push('DirectoryPage');
  }

  openFaceoffPage() {
    this.navCtrl.push('FaceoffPage');
  }

  logoutUser() {
    console.log('User logged out');
    this.loggedIn = false;
  }

  uploadPicture() {
    const cloudName = 'excella';
    const unsignedUploadPreset = 'kwoafltg';

    var url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;
    var xhr = new XMLHttpRequest();
    var fd = new FormData();
    xhr.open('POST', url, true);
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

    xhr.onreadystatechange = function(e) {
      if (xhr.readyState == 4 && xhr.status == 200) {
        // File uploaded successfully
        var response = JSON.parse(xhr.responseText);
        // https://res.cloudinary.com/cloudName/image/upload/v1483481128/public_id.jpg
        var url = response.secure_url;
        // Create a thumbnail of the uploaded image, with 150px width
        var tokens = url.split('/');
        tokens.splice(-2, 0, 'w_150,c_scale');
        var img = new Image(); // HTML5 Constructor
        img.src = tokens.join('/');
        img.alt = response.public_id;
        document.getElementById('gallery').appendChild(img);
      }
    };

    fd.append('upload_preset', unsignedUploadPreset);
    fd.append('tags', 'browser_upload'); // Optional - add tag for image admin in Cloudinary
    fd.append('file', this.image, 'test.png');
    xhr.send(fd);
  }

  imgChange(event) {
    this.image = event.srcElement.files[0];
  }
}
