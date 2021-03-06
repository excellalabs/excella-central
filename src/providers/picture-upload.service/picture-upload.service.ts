import { Injectable } from '@angular/core';
import { Profile } from '../../models/profile/profile';
import { ProfileService } from '../profile.service/profile.service';

@Injectable()
export class PictureUploadService {
  constructor(public profileService: ProfileService) {}

  async uploadPicture(image: Blob, profile: Profile): Promise<boolean> {
    const cloudName = 'excella';
    const unsignedUploadPreset = 'kwoafltg';

    const url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;
    let xhr = new XMLHttpRequest();
    let fd = new FormData();
    xhr.open('POST', url, true);
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

    xhr.onreadystatechange = e => {
      if (xhr.readyState == 4 && xhr.status == 200) {
        // File uploaded successfully
        let response = JSON.parse(xhr.responseText);
        // https://res.cloudinary.com/cloudName/image/upload/v1483481128/public_id.jpg
        let url = response.secure_url;
        // Create a thumbnail of the uploaded image, with 150px width
        let tokens = url.split('/');
        tokens.splice(-2, 0, 'w_150,c_scale');
        let img = new Image(); // HTML5 Constructor
        img.src = tokens.join('/');
        img.alt = response.public_id;
      }
    };

    fd.append('upload_preset', unsignedUploadPreset);
    fd.append('tags', 'browser_upload'); // Optional - add tag for image admin in Cloudinary
    fd.append('file', image, 'test.png');
    xhr.onload = async () => {
      profile.photoUrl = JSON.parse(xhr.response).secure_url;
      await this.profileService.updateProfileById(profile);
    };
    xhr.send(fd);
    return Promise.resolve(true);
  }

  imgChange(image: Blob) {
    const photoToUpload = document.getElementById(
      'photo-to-upload'
    ) as HTMLImageElement;
    const reader = new FileReader();
    reader.onloadend = function() {
      photoToUpload.src = reader.result;
    };
    reader.readAsDataURL(image);
  }
}
