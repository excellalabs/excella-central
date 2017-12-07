import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PictureUploadPage } from './picture-upload';

@NgModule({
  declarations: [
    PictureUploadPage,
  ],
  imports: [
    IonicPageModule.forChild(PictureUploadPage),
  ],
})
export class PictureUploadPageModule {}
