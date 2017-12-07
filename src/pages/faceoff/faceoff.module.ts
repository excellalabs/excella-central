import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FaceoffPage } from './faceoff';

@NgModule({
  declarations: [
    FaceoffPage,
  ],
  imports: [
    IonicPageModule.forChild(FaceoffPage),
  ],
})
export class FaceoffPageModule {}
