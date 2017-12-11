var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { ProfileService } from '../profile.service/profile.service';
var PictureUploadService = (function () {
    function PictureUploadService(profileService) {
        this.profileService = profileService;
    }
    PictureUploadService.prototype.uploadPicture = function (image, profile) {
        var _this = this;
        var cloudName = 'excella';
        var unsignedUploadPreset = 'kwoafltg';
        var url = "https://api.cloudinary.com/v1_1/" + cloudName + "/upload";
        var xhr = new XMLHttpRequest();
        var fd = new FormData();
        xhr.open('POST', url, true);
        xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        xhr.onreadystatechange = function (e) {
            if (xhr.readyState == 4 && xhr.status == 200) {
                // File uploaded successfully
                var response = JSON.parse(xhr.responseText);
                // https://res.cloudinary.com/cloudName/image/upload/v1483481128/public_id.jpg
                var url_1 = response.secure_url;
                // Create a thumbnail of the uploaded image, with 150px width
                var tokens = url_1.split('/');
                tokens.splice(-2, 0, 'w_150,c_scale');
                var img = new Image(); // HTML5 Constructor
                img.src = tokens.join('/');
                img.alt = response.public_id;
            }
        };
        fd.append('upload_preset', unsignedUploadPreset);
        fd.append('tags', 'browser_upload'); // Optional - add tag for image admin in Cloudinary
        fd.append('file', image, 'test.png');
        xhr.onload = function () {
            profile.photoUrl = JSON.parse(xhr.response).url;
            _this.profileService.updateProfileById(profile);
        };
        xhr.send(fd);
    };
    PictureUploadService.prototype.imgChange = function (image) {
        var photoToUpload = document.getElementById('photo-to-upload');
        var reader = new FileReader();
        reader.onloadend = function () {
            photoToUpload.src = reader.result;
        };
        reader.readAsDataURL(image);
    };
    return PictureUploadService;
}());
PictureUploadService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [ProfileService])
], PictureUploadService);
export { PictureUploadService };
//# sourceMappingURL=picture-upload.service.js.map